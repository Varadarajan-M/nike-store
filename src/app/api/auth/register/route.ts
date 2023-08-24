import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

import { createUser, findUserByEmail } from '@/db/user';
import conn from '@/db/connection';

import { EMAIL_REGEX } from '@/util';

export async function POST(request: Request) {
	try {
		const res = await request.json();
		if (!res.username)
			throw new Error('Username is either empty or invalid, Please check.');

		if (!res.email || !EMAIL_REGEX.test(res?.email))
			throw new Error('Email is either empty or invalid, Please check.');

		if (!res.password || res?.password?.length < 8)
			throw new Error('Password is either empty or invalid, Please check.');

		const existingUser = await findUserByEmail(conn, res.email);

		if (existingUser) throw new Error('User already exists.');

		const data = {
			username: res.username,
			email: res.email,
			password: await bcrypt.hash(res.password, +process.env.SALT_ROUNDS!),
			provider: 'credentials',
		};

		const newUser = await createUser(conn, data);

		return NextResponse.json({ ok: true, data: newUser });
	} catch (err: any) {
		return NextResponse.json({
			ok: false,
			error: err?.message ?? 'Something went wrong',
		});
	}
}
