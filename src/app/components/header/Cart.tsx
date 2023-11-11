import React, { memo, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { cartItemsCountAtom, getCartItemsAtom } from '@/jotai/cart/store';
import { useAtomValue, useSetAtom } from 'jotai';

const Cart = () => {
	const { data: session } = useSession();
	const router = useRouter();

	const getCartItems = useSetAtom(getCartItemsAtom);
	const cartItemsCount = useAtomValue(cartItemsCountAtom);

	const handleCartClick = () => {
		if (!session) return router.push('/auth');

		router.push('/cart');
	};

	// load cart items when the user logs in
	useEffect(() => {
		if (session?.user?.email) {
			getCartItems();
		}
	}, [getCartItems, session?.user?.email]);

	return (
		<>
			<span className='nav__icons--cart' onClick={handleCartClick}>
				<AiOutlineShoppingCart />
				<span className='nav__icons__badge'>{cartItemsCount}</span>
			</span>
		</>
	);
};

export default memo(Cart);
