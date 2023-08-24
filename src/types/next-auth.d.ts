import { DefaultSession, DefaultUser } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
	interface User extends DefaultUser {
		id: string;
		username: string;
		email: string;
		provider: string;
		googleId?: string;
	}
	interface Session extends DefaultSession {
		user: User;
	}
}

declare module 'next-auth/jwt' {
	interface JWT extends DefaultJWT {
		id?: string;
		provider?: string;
		email?: string;
		username?: string;
	}
}
