'use client';

import { IGenericComponentProps } from '@/types';

import '@/styles/components/auth/toggle-switch.scss';

interface IToggleSwitchProps extends IGenericComponentProps {
	disabled?: boolean;
	onToggle?: (...args: any) => void;
}

const ToggleSwitch = ({
	className,
	onToggle,
	disabled = false,
}: IToggleSwitchProps) => {
	const classes = `toggle-switch ${className ?? ''}`;

	return (
		<input
			type='checkbox'
			className={classes}
			onClick={onToggle}
			disabled={disabled}
		/>
	);
};

export default ToggleSwitch;
