'use client';

import { useCallback, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import Formgroup from './Formgroup';
import FormActions from './FormActions';
import { signIn } from 'next-auth/react';

import { getFields } from '../helper';

import '@/styles/components/auth/form.scss';
import { registerUser } from '@/api/user';
import { toast } from 'react-toastify';

export interface IFormProps {
	mode: 'login' | 'register';
}

interface FormFields {
	username?: string;
	email: string;
	password: string;
}

export enum FormStatus {
	'IDLE' = 'idle',
	'IN_PROGRESS' = 'in-progress',
	'DONE' = 'done',
}

const Form = ({ mode }: { mode: 'login' | 'register' }) => {
	const fields = getFields(mode);
	const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

	const methods = useForm<FormFields>({
		mode: 'onTouched',
		defaultValues: {},
	});

	const router = useRouter();

	const handleSignin = useCallback(
		async (
			data: Pick<FormFields, 'email' | 'password'>,
			setterFn: React.Dispatch<React.SetStateAction<FormStatus>>,
		) => {
			setterFn(FormStatus.IN_PROGRESS);

			const res = signIn('credentials', {
				...data,
				redirect: false,
				callbackUrl: '/',
			});

			const r = await toast.promise(
				res,
				{
					pending: 'Signing in...',
				},
				{ toastId: 'signin-progress' },
			);

			setterFn(FormStatus.DONE);

			toast.dismiss('signin-progress');

			if (r?.error) return toast.error(r.error);

			router.replace(r?.url as string);
		},
		[router],
	);

	const handleRegister = useCallback(
		async (
			data: Pick<FormFields, 'email' | 'password' | 'username'>,
			setterFn: React.Dispatch<React.SetStateAction<FormStatus>>,
		) => {
			setterFn(FormStatus.IN_PROGRESS);

			const res = registerUser({
				username: data?.username as string,
				...data,
			});

			const r = await toast.promise(
				res,
				{
					pending: 'Creating your account...',
				},
				{ toastId: 'signup-progress' },
			);

			toast.dismiss('signup-progress');

			if (!r.ok) return toast.error(r?.error);

			toast.info('Registraton Successful...', { toastId: 'signup-success' }); // toastId is random

			toast.dismiss('signup-success');

			await handleSignin(data, setStatus);
		},
		[handleSignin],
	);

	const submitHandler = useCallback(
		async (data: FormFields) => {
			const actions = { login: handleSignin, register: handleRegister };
			await actions[mode](data, setStatus);
		},
		[handleSignin, handleRegister, mode],
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

				<FormActions
					mode={mode}
					onGoogleSignin={handleGoogleSignin}
					status={status}
				/>
			</form>
		</FormProvider>
	);
};

export default Form;
