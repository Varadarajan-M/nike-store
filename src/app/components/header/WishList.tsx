import useWishlist from '@/hooks/useWishlist';
import {
	getWishListItemsAtom,
	wishListCountAtom,
} from '@/jotai/wishlist/store';
import { useAtomValue, useSetAtom } from 'jotai';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { memo, useEffect } from 'react';
import { FiHeart } from 'react-icons/fi';

const WishList = () => {
	const { data: session } = useSession();
	const router = useRouter();

	const wishlistTotal = useAtomValue(wishListCountAtom);
	const getWishListItems = useSetAtom(getWishListItemsAtom);

	const handleWishListClick = () => {
		if (!session) return router.push('/auth');

		router.push('/wishlist');
	};

	// load wishlist items when the user logs in
	useEffect(() => {
		if (session?.user?.email) {
			getWishListItems();
		}
	}, [getWishListItems, session?.user?.email]);

	return (
		<>
			<span className='nav__icons--wishlist' onClick={handleWishListClick}>
				<FiHeart />
				<span className='nav__icons__badge'>{wishlistTotal}</span>
			</span>
		</>
	);
};

export default memo(WishList);
