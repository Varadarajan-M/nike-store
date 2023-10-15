import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { ActionButton } from '../products/ProductActions';
import EmptyCartIcon from '@assets/empty-cart.webp';


function EmptyCart() {
  return (
		<div className='empty-cart'>
			<Image src={EmptyCartIcon} alt='cart-empty' />
			<div className='empty-cart__message'>
				<h4 className='empty-cart__title'>Your cart is empty</h4>
				<p className='empty-cart__desc'>
					Looks like you have not added anything in your cart.
					<br />
					Go ahead and explore top categories.
				</p>
				<ActionButton className='empty-cart__action primary'>
					<Link href={'/'}>Continue shopping</Link>
				</ActionButton>
			</div>
		</div>
	);
}

export default EmptyCart