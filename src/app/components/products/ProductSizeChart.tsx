const sizes = [
	{
		size: 'UK 6',
		enabled: true,
	},
	{
		size: 'UK 6.5',
		enabled: true,
	},
	{
		size: 'UK 7',
		enabled: true,
	},
	{
		size: 'UK 7.5',
		enabled: true,
	},
	{
		size: 'UK 8',
		enabled: true,
	},
	{
		size: 'UK 8.5',
		enabled: true,
	},
	{
		size: 'UK 9',
		enabled: true,
	},
	{
		size: 'UK 9.5',
		enabled: true,
	},
	{
		size: 'UK 10',
		enabled: true,
	},
	{
		size: 'UK 10.5',
		enabled: true,
	},
	{
		size: 'UK 11',
		enabled: false,
	},
	{
		size: 'UK 11.5',
		enabled: false,
	},
];

function Size({
	size,
	enabled,
	isActive,
	onClick,
}: {
	size: string;
	enabled: boolean;
	isActive: boolean;
	onClick: (size: string | null) => any;
}) {
	return (
		<button
			type='button'
			className={`size-chart__size ${isActive ? 'active' : ''}`}
			onClick={() => enabled && onClick(isActive ? null : size)}
			disabled={!enabled}
		>
			{size}
		</button>
	);
}

function SizeChart({
	activeSize,
	setActiveSize,
}: {
	activeSize: string | null;
	setActiveSize: React.Dispatch<React.SetStateAction<string | null>>;
}) {
	return (
		<div className='size-chart'>
			<header className='size-chart__header'>
				<span className='size-chart__title'>Select Size</span>
				<span className='size-chart__guide helper'>Select Guide</span>
			</header>
			<section className='size-chart__sizes'>
				{sizes.map(({ size, enabled }, index) => (
					<Size
						key={size}
						size={size}
						enabled={enabled}
						isActive={activeSize === size}
						onClick={setActiveSize}
					/>
				))}
			</section>
		</div>
	);
}

export default SizeChart;
