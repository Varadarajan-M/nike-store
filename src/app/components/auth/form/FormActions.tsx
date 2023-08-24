import { Fragment } from 'react';
import GoogleSignin from './GoogleSignin';
import { IFormProps } from '.';

interface IFormActionsProps extends IFormProps {
	onGoogleSignin: () => void;
}

const FormActions = ({ mode, onGoogleSignin }: IFormActionsProps) => {
	const isLogin = mode === 'login';
	return (
		<div className='form__actions'>
			<button className='submit'>{isLogin ? 'Login' : 'Register'}</button>
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
