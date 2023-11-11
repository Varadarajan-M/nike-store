import FeaturedProducts from '../components/products/FeaturedProducts';
import { ProductCard } from '../components/products/ProductCards';

import products from '@/data/products';
import { TProduct } from '@/types';

import '@/styles/pages/home.scss';

export default function Home() {
	return (
		<main>
			<FeaturedProducts />

			<div className='marketing'>
				<h1 className='marketing__headline'>Cushioning for Your Miles</h1>
				<p className='marketing__desc'>
					A lightweight Nike ZoomX midsole is combined with increased stack
					heights to help provide cushioning during extended stretches of
					running.
				</p>
			</div>

			<section className='products__grid'>
				{products.data.map((product: TProduct) => (
					<ProductCard
						key={product.id}
						product={product}
						link={`products/${product?.attributes?.slug}`}
					/>
				))}
			</section>
		</main>
	);
}
