import { IGenericComponentProps, TProduct } from '@/types';
import React from 'react';

interface ProductInfoProps extends IGenericComponentProps {
	product: TProduct;
}

function ProductInfo({ children, product }: ProductInfoProps) {
	return (
		<div className='product-info'>
			<h2 className='product-info__title'>{product?.attributes?.name ?? ''}</h2>
			<p className='product-info__category'>
				{product?.attributes?.subtitle ?? ''}
			</p>
			<div className='product-info__price-details'>
				<div>
					<span className='product-info__price-details--mrp'>
						MRP : ₹{product?.attributes?.price ?? ''}
					</span>
					<span className='product-info__price-details--original-price'>
						₹{product?.attributes?.original_price ?? ''}
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
