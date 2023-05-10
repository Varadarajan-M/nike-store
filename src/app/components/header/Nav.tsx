'use client';

import React, { useState, Fragment, useEffect, useCallback } from 'react';
import nikeLogo from '@/assets/logo.svg';
import Image from 'next/image';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import { BiChevronDown, BiMenuAltRight } from 'react-icons/bi';
import '@/styles/components/header/style.scss';
import Link from 'next/link';
import { IGenericComponentProps } from '@/types';
import { IoMdClose } from 'react-icons/io';
import { navLinks } from './config';

interface INavSubMenuProps<T> extends IGenericComponentProps {
	options: T[];
	optionClickHandler: (...args: any) => void;
}

type TSubMenuLinkData = {
	label: string;
	count: number;
	link: string;
};

const NavSubMenu = (props: INavSubMenuProps<TSubMenuLinkData>) => {
	return (
		<ul
			className={`nav__links__submenu ${props.className ?? ''}`}
			style={props.style}
		>
			{props.options.map((option) => (
				<li
					onClick={props.optionClickHandler}
					key={option.label}
					className='nav__links__submenu__item'
				>
					<Link className='nav__links__submenu__item__label' href={option.link}>
						{option.label}
					</Link>
					<span className='nav__links__submenu__item__count'>
						({option.count})
					</span>
				</li>
			))}
		</ul>
	);
};

const Nav = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
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
		<>
			<nav className={`nav ${navClass}`}>
				<Image
					src={nikeLogo}
					priority
					alt='Nike logo here'
					className='nav__brand'
				/>

				<ul className='nav__links'>
					{navLinks.map((item) =>
						item.isMenu ? (
							<li
								onMouseEnter={() => setShowMenu(true)}
								onMouseLeave={() => setShowMenu(false)}
								key={item.label}
								className='nav__link--menu'
							>
								<Link href={item.link}>{item.label}</Link>
								{<BiChevronDown />}
								{showMenu ? (
									<NavSubMenu
										optionClickHandler={() => setShowMenu(false)}
										options={item.submenu as TSubMenuLinkData[]}
									/>
								) : null}
							</li>
						) : (
							<li key={item.label} className='nav__link'>
								<Link href={item.link}>{item.label}</Link>
							</li>
						),
					)}
				</ul>

				<div className='nav__icons'>
					<span className='nav__icons--wishlist'>
						<FiHeart />
						<span className='nav__icons__badge'>59</span>
					</span>
					<span className='nav__icons--cart'>
						<AiOutlineShoppingCart />
						<span className='nav__icons__badge'>4</span>
					</span>
					{showDrawer ? (
						<IoMdClose
							onClick={() => setShowDrawer(false)}
							className='nav__icons--hamburger'
						/>
					) : (
						<BiMenuAltRight
							onClick={() => setShowDrawer(true)}
							className='nav__icons--hamburger'
						/>
					)}
				</div>
			</nav>
			<NavMobileDrawer open={showDrawer} />
		</>
	);
};

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
									options={item.submenu as TSubMenuLinkData[]}
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

export default Nav;
