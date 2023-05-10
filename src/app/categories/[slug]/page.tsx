import React from 'react';
import '@/styles/pages/categories.scss';
import products from '@/data/products';
import { ProductCard } from '@/app/components/products/ProductCards';
import { hypenToSpace } from '@/util';

const CategoryPage = ({ params }: { params: any }) => {
	const category = hypenToSpace(params.slug ?? 'Shoes').toTitleCase();
	return (
		<section className='category'>
			<h3 className='category__name'>{category}</h3>
			<section className='products__grid'>
				{products.data
					.filter((p) => p.attributes.categories.includes(category))
					.slice(0, 3)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</section>
		</section>
	);
};

export default CategoryPage;
