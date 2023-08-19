import { useFormContext } from 'react-hook-form';

interface IFormgroupProps {
	label: string;
	id: string;
	type: string;
	validations: any;
}
const Formgroup = ({ label, id, type, validations }: IFormgroupProps) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const hasError = !!errors?.[id]?.message;

	return (
		<div className='form-group'>
			<label
				className={`form-group__label ${hasError ? 'error' : ''}`}
				htmlFor={id}
			>
				{label}
			</label>
			<input
				className={`form-group__input ${hasError ? 'error' : ''}`}
				type={type}
				id={id}
				{...register(id, validations)}
			/>
			{errors[id]?.message && (
				<span className={`form-group__hint ${hasError ? 'error' : ''}`}>
					{errors[id]?.message as string}
				</span>
			)}
		</div>
	);
};

export default Formgroup;
