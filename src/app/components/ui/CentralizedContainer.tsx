import React, { PropsWithChildren } from 'react';

const CentralizedContainer: React.FC<PropsWithChildren> = ({
	children,
}: PropsWithChildren) => {
	return (
		<div className='centered-container'>
			<div className='centered'>{children}</div>
		</div>
	);
};

export default CentralizedContainer;
