import logo from '../../assets/logo.png';

const Footer = () => {
	return (
		<footer className='bg-[#006C84] pb-6 md:pb-10 pt-6 md:pt-16 px-6 md:px-24'>
			<div className='md:flex md:justify-between md:mb-32'>
				<div className='flex items-center sm:items-start gap-3 md:flex-col  md:max-w-lg text-white'>
					<a href='#' className='w-[60px] md:w-[121px] md:p-2 box-content'>
						<img src={logo} className='mr-3' alt='MiCanastaExpress Logo' />
					</a>
					<p className='w-4/6 mt-1 sm:w-auto text-[10px] leading-3 md:text-2xl fontStyleInter font-medium'>
						We are an online store of surprise gifts and breakfasts, which we
						make of that detail, something unique.
					</p>
				</div>
				<div className='flex gap-4 justify-between mt-8 md:gap-16 text-white'>
					<div className='w-1/3 sm:w-auto'>
						<h2 className='mb-6 fontStyleJost font-medium text-[10px] md:text-lg'>
							OPENING HOURS
						</h2>
						<ul className='text-white/50 fontStyleNeurial font-bold text-[9px] md:text-base'>
							<li>Monday to Friday</li>
							<li>8:00 am - 8:00 pm</li>
							<li>Saturdays</li>
							<li>7:00 am - 8:00 pm</li>
							<li>Sundays</li>
							<li>7:00 am - 6:00 pm</li>
						</ul>
					</div>
					<div className='w-1/3 sm:w-auto'>
						<h2 className='mb-6 min-h-max fontStyleJost font-medium text-[10px] md:text-lg'>
							CONTACT US
						</h2>
						<ul className='text-white/50 fontStyleNeurial font-bold text-[9px] md:text-base'>
							<li className='mb-4'>+1 (305) 814-6416</li>
							<li>Tampa - Florida (EEUU)</li>
						</ul>
					</div>
					<div className='w-1/3 sm:w-auto'>
						<h2 className='mb-6 fontStyleJost font-medium text-[10px] md:text-lg'>
							CUSTOMER SERVICE
						</h2>
						<ul className='text-white/50 fontStyleNeurial font-bold text-[9px] md:text-base'>
							<a href='#' className='hover:underline'>
								<li className='mb-4'>Terms and Conditions.</li>
							</a>
							<a href='#' className='hover:underline'>
								<li>Exchange and refund policies.</li>
							</a>
						</ul>
					</div>
				</div>
			</div>
			<hr className='my-4 sm:my-6 border-white/20 sm:mx-auto lg:my-8' />
			<span className='text-[11px] md:text-sm text-white fontStyleInter font-normal sm:inline block text-center'>
				Copyright © 2022 by Company, Inc. All Rights Reserved
			</span>
		</footer>
	);
};

export default Footer;
