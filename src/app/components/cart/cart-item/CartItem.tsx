import { IGenericComponentProps, TProduct } from '@/types';
import React from 'react';
import '@/styles/components/cart/cart-item.scss';
import Image, { StaticImageData } from 'next/image';
import { CartItemSize } from './CartItemSize';
import { CartItemQty } from './CartItemQty';
import { RiDeleteBinLine } from 'react-icons/ri';

export interface ICartItemProps extends IGenericComponentProps {
	item: {
		id: number;
		name: string;
		price: number;
		size: string;
		category: string;
		thumbnail: StaticImageData | string;
		availableSizes: { size: string; enabled: boolean }[];
		maxQuantity: number;
		quantity: number;
	};
}

function CartItem({ item }: ICartItemProps) {
	return (
		<div className='cart-item'>
			<Image
				className='cart-item__thumbnail'
				src={item.thumbnail}
				alt={item.name}
				priority
			/>
			<section className='cart-item__details'>
				<div className='cart-item__text'>
					<h3 className='cart-item__name'>
						{item.name ?? 'Product name unavailable'}
					</h3>
					<span className='cart-item__category'>{item.category} </span>
					<span className='cart-item__price'>MRP : ₹{item.price} </span>
				</div>

				<div className='cart-item__actions'>
					<div className='cart-item__menus'>
						<CartItemSize
							size={item.size}
							availableSizes={item.availableSizes}
						/>
						<CartItemQty
							quantity={item.quantity}
							maxQuantity={item.maxQuantity}
						/>
					</div>
					<RiDeleteBinLine className='cart-item__delete-btn' />
				</div>
			</section>
		</div>
	);
}

export default CartItem;
