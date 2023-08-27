export type TSubMenuItem = {
	label: string;
	count: number;
	link: string;
};

export type TNavItem = {
	label: string;
	link: string;
	isMenu: boolean;
	submenu?: TSubMenuItem[];
};
