import { TCartItem } from '@/types';
import React from 'react';
import CartItem from './CartItem';
import products from '@/data/products';

const loadCartItems = async () => {
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
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(cartItems);
		}, 2000);
	});
};

async function CartItems() {
	const cartItems = (await loadCartItems()) as TCartItem[];
	const totalItems = cartItems?.length ?? 0;
	return (
		<div className='cart__items-content'>
			{cartItems.map((item, index) => (
				<>
					<CartItem key={item.id} item={item} />
					{index < totalItems - 1 && <hr style={{ opacity: 0.3 }} />}
				</>
			))}
		</div>
	);
}

export default CartItems;
