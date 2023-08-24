import { IUser } from '@/db/user';

export const registerUser = async (
	data: Pick<IUser, 'username' | 'email' | 'password'>,
) => {
	try {
		const res = await fetch('/api/auth/register', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const json = await res.json();
		return json;
	} catch (err: any) {
		return { ok: false, error: err?.message };
	}
};
