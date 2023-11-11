'use client';

import React, { Fragment } from 'react';
import { useAtomValue } from 'jotai';
import CartItem from './CartItem';
import {
	cartItemsCountAtom,
	cartLoadingAtom,
	splitCartItemsAtom,
} from '@/jotai/cart/store';
import Loader from '../../ui/Loader';

function CartItems() {
	const cartItems = useAtomValue(splitCartItemsAtom);
	const totalItems = useAtomValue(cartItemsCountAtom);
	const cartLoading = useAtomValue(cartLoadingAtom);

	if (cartLoading) return <Loader />;

	return (
		<div className='cart__items-content'>
			{cartItems.map((atom, index) => (
				<Fragment key={atom.toString()}>
					<CartItem atom={atom} />
					{index < totalItems - 1 && <hr style={{ opacity: 0.3 }} />}
				</Fragment>
			))}
		</div>
	);
}

export default CartItems;
