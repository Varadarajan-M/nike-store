import React from 'react';

import '@/styles/pages/cart.scss';

function Cart() {
	return (
		<div className='cart'>
			<header className='cart__header'>
				<h4>Shopping Cart</h4>
			</header>
			<main className='cart__details'>
				<section className='cart__items'>
					<header className='cart__items-header'>Cart Items</header>
					<div className='cart__items-content'>
						<div className='cart__item'>Some cart Item</div>
					</div>
				</section>
				<aside className='cart__summary'>
					<header className='cart__summary-header'>Summary</header>
				</aside>
			</main>
		</div>
	);
}

export default Cart;
