import '@/styles/global.scss';

export const metadata = {
	title: 'Nike Store',
	description: 'Nike Store created by Varadarajan with NextJS 13.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
