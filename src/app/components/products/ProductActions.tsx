'use client';

import React, { useState } from 'react';
import ProductSizeChart from './ProductSizeChart';
import { IGenericComponentProps, TProduct } from '@/types';
import { BsHeart } from 'react-icons/bs';
import useWishlist from '@/hooks/useWishlist';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { addToCartAtom } from '@/jotai/cart/store';
import { useSetAtom } from 'jotai';

interface ActionButtonProps extends IGenericComponentProps {
	onClick?: () => void;
	disabled?: boolean;
}

export const ActionButton = ({
	children,
	className,
	disabled,
	onClick,
}: ActionButtonProps) => {
	return (
		<button
			type='button'
			className={'product-actions__action-btn ' + className ?? ''}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

const AddToCart = ({ product }: { product: TProduct }) => {
	const addToCart = useSetAtom(addToCartAtom);

	const handleAddToCart = () => addToCart(product);

	return (
		<ActionButton className='primary' onClick={handleAddToCart}>
			Add to Cart
		</ActionButton>
	);
};

const WishList = ({ product }: { product: TProduct }) => {
	const { isItemWishlisted, toggleWishList } = useWishlist(product);

	const buttonLabel = isItemWishlisted ? 'Remove from Wishlist' : 'WishList';

	const Icon = isItemWishlisted ? MdFavorite : MdFavoriteBorder;

	const handleWishlistClick = () => toggleWishList(product);

	return (
		<ActionButton className='secondary' onClick={handleWishlistClick}>
			{buttonLabel} <Icon />
		</ActionButton>
	);
};

function ProductActions({ product }: { product: TProduct }) {
	const [activeSize, setActiveSize] = useState<string | null>(null);

	return (
		<form className='product-actions'>
			<ProductSizeChart activeSize={activeSize} setActiveSize={setActiveSize} />
			<div className='product-actions__action-btns'>
				<AddToCart product={product} />
				<WishList product={product} />
			</div>
		</form>
	);
}

export default ProductActions;
