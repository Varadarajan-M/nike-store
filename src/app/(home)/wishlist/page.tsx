import { Suspense } from 'react';

import WishlistItems from '@/app/components/wishlist/WishlistItems';

import '@/styles/pages/wishlist.scss';

function Wishlist() {
	return (
		<div className='wishlist'>
			<header className='wishlist__header'>
				<h6>Wishlist</h6>
			</header>
			<main className='wishlist__content'>
				<WishlistItems />
			</main>
		</div>
	);
}

export default Wishlist;
