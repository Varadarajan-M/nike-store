'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import { ProductCard } from './ProductCards';

import { TProduct } from '@/types';
import { generateSlug } from '@/util';

import 'react-multi-carousel/lib/styles.css';

interface IRelatedProductCarouselProps {
	products: TProduct[];
}

const responsive = {
	desktop: {
		breakpoint: { max: 5000, min: 1024 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 2, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

function RelatedProductCarousel({ products }: IRelatedProductCarouselProps) {
	return (
		<Carousel responsive={responsive} className='related-products__carousel'>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					link={`/products/${generateSlug(product.attributes.name)}`}
				/>
			))}
		</Carousel>
	);
}

export default RelatedProductCarousel;
