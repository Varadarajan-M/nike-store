import React from 'react';

import ProductDetailCarousel from '@/app/components/products/ProductDetailCarousel';
import ProductInfo from '@/app/components/products/ProductInfo';
import ProductActions from '@/app/components/products/ProductActions';

import '@/styles/pages/product-details.scss';
import ProductFeatures from '@/app/components/products/ProductFeatures';

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
		</section>
	);
}

export default ProductDetailPage;
