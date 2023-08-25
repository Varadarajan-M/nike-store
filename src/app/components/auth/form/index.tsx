'use client';

import { useCallback } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import Formgroup from './Formgroup';
import FormActions from './FormActions';
import { signIn } from 'next-auth/react';

import { getFields } from '../helper';

import '@/styles/components/auth/form.scss';
import { registerUser } from '@/api/user';

export interface IFormProps {
	mode: 'login' | 'register';
}

interface FormFields {
	username?: string;
	email: string;
	password: string;
}

const Form = ({ mode }: { mode: 'login' | 'register' }) => {
	const fields = getFields(mode);

	const methods = useForm<FormFields>({
		mode: 'onTouched',
		defaultValues: {},
	});

	const router = useRouter();

	const handleSignin = useCallback(
		async (data: Pick<FormFields, 'email' | 'password'>) => {
			const res = await signIn('credentials', {
				...data,
				redirect: false,
				callbackUrl: '/',
			});
			if (!res?.error) {
				return router.replace(res?.url!);
			}
			return res;
		},
		[router],
	);

	const submitHandler = useCallback(
		async (data: FormFields) => {
			if (mode === 'login') {
				const res = await handleSignin({ ...data });
				if (res?.error) return alert(res?.error);
			}
			if (mode === 'register') {
				const res = await registerUser({
					username: data?.username as string,
					...data,
				});
				if (!res.ok) return alert(res?.error);

				await handleSignin({ ...data });
			}
		},
		[handleSignin, mode],
	);

	const handleGoogleSignin = useCallback(() => {
		signIn('google', { callbackUrl: '/api/auth/callback/google' });
	}, []);

	return (
		<FormProvider {...methods}>
			<form className='form' onSubmit={methods.handleSubmit(submitHandler)}>
				{fields.map((field) => (
					<Formgroup key={field.id} {...field} />
				))}

				<FormActions mode={mode} onGoogleSignin={handleGoogleSignin} />
			</form>
		</FormProvider>
	);
};

export default Form;
