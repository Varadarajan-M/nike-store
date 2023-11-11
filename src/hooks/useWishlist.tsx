import React, { useMemo } from 'react';
import {
	wishListItemsAtom,
	toggleWishListAtom,
	wishListLoadingAtom,
} from '@/jotai/wishlist/store';
import { useAtomValue, useSetAtom } from 'jotai';
import { useSession } from 'next-auth/react';
import { TProduct } from '@/types';

const useWishlist = (product?: TProduct) => {
	const { data: session } = useSession();

	const isLoading = useAtomValue(wishListLoadingAtom);
	const wishListItems = useAtomValue(wishListItemsAtom);

	const toggleWishList = useSetAtom(toggleWishListAtom);

	const isItemWishlisted = useMemo(
		() =>
			session?.user?.email
				? Boolean(wishListItems?.find((item) => item?.id === product?.id))
				: false,
		[product, wishListItems, session?.user?.email],
	);

	return {
		isLoggedin: !!session,
		wishListItems,
		isItemWishlisted,
		toggleWishList,
		isLoading,
	};
};

export default useWishlist;
