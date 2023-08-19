'use client';

import React, { useCallback, useState } from 'react';
import Header from './Header';
import Login from './Login';
import Register from './Register';

const Auth = () => {
	const [isLogin, setIsLogin] = useState<boolean>(true);

	const handleToggle = useCallback((e: any) => {
		setIsLogin(!e.target.checked);
	}, []);
	return (
		<div className='auth-wrapper'>
			<Header onToggle={handleToggle} isLogin={isLogin} />
			{isLogin ? <Login /> : <Register />}
		</div>
	);
};

export default Auth;
