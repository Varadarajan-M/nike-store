import React from 'react';
import { ActionButton } from '../../products/ProductActions';
import products from '@/data/products';

const loadCartSummary = async () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(products.data.reduce((a, b) => a + b.attributes.price, 0));
		}, 3000);
	});
};

async function CartSummary() {
	const subTotal = (await loadCartSummary()) as number;
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
