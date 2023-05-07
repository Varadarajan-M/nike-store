import { IGenericComponentProps, TProduct } from '@/types';
import Image from 'next/image';
import React from 'react';

interface IProductCardProps extends IGenericComponentProps {
	product: TProduct;
}

const calcOffer = (originalPrice: number, offerPrice: number) =>
	Math.fround(((originalPrice - offerPrice) / originalPrice) * 100).toFixed(2);

export function ProductCard ({ product, className }: IProductCardProps) {
	return (
		<div className={`product ${className ?? ''}`}>
			<Image
				className='product__img'
				src={product.attributes.image}
				alt={product.attributes.name}
			/>

			<p className='product__name'>{product.attributes.name}</p>
			<div className='product__price-details'>
				<div className='product__prices'>
					<span className='product__price'>{product.attributes.price}</span>
					<span className='product__original-price'>
						{product.attributes.original_price}
					</span>
				</div>
				<span className='product__offer'>
					{calcOffer(
						product.attributes.original_price,
						product.attributes.price,
					)}
					% off
				</span>
			</div>
		</div>
	);
}
