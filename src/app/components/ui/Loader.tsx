import '@/styles/components/ui/loader.scss';

const Loader = () => {
	return (
		<div className='loader'>
			<div className='sk-chase'>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
			</div>
		</div>
	);
};

export default Loader;
