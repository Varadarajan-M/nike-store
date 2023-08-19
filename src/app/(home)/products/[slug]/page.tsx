/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Carousel from '@/app/components/ui/Carousel';

import '@/styles/pages/product-details.scss';

const images = [
	'/assets/p1.png',
	'/assets/p2.png',
	'/assets/p3.png',
	'/assets/p4.png',
	'/assets/p4.png',
	'/assets/p4.png',
	'/assets/p4.png',
	'/assets/p4.png',
	'/assets/p1.png',
	'/assets/p2.png',
	'/assets/p3.png',
];

function ProductDetailPage() {
	return (
		<section className='product-details__container'>
			<div className='product-details'>
				<div className='product-details__carousel'>
					<Carousel
						infiniteLoop={false}
						showIndicators={false}
						showStatus={false}
						thumbWidth={60}
						showArrows={false}
						className=''
					>
						{images.map((image, _) => (
							<img
								className='thumbs'
								style={{ transform: 'none' }}
								src={image}
								key={image}
								alt='image'
							/>
						))}
					</Carousel>
				</div>

				<div>Lorem*1000</div>
			</div>
		</section>
	);
}

export default ProductDetailPage;
