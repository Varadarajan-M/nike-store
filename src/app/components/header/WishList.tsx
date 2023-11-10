import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FiHeart } from 'react-icons/fi';

const WishList = () => {
	const { data: session } = useSession();
	const router = useRouter();

	const handleWishListClick = () => {
		if (!session) return router.push('/auth');

		router.push('/wishlist');
	};

	return (
		<>
			<span className='nav__icons--wishlist' onClick={handleWishListClick}>
				<FiHeart />
				{/* <span className='nav__icons__badge'>59</span> */}
			</span>
		</>
	);
};

export default WishList;
