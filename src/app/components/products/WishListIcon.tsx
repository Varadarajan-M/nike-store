'use client';

import { useSession } from 'next-auth/react';
import React, { Fragment } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

type WishListIconProps = {
	isWishListed: boolean;
};

const WishListIcon = ({ isWishListed }: WishListIconProps) => {
	const { data: session } = useSession();

	if (!session) return null;

	return (
		<Fragment>
			<MdFavoriteBorder
				onClick={() => !isWishListed && console.log('Wishlisting')}
				className={`product__wishlist ${
					isWishListed ? 'hidden' : 'product__wishlist--active'
				}`}
			/>
			<MdFavorite
				onClick={() => isWishListed && console.log('Removing from Wishlist')}
				className={`product__wishlist ${
					isWishListed ? 'product__wishlist--active' : 'hidden'
				}`}
			/>
		</Fragment>
	);
};

export default WishListIcon;
