import React from 'react';
import ReactMarkdown from 'react-markdown';

const desc =
	'"Be cool. Stay cool. The AJ-6 ""Cool Grey"" lets your style take flight with a colourway rooted to Jordan Brand DNA. MJ wore \'em when he claimed his first championship and you\'ll be wearing \'em forâ€”well, whatever you want. Laden with sleek features like dynamic design lines and an iced outsole, these sneakers bring speed and class to any \'fit. After all, they were famously inspired by Jordan\'s (wait for it) COOL sports car. So lace up and let your kicks do the rest.\n\n * Colour Shown: White/Cool Grey/Medium Grey\n * Style: CT8529-100"';

function ProductFeatures() {
	return (
		<section className='product-features'>
			<h4 className='product-features__header'>Product Details</h4>
			<ReactMarkdown className='markdown'>{desc}</ReactMarkdown>
		</section>
	);
}

export default ProductFeatures;
