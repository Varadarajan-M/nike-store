import { IGenericComponentProps } from '@/types';
import React from 'react';

function ProductInfo({ children }: IGenericComponentProps) {
	return (
		<div className='product-info'>
			<h2 className='product-info__title'>Air Jordan XXXVII Low PF</h2>
			<p className='product-info__category'>Mens Basketball Shoes</p>
			<div className='product-info__price-details'>
				<div>
					<span className='product-info__price-details--mrp'>MRP : ₹16295</span>
					<span className='product-info__price-details--original-price'>
						₹18295
					</span>
				</div>
				<span className='product-info__price-details--offer '>10.93% off</span>
			</div>
			<div className='product-info__price-policy'>
				<span className='helper'>Incl. of taxes</span>
				<span className='helper'>(Also includes all applicable duties)</span>
			</div>
			{children}
		</div>
	);
}

export default ProductInfo;
