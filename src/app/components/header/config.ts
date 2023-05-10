export const navLinks = [
	{
		label: 'Home',
		link: '/',
		isMenu: false,
	},
	{
		label: 'About',
		link: '/#',
		isMenu: false,
	},
	{
		label: 'Categories',
		link: '/#',
		isMenu: true,
		submenu: [
			{
				label: 'Jordan',
				link: '/categories/jordan',
				count: 9,
			},
			{
				label: 'Football Shoes',
				link: '/categories/football-shoes',
				count: 4,
			},
			{
				label: 'Sneakers',
				link: '/categories/sneakers',
				count: 4,
			},
			{
				label: 'Running Shoes',
				link: '/categories/running-shoes',
				count: 3,
			},
		],
	},
	{
		label: 'Contact',
		link: '/#',
		isMenu: false,
	},
];
