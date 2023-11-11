import '@/styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';

import { getServerSession } from 'next-auth';
import authConfig from './api/auth/config';
import AuthProvider from './components/auth/AuthProvider';
import ToastProvider from './components/ui/ToastProvider';
import JotaiProvider from './components/jotai/Provider';

export const metadata = {
	title: 'Nike Store',
	description: 'Nike Store created by Varadarajan with NextJS 13.',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authConfig);
	return (
		<html lang='en'>
			<body>
				<AuthProvider session={session}>
					<JotaiProvider>
						<ToastProvider>{children}</ToastProvider>
					</JotaiProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
