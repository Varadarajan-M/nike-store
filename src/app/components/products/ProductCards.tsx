import { IGenericComponentProps, TProduct } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import WishListIcon from './WishListIcon';

interface IProductCardProps extends IGenericComponentProps {
	product: TProduct;
	link: string;
}

const calcOffer = (originalPrice: number, offerPrice: number) =>
	Math.fround(((originalPrice - offerPrice) / originalPrice) * 100).toFixed(2);

export function ProductCard({ product, link, className }: IProductCardProps) {
	return (
		<div className={`product ${className ?? ''}`}>
			<WishListIcon product={product} />
			<Link href={link}>
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
			</Link>
		</div>
	);
}
