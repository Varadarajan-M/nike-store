import React from 'react';

import '@/styles/pages/cart.scss';
import CartItem from '@/app/components/cart/cart-item/CartItem';
import products from '@/data/products';
import CartSummary from '@/app/components/cart/cart-summary/CartSummary';

const cartItems = products.data.map(({ id, attributes }) => ({
	id,
	name: attributes.name,
	price: attributes.price,
	size:
		attributes.size.data.find((s) => s.enabled)?.size ??
		attributes.size?.data?.[0]?.size,
	category: attributes.subtitle,
	thumbnail: attributes.image,
	availableSizes: attributes.size.data,
	maxQuantity: 10,
	quantity: 1,
}));

function Cart() {
	const totalItems = cartItems.length;
	return (
		<div className='cart'>
			<header className='cart__header'>
				<h4>Shopping Cart</h4>
			</header>
			<main className='cart__details'>
				<section className='cart__items'>
					<header className='cart__items-header'>Cart Items</header>
					<div className='cart__items-content'>
						{cartItems.map((item, index) => (
							<>
								<CartItem key={item.id} item={item} />
								{index < totalItems - 1 && <hr style={{ opacity: 0.3 }} />}
							</>
						))}
					</div>
				</section>
				<aside className='cart__summary'>
					<header className='cart__summary-header'>Summary</header>
					<CartSummary />
				</aside>
			</main>
		</div>
	);
}

export default Cart;
