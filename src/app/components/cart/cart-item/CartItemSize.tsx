'use client';
import React from 'react';
import Menu from '../../ui/Menu';
import { ICartItemProps } from './CartItem';
import { TCartItem } from '@/types';

interface CartItemSizeProps extends Pick<TCartItem, 'availableSizes' | 'size'> {
	onSizeSelect?: (size: string) => void;
}

export function CartItemSize({
	size,
	availableSizes,
	onSizeSelect,
}: CartItemSizeProps) {
	const handleCartItemSizeChange = (
		e: React.ChangeEvent<HTMLSelectElement>,
	) => {
		onSizeSelect?.(e?.target?.value);
	};
	return (
		<div className='cart-item__size'>
			<span className='cart-item__size-label'>Size:</span>
			<select
				className='cart-item__menu-btn'
				value={size}
				onChange={handleCartItemSizeChange}
			>
				{availableSizes.map((data) => (
					<option key={data.size} value={data.size}>
						{data.size}
					</option>
				))}
			</select>
		</div>
	);
}
