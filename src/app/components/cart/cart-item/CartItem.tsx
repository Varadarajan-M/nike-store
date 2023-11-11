import { IGenericComponentProps, TCartItem } from '@/types';
import React from 'react';
import '@/styles/components/cart/cart-item.scss';
import Image, { StaticImageData } from 'next/image';
import { CartItemSize } from './CartItemSize';
import { CartItemQty } from './CartItemQty';
import { RiDeleteBinLine } from 'react-icons/ri';
import { PrimitiveAtom, useAtom, useSetAtom } from 'jotai';
import { removeFromCartAtom } from '@/jotai/cart/store';

export interface ICartItemProps extends IGenericComponentProps {
	atom: PrimitiveAtom<TCartItem>;
}

function CartItem({ atom }: ICartItemProps) {
	const [item, setItem] = useAtom(atom);
	const removeFromCart = useSetAtom(removeFromCartAtom);

	const handleCartItemSizeChange = (size: string) => {
		if (!size) return;
		setItem((prev) => ({ ...prev, size }));
	};

	const handleCartItemQtyChange = (qty: string) => {
		if (!qty) return;
		setItem((prev) => ({
			...prev,
			quantity: +qty,
			price: +qty * +prev?.originalPrice,
		}));
	};

	const handleRemoveFromCart = () => removeFromCart(item?.id);

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
							onSizeSelect={handleCartItemSizeChange}
						/>
						<CartItemQty
							quantity={item.quantity}
							maxQuantity={item.maxQuantity}
							onQtySelect={handleCartItemQtyChange}
						/>
					</div>
					<RiDeleteBinLine
						className='cart-item__delete-btn'
						onClick={handleRemoveFromCart}
					/>
				</div>
			</section>
		</div>
	);
}

export default CartItem;
