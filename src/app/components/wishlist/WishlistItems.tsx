'use client';

import { ProductCard } from '../products/ProductCards';
import useWishlist from '@/hooks/useWishlist';
import Loader from '../ui/Loader';

function WishlistItems() {
	const { wishListItems, isLoading } = useWishlist();

	if (isLoading) return <Loader />;

	return (
		<div className='products__grid'>
			{wishListItems?.map((product) => (
				<ProductCard
					key={product?.attributes?.slug}
					product={product}
					link={`/products/${product?.attributes?.slug}`}
				/>
			))}
		</div>
	);
}

export default WishlistItems;
