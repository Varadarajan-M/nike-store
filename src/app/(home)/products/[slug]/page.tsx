'use client';

import React, { Suspense } from 'react';

import RelatedProducts from '@/app/components/products/RelatedProducts';
import ProductDetails from '@/app/components/products/ProductDetails';

import '@/styles/pages/product-details.scss';

function ProductDetailPage({ params }: { params: { slug: string } }) {
	return (
		<section className='product-details__container'>
			<Suspense fallback={<p>Loading product info...</p>}>
				{/* @ts-ignore */}
				<ProductDetails slug={params?.slug} />
			</Suspense>
			<Suspense fallback={<p>Loading related products...</p>}>
				{/* @ts-ignore */}
				<RelatedProducts />
			</Suspense>
		</section>
	);
}

export default ProductDetailPage;
