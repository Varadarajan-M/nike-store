import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Cart = () => {
	const { data: session } = useSession();
	const router = useRouter();

	const handleCartClick = () => {
		if (!session) router.push('/auth');

		return;
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
