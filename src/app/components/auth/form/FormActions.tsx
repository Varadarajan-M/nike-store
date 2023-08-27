import { Fragment } from 'react';
import GoogleSignin from './GoogleSignin';
import { FormStatus, IFormProps } from '.';

interface IFormActionsProps extends IFormProps {
	onGoogleSignin: () => void;
	status: FormStatus;
}

const FormActions = ({ mode, onGoogleSignin, status }: IFormActionsProps) => {
	const isLogin = mode === 'login';

	const buttonText = isLogin ? 'Login' : 'Register';

	return (
		<div className='form__actions'>
			<button className='submit' disabled={status === FormStatus.IN_PROGRESS}>
				{buttonText}
			</button>
			{isLogin && (
				<Fragment>
					<span className='seperator'>OR</span>
					<GoogleSignin onGoogleSignin={onGoogleSignin} />
				</Fragment>
			)}
		</div>
	);
};
export default FormActions;
