import React from 'react';

import products from '@/data/products';

import ProductDetailCarousel from './ProductDetailCarousel';
import ProductActions from './ProductActions';
import ProductFeatures from './ProductFeatures';
import ProductInfo from './ProductInfo';

import { TProduct } from '@/types';

const getProductDetails = async (slug: string) =>
	new Promise((res) => {
		setTimeout(() => {
			res(
				products.data.filter(
					(p) => p.attributes.slug.toLowerCase() === slug?.toLowerCase(),
				)?.[0],
			);
		}, 1000);
	});

async function ProductDetails({ slug }: { slug: string }) {
	const product = (await getProductDetails(slug)) as TProduct;
	return (
		<div className='product-details'>
			<ProductDetailCarousel />
			<ProductInfo product={product}>
				<ProductActions product={product} />
				<ProductFeatures />
			</ProductInfo>
		</div>
	);
}

export default ProductDetails;
