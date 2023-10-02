import React, { Suspense } from 'react';

import ProductDetailCarousel from '@/app/components/products/ProductDetailCarousel';
import ProductInfo from '@/app/components/products/ProductInfo';
import ProductActions from '@/app/components/products/ProductActions';
import ProductFeatures from '@/app/components/products/ProductFeatures';
import RelatedProducts from '@/app/components/products/RelatedProducts';

import '@/styles/pages/product-details.scss';

function ProductDetailPage() {
	return (
		<section className='product-details__container'>
			<div className='product-details'>
				<ProductDetailCarousel />
				<ProductInfo>
					<ProductActions />
					<ProductFeatures />
				</ProductInfo>
			</div>
			<Suspense fallback={<p>Loading related products...</p>}>
				{/* @ts-ignore */}
				<RelatedProducts />
			</Suspense>
		</section>
	);
}

export default ProductDetailPage;
