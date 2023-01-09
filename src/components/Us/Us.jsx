import girl from '../../assets/girl.png';
import bg from '../../assets/bgus.png';

const Us = () => {
	return (
		<div className='lg:h-screen flex flex-col lg:flex-row bg-[#FEFEFE]'>
			<div
				style={{ backgroundImage: `url(${bg})` }}
				className='bg-[#006C84] text-center px-9 pt-12 pb-28 md:px-16 md:pt-20 md:pb-36 lg:p-0 w-full lg:w-2/3 flex flex-col justify-center items-center'
			>
				<h2 className='text-[#FFE227] w-full fontStylePlayfair text-[40px] font-bold mb-6 lg:mb-11'>
					ABOUT US
				</h2>
				<p className='lg:max-w-[60%] xl:max-w-[50%] text-[13px] sm:text-[18px] md:text-[22px] lg:text-[25px] text-white leading-6 sm:leading-7 md:leading-9 lg:leading-[46px] text-justify fontStyleNeurial'>
					We are a store gifts and breakfasts specialized surprise in
					personalizing each one of them. We are your accomplices to help you
					create happy moments and recognize the people you value through our
					breakfasts and gifts specials. We are more what a gift, we are an
					experience and a opportunity to do happy to your favorite person.
				</p>
			</div>

			<div className='px-[25%] md:px-[30%] pb-12 lg:p-0 lg:flex justify-center items-center lg:w-1/3'>
				<img
					src={girl}
					alt='birthday girl'
					className='-mt-20 lg:mt-0 lg:mr-48 xl:mr-72'
				/>
			</div>
		</div>
	);
};

export default Us;
