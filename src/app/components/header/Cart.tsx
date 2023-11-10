import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Cart = () => {
	const { data: session } = useSession();
	const router = useRouter();

	const handleCartClick = () => {
		if (!session) return router.push('/auth');

		router.push('/cart');
	};

	return (
		<>
			<span className='nav__icons--cart' onClick={handleCartClick}>
				<AiOutlineShoppingCart />
				{/* <span className='nav__icons__badge'>4</span> */}
			</span>
		</>
	);
};

export default Cart;
