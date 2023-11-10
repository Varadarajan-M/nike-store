import products from '@/data/products';
import { TProduct } from '@/types';
import React, { Fragment } from 'react';
import { ProductCard } from '../products/ProductCards';

const loadWishlistItems = async () => {
	const items = products.data?.slice(0, 6);
	return new Promise((res) => {
		setTimeout(() => {
			res(items);
		}, 2000);
	});
};
async function WishlistItems() {
	const wishlist = (await loadWishlistItems()) as TProduct[];
	return (
		<div className='products__grid'>
			{wishlist?.map((product) => (
				<ProductCard
					key={product?.attributes?.slug}
					product={product}
					link='#'
				/>
			))}
		</div>
	);
}

export default WishlistItems;
