'use client';

import React from 'react';
import Link from 'next/link';
import { IGenericComponentProps } from '@/types';
import { TSubMenuItem } from '@/types/nav';

interface INavSubMenuProps<T> extends IGenericComponentProps {
	options: T[];
	optionClickHandler: any;
}

const NavSubMenu = ({
	options,
	optionClickHandler,
	style,
	className,
}: INavSubMenuProps<TSubMenuItem>) => {
	return (
		<ul className={`nav__links__submenu ${className ?? ''}`} style={style}>
			{options.map((option) => (
				<li
					onClick={optionClickHandler}
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

export default NavSubMenu;
