'use client';

import React, { Fragment } from 'react';
import Menu from '../ui/Menu';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';

const getAvatarText = (word: string, length: number = 1) => {
	return word
		.split(' ')
		.filter((w) => !!w.trim().length)
		.reduce((ac, curr, i) => (i < length ? ac + curr.charAt(0) : ''), '');
};

const LetterAvatar = ({ text, onClick }: { text: string; onClick: any }) => (
	<span className='avatar' onClick={onClick}>
		{getAvatarText(text)}
	</span>
);

const AvatarButton = ({ onClick }: RenderButtonProps) => {
	const { data: session } = useSession();

	if (!session) return <Fragment />;

	return session.user?.image ? (
		<Image
			onClick={onClick}
			className='avatar'
			src={session.user.image}
			alt={session.user?.name ?? ''}
			width={40}
			height={40}
			priority
			fetchPriority='high'
		/>
	) : (
		<LetterAvatar onClick={onClick} text={session.user?.name ?? ''} />
	);
};

const ProfileMenu = () => {
	const { data: session } = useSession();

	if (!session) return null;

	const handleSignOut = (cb: () => void) => {
		cb();
		signOut();
	};

	return (
		<Menu renderButton={AvatarButton}>
			{({ closeMenu }) => (
				<>
					<ul>
						<li onClick={() => handleSignOut(closeMenu)}>Logout </li>
					</ul>
				</>
			)}
		</Menu>
	);
};

export default ProfileMenu;
