import CentralizedContainer from '../components/ui/CentralizedContainer';
import Auth from '../components/auth';

import '@/styles/pages/auth.scss';

const AuthPage = () => {
	return (
		<CentralizedContainer>
			<Auth />
		</CentralizedContainer>
	);
};

export default AuthPage;
