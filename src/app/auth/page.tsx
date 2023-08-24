import CentralizedContainer from '../components/ui/CentralizedContainer';
import Auth from '../components/auth';

import '@/styles/pages/auth.scss';
import { getServerSession } from 'next-auth';
import authConfig from '../api/auth/config';
import { redirect } from 'next/navigation';

const AuthPage = async () => {
	const session = await getServerSession(authConfig);

	console.log('Sesisio', session);

	if (session) redirect('/');

	return (
		<CentralizedContainer>
			<Auth />
		</CentralizedContainer>
	);
};

export default AuthPage;
