import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { BiMenuAltRight } from 'react-icons/bi';
import ProfileMenu from './ProfileMenu';
import WishList from './WishList';
import Cart from './Cart';

const NavIcons = ({
	showDrawer,
	setShowDrawer,
}: {
	showDrawer: boolean;
	setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<div className='nav__icons'>
			<WishList />
			<Cart />
			<ProfileMenu />
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
	);
};

export default NavIcons;
