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
				<Suspense fallback={<p>Loading wishlist...</p>}>
					{/* @ts-ignore */}
					<WishlistItems />
				</Suspense>
			</main>
		</div>
	);
}

export default Wishlist;
