'use client';
import React from 'react';
import Menu from '../../ui/Menu';
import { ICartItemProps } from './CartItem';

export function CartItemSize({
	size,
	availableSizes,
}: Pick<ICartItemProps['item'], 'availableSizes' | 'size'>) {
	return (
		<div className='cart-item__size'>
			<span className='cart-item__size-label'>Size:</span>
			<select className='cart-item__menu-btn' defaultValue={size}>
				{availableSizes.map((data) => (
					<option key={data.size} value={data.size}>
						{data.size}
					</option>
				))}
			</select>
		</div>
	);
}
