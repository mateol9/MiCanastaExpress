import girl from '../../assets/girl.png';
import bg from '../../assets/bgus.png';

const Us = () => {
	return (
		<div className='h-screen flex'>
			<div
				style={{ backgroundImage: `url(${bg})` }}
				className='bg-[#006C84] w-2/3 flex justify-center items-center'
			>
				<div className='w-1/2'>
					<h2 className='text-[#FFE227] w-full fontStylePlayfair text-[40px] font-bold mb-11'>
						ABOUT US
					</h2>
					<p className='text-[25px] text-white leading-[46px] text-justify fontStyleNeurial'>
						We are a store gifts and breakfasts specialized surprise in
						personalizing each one of them. We are your accomplices to help you
						create happy moments and recognize the people you value through our
						breakfasts and gifts specials. We are more what a gift, we are an
						experience and a opportunity to do happy to your favorite person.
					</p>
				</div>
			</div>

			<div className='bg-[#FEFEFE] flex justify-center items-center w-1/3'>
				<img src={girl} alt='birthday girl' className='mr-80 ' />
			</div>
		</div>
	);
};

export default Us;
