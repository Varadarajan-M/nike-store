import { FaGoogle } from 'react-icons/fa';

interface IGoogleLoginProps {
	onGoogleSignin: () => void;
}

const GoogleSignIn = ({ onGoogleSignin }: IGoogleLoginProps) => {
	return (
		<button
			type='button'
			className='submit google-login'
			onClick={onGoogleSignin}
		>
			{' '}
			<FaGoogle /> Continue with Google
		</button>
	);
};

export default GoogleSignIn;
