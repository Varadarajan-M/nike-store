import React, { Fragment } from 'react';
import ToggleSwitch from './Toggle';

interface IHeaderProps {
	onToggle: (...args: any) => void;
	isLogin: boolean;
}

const Header = ({ onToggle, isLogin }: IHeaderProps) => {
	return (
		<Fragment>
			<h2 className='header'>Nike</h2>
			<header className='auth-actions'>
				<span className={`action ${isLogin ? 'active' : ''}`}>Login</span>
				<ToggleSwitch onToggle={onToggle} />
				<span className={`action ${!isLogin ? 'active' : ''}`}>Register</span>
			</header>
		</Fragment>
	);
};

export default Header;
