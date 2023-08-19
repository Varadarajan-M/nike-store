import { Fragment } from 'react';
import Nav from '../components/header/Nav';
import Footer from '../components/footer';
import Container from '../components/ui/Container';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Fragment>
			<Container>
				<Nav />
				{children}
			</Container>
			<Footer />
		</Fragment>
	);
}
