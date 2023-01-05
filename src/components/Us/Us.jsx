import girl from '../../assets/girl.png';
import bg from '../../assets/bgus.png';

const Us = () => {
	return (
		<div className='sm:h-screen flex flex-col sm:flex-row bg-[#FEFEFE]'>
			<div
				style={{ backgroundImage: `url(${bg})` }}
				className='bg-[#006C84] text-center px-9 pt-12 pb-28 sm:p-0 w-full sm:w-2/3 flex flex-col justify-center items-center'
			>
				<h2 className='text-[#FFE227] w-full fontStylePlayfair text-[40px] font-bold mb-6 sm:mb-11'>
					ABOUT US
				</h2>
				<p className='sm:max-w-[50%] text-[13px] sm:text-[25px] text-white leading-6 sm:leading-[46px] text-justify fontStyleNeurial'>
					We are a store gifts and breakfasts specialized surprise in
					personalizing each one of them. We are your accomplices to help you
					create happy moments and recognize the people you value through our
					breakfasts and gifts specials. We are more what a gift, we are an
					experience and a opportunity to do happy to your favorite person.
				</p>
			</div>

			<div className='px-[25%] pb-12 sm:p-0 sm:flex justify-center items-center sm:w-1/3'>
				<img
					src={girl}
					alt='birthday girl'
					className='-mt-20 sm:mt-0 sm:mr-80'
				/>
			</div>
		</div>
	);
};

export default Us;
