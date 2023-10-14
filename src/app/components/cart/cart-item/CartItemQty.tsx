'use client';
import React from 'react';
import { ICartItemProps } from './CartItem';
import { tillRange } from '@/util';

export function CartItemQty({
	quantity,
	maxQuantity,
}: Pick<ICartItemProps['item'], 'quantity' | 'maxQuantity'>) {
	return (
		<div className='cart-item__qty'>
			<span className='cart-item__qty-label'>Qty: </span>

			<select className='cart-item__menu-btn' defaultValue={quantity}>
				{tillRange(maxQuantity).map((quantity) => (
					<option key={quantity} value={quantity}>
						{quantity}
					</option>
				))}
			</select>
		</div>
	);
}
