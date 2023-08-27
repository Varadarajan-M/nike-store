import React from 'react';
import Link from 'next/link';
import { BiChevronDown } from 'react-icons/bi';

import NavSubMenu from './NavSubMenu';

import { TNavItem, TSubMenuItem } from '@/types/nav';

interface INavMenuProps {
	onMouseEnter: () => void;
	onMouseLeave: () => void;
	item: TNavItem;
	showMenu: boolean;
}

const NavMenu = ({
	onMouseEnter,
	onMouseLeave,
	item,
	showMenu,
}: INavMenuProps) => {
	return (
		<li
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			className='nav__link--menu'
		>
			<Link href={item.link}>{item.label}</Link>
			{<BiChevronDown />}
			{showMenu ? (
				<NavSubMenu
					optionClickHandler={onMouseLeave}
					options={item.submenu as TSubMenuItem[]}
				/>
			) : null}
		</li>
	);
};

export default NavMenu;
