import { useForm, FormProvider } from 'react-hook-form';
import Formgroup from './Formgroup';
import FormActions from './FormActions';

import { getFields } from '../helper';

import '@/styles/components/auth/form.scss';

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

	return (
		<FormProvider {...methods}>
			<form className='form'>
				{fields.map((field) => (
					<Formgroup key={field.id} {...field} />
				))}

				<FormActions mode={mode} />
			</form>
		</FormProvider>
	);
};

export default Form;
