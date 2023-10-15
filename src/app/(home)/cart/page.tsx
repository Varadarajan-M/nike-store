import React, { Suspense } from 'react';

import CartSummary from '@/app/components/cart/cart-summary/CartSummary';
import EmptyCart from '@/app/components/cart/EmptyCart';
import CartItems from '@/app/components/cart/cart-item/CartItems';

import '@/styles/pages/cart.scss';

const totalItems = 1;
function Cart() {
	if (!totalItems) return <EmptyCart />;

	return (
		<div className='cart'>
			<header className='cart__header'>
				<h6>Shopping Cart</h6>
			</header>
			<main className='cart__details'>
				<section className='cart__items'>
					<header className='cart__items-header'>Cart Items</header>
					<div className='cart__items-content'>
						<Suspense fallback={<p>Loading cart items...</p>}>
							{/* @ts-ignore */}
							<CartItems />
						</Suspense>
					</div>
				</section>
				<aside className='cart__summary'>
					<header className='cart__summary-header'>Summary</header>
					<Suspense fallback={<p>Loading cart summary...</p>}>
						{/* @ts-ignore */}

						<CartSummary />
					</Suspense>
				</aside>
			</main>
		</div>
	);
}

export default Cart;
