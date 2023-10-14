import React from 'react';
import { ActionButton } from '../../products/ProductActions';

function CartSummary() {
	const subTotal = 25000;
	const description =
		'The subtotal reflects the total price of your order, including duties and taxes, before any applicable discounts. It does not include delivery costs and international transaction fees.';
	return (
		<>
			<div className='cart__summary-details'>
				<header className='cart__summary-details-header'>
					<span>SUBTOTAL</span>
					<span>₹{subTotal}</span>
				</header>
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
