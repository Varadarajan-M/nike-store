import { Fragment } from 'react';
import GoogleLogin from './GoogleLogin';
import { IFormProps } from '.';

const FormActions = ({ mode }: IFormProps) => {
	const isLogin = mode === 'login';
	return (
		<div className='form__actions'>
			<button className='submit'>{isLogin ? 'Login' : 'Register'}</button>
			{isLogin && (
				<Fragment>
					<span className='seperator'>OR</span>
					<GoogleLogin />
				</Fragment>
			)}
		</div>
	);
};
export default FormActions;
