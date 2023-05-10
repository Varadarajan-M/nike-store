import React from 'react';

declare global {
	interface String {
		toTitleCase(): string;
	}
}

interface IGenericComponentProps {
	className?: string;
	children?: React.ReactNode;
	style?: React.CSSProperties;
}
export type TProduct = {
	id: number | string;
	attributes: {
		name: string;
		subtitle: string;
		price: number;
		description: string;
		size: {
			data: {
				size: string;
				enabled: boolean;
			}[];
		};
		original_price: number;
		slug: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		image: string | any;
		categories: string[];
	};
};
