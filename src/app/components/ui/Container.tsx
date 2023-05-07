import { IGenericComponentProps } from '@/types';
import React from 'react';

const Container = ({ children, style, className }: IGenericComponentProps) => {
	return (
		<div className='container'>
			<div style={style} className={`container__section ${className ?? ''}`}>
				{children}
			</div>
		</div>
	);
};

export default Container;
