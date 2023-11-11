'use client';

import React from 'react';
import { tillRange } from '@/util';
import { TCartItem } from '@/types';

interface CartItemQtyProps extends Pick<TCartItem, 'quantity' | 'maxQuantity'> {
	onQtySelect?: (qty: string) => void;
}

export function CartItemQty({
	quantity,
	maxQuantity,
	onQtySelect,
}: CartItemQtyProps) {
	const handleCartItemQtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onQtySelect?.(e.target.value);
	};
	return (
		<div className='cart-item__qty'>
			<span className='cart-item__qty-label'>Qty: </span>

			<select
				className='cart-item__menu-btn'
				value={quantity}
				onChange={handleCartItemQtyChange}
			>
				{tillRange(maxQuantity).map((quantity) => (
					<option key={quantity} value={quantity}>
						{quantity}
					</option>
				))}
			</select>
		</div>
	);
}
