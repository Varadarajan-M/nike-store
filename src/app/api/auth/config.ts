import bcrypt from 'bcrypt';
import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import conn from '@/db/connection';
import { createUser, findPrivateUserByEmail, findUserByEmail } from '@/db/user';

const options: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: {},
				password: {},
			},
			async authorize(credentials, req) {
				if (!credentials?.email || !credentials.password)
					throw new Error('Email and Password are required');

				const user = await findPrivateUserByEmail(conn, credentials?.email);

				if (!user) throw new Error("User doesn't exist.");

				if (user.provider === 'google')
					throw new Error(
						'We found a google account associated with this email. Please click on Continue with Google...',
					);

				const isPasswordMatch = await bcrypt.compare(
					credentials?.password,
					(user?.password as string) ?? '',
				);

				if (!isPasswordMatch) throw new Error('Invalid credentials');

				console.log(user);

				const res: User = {
					id: user?.id?.toString()!,
					name: user.username,
					email: user.email,
					provider: user.provider,
					googleId: user?.googleId!,
				};

				console.log('authorize', res);

				return res || null;
			},
		}),
		GoogleProvider({
			clientId: process.env.CLIENT_ID!,
			clientSecret: process.env.CLIENT_SECRET!,
		}),
	],
	pages: {
		signIn: '/auth',
	},
	callbacks: {
		async signIn(params) {
			const isGoogleUser =
				params.profile && params?.account?.provider === 'google';

			if (isGoogleUser) {
				const existingUser = await findUserByEmail(
					conn,
					params.profile?.email as string,
				);
				if (!existingUser) {
					const { email, name } = params.profile!;
					const user = await createUser(conn, {
						username: name as string,
						email: email as string,
						provider: params.account?.provider as string,
						googleId: params.account?.providerAccountId as string,
					});
					console.log(
						'From Signin callback, created new google user record',
						user,
					);
				}
			}

			return true;
		},
		async jwt(params) {
			if (params.token) {
				// delete unwanted info from token
				delete params.token.picture;
				delete params.token.sub;
			}

			const isGoogleUser =
				params.account?.provider === 'google' &&
				params.account &&
				params.profile;

			const isNormalUser =
				params.account?.provider === 'credentials' &&
				params.user &&
				params.token;

			// Credentials users

			if (isNormalUser) {
				params.token.id = params.user.id;
				params.token.email = params.user.email;
				params.token.provider = params.user.provider;
				params.token.name = params.user.name;
			}

			// Google users

			if (isGoogleUser) {
				params.token.id = params.account?.providerAccountId;
				params.token.email = params.profile?.email;
				params.token.provider = params.account?.provider;
				params.token.name = params.profile?.name;
			}

			return params.token;
		},
		async session(params) {
			if (params.session && params.token) {
				params.session.user.id = params.token.id as string;
				params.session.user.email = params.token.email as string;
				params.session.user.provider = params.token.provider as string;
				params.session.user.name = params.token.name as string;
			}

			return params.session;
		},
	},
};

export default options;
