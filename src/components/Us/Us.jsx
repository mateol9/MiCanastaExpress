import bg from '../../assets/bgus.png';
import girl from '../../assets/girl.png';

const Us = () => {
	return (
		<div className=' bg-[#FEFEFE] flex'>
			<div
				style={{ backgroundImage: `url(${bg})` }}
				className='bg-[#006C84] h-40 text-white w-2/3 flex justify-center items-center flex-col px-40 py-72 '
			>
				<h3 className='text-[#FFE227]'>ABOUT US</h3>
				<p>
					We are a store gifts and breakfasts specialized surprise in
					personalizing each one of them. We are your accomplices to help you
					create happy moments and recognize the people you value through our
					breakfasts and gifts specials. We are more what a gift, we are an
					experience and a opportunity to do happy to your favorite person.
				</p>
			</div>
			<div className='flex-1'>
				<div className='relative top-16 right-20'>
					<img src={girl} alt='birthday girl' className='h-[440px] w-[320px]' />
				</div>
			</div>
		</div>
	);
};

export default Us;
