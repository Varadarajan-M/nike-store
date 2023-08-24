import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import conn from '@/db/connection';
import { findPrivateUserByEmail } from '@/db/user';
import bcrypt from 'bcrypt';

const options: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: {},
				password: {},
			},
			async authorize(credentials,req) {
				if (!credentials?.email || !credentials.password)
					throw new Error('Email and Password are required');

				const user = await findPrivateUserByEmail(conn, credentials?.email);

				if (!user) throw new Error("User doesn't exist.");

				const isPasswordMatch = await bcrypt.compare(
					credentials?.password,
					user?.password as string,
				);

				if (!isPasswordMatch) throw new Error('Invalid credentials');

				const res: User = {
					id: user?.id?.toString()!,
					username: user.username,
					email: user.email,
					provider: user.provider,
					googleId: user?.googleId,
				};

				return res || null;
			},
		}),
	],
	pages: {
		signIn: '/auth',
	},
	callbacks: {
		async signIn(params) {
			console.log('Signing in...', params);
			return true;
		},
		async jwt(params) {
			if (params.user && params.token) {
				// delete unwanted info from token
				delete params.token.name;
				delete params.token.picture;
				delete params.token.sub;

				params.token.id = params.user.id;
				params.token.email = params.user.email;
				params.token.provider = params.user.provider;
				params.token.username = params.user.username;
			}
			console.log('From JWT...', params);

			return params.token;
		},
		async session(params) {
			if (params.session && params.token) {
				params.session.user.id = params.token.id as string;
				params.session.user.email = params.token.email as string;
				params.session.user.provider = params.token.provider as string;
				params.session.user.username = params.token.username as string;
			}
			console.log('From SESSION...', params);

			return params.session;
		},
	},
};

export default options;
