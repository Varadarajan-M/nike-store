'use client';

import React from 'react';
import slide1 from '@assets/slide-1.png';
import slide2 from '@assets/slide-2.png';
import slide3 from '@assets/slide-3.png';

import Image from 'next/image';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { IGenericComponentProps } from '@/types';
import Carousel from '../ui/Carousel';

type TFeaturedProduct = {
	link: string;
	img: string;
	id: string;
};

interface IFeaturedProductsProps extends IGenericComponentProps {
	product?: TFeaturedProduct;
}

const FeaturedProducts = (props: IFeaturedProductsProps) => {
	return (
		<Carousel
			autoPlay
			autoFocus
			infiniteLoop
			className='featured-products__carousel'
			useKeyboardArrows
			showIndicators={false}
			showStatus={false}
			showThumbs={false}
			renderArrowPrev={(click) => (
				<BsArrowLeft
					onClick={click}
					className='carousel__arrow carousel__arrow--left'
				/>
			)}
			renderArrowNext={(click) => (
				<BsArrowRight
					onClick={click}
					className='carousel__arrow carousel__arrow--right'
				/>
			)}
		>
			<div className='carousel__slide'>
				<Image src={slide2} alt='' className='carousel__image' />
				<button className='carousel__action'>Shop Now</button>
			</div>
			<div className='carousel__slide'>
				<Image src={slide3} alt='' className='carousel__image' />
				<button className='carousel__action'>Shop Now</button>
			</div>
			<div className='carousel__slide'>
				<Image src={slide1} alt='' className='carousel__image' />
				<button className='carousel__action'>Shop Now</button>
			</div>
		</Carousel>
	);
};

export default FeaturedProducts;
