'use client';

import React, { useEffect, useRef, useState } from 'react';
import '@/styles/components/ui/menu.scss';
/**
 * Renders a menu component with customizable button and popup.
 *
 * @param {MenuProps} props - The props object containing the following properties:
 *   - menuClass: string (optional) - Additional CSS class for the menu container.
 *   - btnClass: string (optional) - Additional CSS class for the button.
 *   - popupClass: string (optional) - Additional CSS class for the popup.
 *   - buttonLabel: string (optional) - The label for the button.
 *   - renderButton: function (optional) - A custom render function for the button.
 *   - renderMenu: function (optional) - A custom render function for the menu.
 *   - children: function (optional) - A render prop function for the menu.
 * @return {JSX.Element} - The rendered menu component.
 */
function Menu(props: MenuProps) {
	const {
		menuClass = '',
		btnClass = '',
		popupClass = '',
		buttonLabel = 'Menu',
		renderButton,
		renderMenu,
		children,
	} = props;

	const [showMenu, setShowMenu] = useState<boolean>(false);

	const classes = {
		menu: `menu ${menuClass}`,
		button: `menu__btn ${btnClass} ${
			!renderMenu && !btnClass.trim().length ? 'styled' : ''
		}`,
		popup: `menu__pop-up ${
			!renderMenu && !popupClass.trim().length ? 'styled' : ''
		} ${popupClass}`,
	};

	const handleMenuBtnClick = () => {
		setShowMenu((s) => !s);
	};

	const handleCloseMenu = () => {
		setShowMenu(false);
	};

	const popupRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const { current } = popupRef;
		if (current) current?.focus();
	}, [showMenu]);

	return (
		<div className={classes.menu}>
			{renderButton ? (
				renderButton({ onClick: handleMenuBtnClick })
			) : (
				<button className={classes.button} onClick={handleMenuBtnClick}>
					{buttonLabel}
				</button>
			)}

			{showMenu && (
				<div
					ref={popupRef}
					tabIndex={-1}
					className={classes.popup}
					onBlur={handleCloseMenu}
				>
					{renderMenu
						? renderMenu({
								closeMenu: handleCloseMenu,
						  })
						: children?.({ closeMenu: handleCloseMenu })}
				</div>
			)}
		</div>
	);
}

export default Menu;
