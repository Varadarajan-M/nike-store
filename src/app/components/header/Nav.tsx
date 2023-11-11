'use client';

import React, { useState, Fragment, useEffect, useCallback } from 'react';
import Image from 'next/image';

import NavLinks from './NavLinks';
import NavIcons from './NavIcons';
import NavMobileDrawer from './NavMobileDrawer';

import { navLinks } from './config';
import nikeLogo from '@assets/logo.svg';

import '@/styles/components/header/style.scss';

const Nav = () => {
	const [showDrawer, setShowDrawer] = useState<boolean>(false);
	const [scrollY, setScrollY] = useState<number>(0);
	const [navClass, setNavClass] = useState<string>('show');

	const handleScroll = useCallback(
		(e: Event) => {
			if (window.scrollY > 200) {
				setNavClass('hide');
				setScrollY(window.scrollY);
			}
			if (window.scrollY < scrollY) {
				setNavClass('show');
			}
		},
		[scrollY],
	);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [handleScroll]);

	return (
		<Fragment>
			<nav className={`nav ${navClass}`}>
				<Image src={nikeLogo} priority alt='Nike logo' className='nav__brand' />

				<NavLinks links={navLinks} />

				<NavIcons showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
			</nav>

			<NavMobileDrawer open={showDrawer} />
		</Fragment>
	);
};

export default Nav;
