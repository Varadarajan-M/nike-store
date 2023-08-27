'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import NavMenu from './NavMenu';

import { TNavItem } from '@/types/nav';

interface INavLinksProps {
	links: TNavItem[];
}

const NavLinks = ({ links }: INavLinksProps) => {
	const [showMenu, setShowMenu] = useState<boolean>(false);

	const handleMouseEnter = () => setShowMenu(true);
	const handleMouseLeave = () => setShowMenu(false);

	return (
		<ul className='nav__links'>
			{links.map((l) =>
				l.isMenu ? (
					<NavMenu
						key={l.link}
						item={l}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						showMenu={showMenu}
					/>
				) : (
					<li key={l.label} className='nav__link'>
						<Link href={l.link}>{l.label}</Link>
					</li>
				),
			)}
		</ul>
	);
};

export default NavLinks;
