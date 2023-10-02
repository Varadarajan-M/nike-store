import React from 'react';

import products from '@/data/products';

import RelatedProductCarousel from './RelatedProductCarousel';

import { TProduct } from '@/types';

const loadProducts = async () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(products.data);
		}, 2000);
	});
};

async function RelatedProducts() {
	const products = (await loadProducts()) as TProduct[];

	return (
		<div className='related-products'>
			<header className='related-products__header'>You might also like</header>
			<main>
				<RelatedProductCarousel products={products} />
			</main>
		</div>
	);
}

export default RelatedProducts;
