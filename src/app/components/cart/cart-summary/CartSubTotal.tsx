'use client';

import { cartLoadingAtom, cartSubTotalAtom } from '@/jotai/cart/store';
import { useAtomValue } from 'jotai';
import Loader from '../../ui/Loader';

function CartSubTotal() {
	const subTotal = useAtomValue(cartSubTotalAtom);
	const cartLoading = useAtomValue(cartLoadingAtom);

	return (
		<header className='cart__summary-details-header'>
			<span>SUBTOTAL</span>
			{cartLoading ? (
				<div style={{ position: 'relative' }}>
					<Loader />{' '}
				</div>
			) : (
				<span>₹{subTotal}</span>
			)}
		</header>
	);
}

export default CartSubTotal;
