'use client';

import React, { useState } from 'react';
import ProductSizeChart from './ProductSizeChart';
import { IGenericComponentProps } from '@/types';
import { BsHeart } from 'react-icons/bs';

export const ActionButton = ({
	children,
	className,
}: IGenericComponentProps) => {
	return (
		<button className={'product-actions__action-btn ' + className ?? ''}>
			{children}
		</button>
	);
};

function ProductActions() {
	const [activeSize, setActiveSize] = useState<string | null>(null);

	return (
		<form className='product-actions'>
			<ProductSizeChart activeSize={activeSize} setActiveSize={setActiveSize} />
			<div className='product-actions__action-btns'>
				<ActionButton className='primary'>Add to Cart</ActionButton>
				<ActionButton className='secondary'>
					Wishlist <BsHeart />
				</ActionButton>
			</div>
		</form>
	);
}

export default ProductActions;
