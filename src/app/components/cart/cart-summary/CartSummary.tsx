import React from 'react';
import { ActionButton } from '../../products/ProductActions';
import CartSubTotal from './CartSubTotal';

function CartSummary() {
	const description =
		'The subtotal reflects the total price of your order, including duties and taxes, before any applicable discounts. It does not include delivery costs and international transaction fees.';
	return (
		<>
			<div className='cart__summary-details'>
				<CartSubTotal />
				<hr className='divider' />
				<div className='cart__summary-description'>{description}</div>
			</div>
			<ActionButton className='cart__summary-checkout primary'>
				Checkout
			</ActionButton>
		</>
	);
}

export default CartSummary;
