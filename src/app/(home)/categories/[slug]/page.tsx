import React from 'react';
import { ProductCard } from '@/app/components/products/ProductCards';

import products from '@/data/products';
import { generateSlug, hypenToSpace } from '@/util';

import '@/styles/pages/categories.scss';

const CategoryPage = ({ params }: { params: any }) => {
	const category = hypenToSpace(params.slug ?? 'Shoes').toTitleCase();
	return (
		<section className='category'>
			<header className='category__name'>
				<h6>{category}</h6>
			</header>

			<section className='products__grid'>
				{products.data
					.filter((p) => p.attributes.categories.includes(category))
					.slice(0, 3)
					.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
							link={`/products/${generateSlug(product.attributes.name)}`}
						/>
					))}
			</section>
		</section>
	);
};

export default CategoryPage;
