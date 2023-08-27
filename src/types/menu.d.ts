interface MenuProps {
	menuClass?: string;
	btnClass?: string;
	popupClass?: string;
	buttonLabel?: string;
	renderButton?: (props: RenderButtonProps) => JSX.Element;
	renderMenu?: (props: RenderMenuProps) => JSX.Element;
	children?: (props: RenderMenuProps) => JSX.Element;
}

interface RenderButtonProps {
	onClick: () => void;
}

interface RenderMenuProps {
	closeMenu: () => void;
}
