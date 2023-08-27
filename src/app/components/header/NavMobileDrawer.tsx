'use client';

import React, { useState, Fragment, useEffect } from 'react';
import Link from 'next/link';
import { BiChevronDown } from 'react-icons/bi';

import NavSubMenu from './NavSubMenu';

import { navLinks } from './config';

import { TSubMenuItem } from '@/types/nav';

const NavMobileDrawer = ({ open }: { open: boolean }) => {
	const [showMenu, setShowMenu] = useState<boolean>(false);

	useEffect(() => {
		open
			? (document.body.style.overflowY = 'hidden')
			: (document.body.style.overflowY = 'auto');
	}, [open]);

	return (
		<aside className={`nav__mobile-drawer ${open ? 'open' : ''}`}>
			<ul className='nav__mobile-drawer__links'>
				{navLinks.map((item) =>
					item.isMenu ? (
						<Fragment key={item.label}>
							<li
								className='nav__mobile-drawer__link nav__mobile-drawer__link--menu'
								onClick={() => setShowMenu(!showMenu)}
							>
								<Link href={item.link}>{item.label}</Link>
								{<BiChevronDown />}
							</li>
							{showMenu && (
								<NavSubMenu
									className='nav__mobile-drawer__link--submenu'
									optionClickHandler={() => {}}
									options={item.submenu as TSubMenuItem[]}
								/>
							)}
						</Fragment>
					) : (
						<li className='nav__mobile-drawer__link' key={item.label}>
							{' '}
							{item.label}
						</li>
					),
				)}
			</ul>
		</aside>
	);
};

export default NavMobileDrawer;
