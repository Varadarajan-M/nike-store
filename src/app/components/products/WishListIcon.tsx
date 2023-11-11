'use client';

import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import React, { Fragment, useMemo } from 'react';

import useWishlist from '@/hooks/useWishlist';
import { TProduct } from '@/types';

const WishListIcon = ({ product }: { product: TProduct }) => {
	const { isLoggedin, toggleWishList, isItemWishlisted } = useWishlist(product);

	if (!isLoggedin) return null;

	return (
		<Fragment>
			<MdFavoriteBorder
				onClick={() => !isItemWishlisted && toggleWishList(product)}
				className={`product__wishlist ${
					isItemWishlisted ? 'hidden' : 'product__wishlist--active'
				}`}
			/>
			<MdFavorite
				onClick={() => isItemWishlisted && toggleWishList(product)}
				className={`product__wishlist ${
					isItemWishlisted ? 'product__wishlist--active' : 'hidden'
				}`}
			/>
		</Fragment>
	);
};

export default WishListIcon;
