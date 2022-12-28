import logo from '../../assets/logo.png';

const Footer = () => {
	return (
		<footer className='bg-[#006C84] pb-10 pt-16 px-24'>
			<div className='md:flex justify-between mb-32'>
				<div className='flex flex-col text-white max-w-lg'>
					<a href='#' className='w-[121px] p-2 box-content'>
						<img src={logo} className='mr-3' alt='MiCanastaExpress Logo' />
					</a>
					<p className='text-2xl fontStyleInter font-medium'>
						We are an online store of surprise gifts and breakfasts, which we
						make of that detail, something unique.
					</p>
				</div>
				<div className='flex mt-8 gap-16 text-white'>
					<div>
						<h2 className='mb-6 fontStyleJost font-medium text-lg'>
							OPENING HOURS
						</h2>
						<ul className='text-white/50 fontStyleNeurial font-bold'>
							<li>Monday to Friday</li>
							<li>8:00 am - 8:00 pm</li>
							<li>Saturdays</li>
							<li>7:00 am - 8:00 pm</li>
							<li>Sundays</li>
							<li>7:00 am - 6:00 pm</li>
						</ul>
					</div>
					<div>
						<h2 className='mb-6 min-h-max fontStyleJost font-medium text-lg'>
							CONTACT US
						</h2>
						<ul className='text-white/50 fontStyleNeurial font-bold text-base'>
							<li className='mb-4'>+1 (305) 814-6416</li>
							<li>Tampa - Florida (EEUU)</li>
						</ul>
					</div>
					<div>
						<h2 className='mb-6 fontStyleJost font-medium text-lg'>
							CUSTOMER SERVICE
						</h2>
						<ul className='text-white/50 fontStyleNeurial font-bold'>
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
			<hr className='my-6 border-white/20 sm:mx-auto lg:my-8' />
			<div className='sm:flex sm:items-center sm:justify-between'>
				<span className='text-sm text-white fontStyleInter font-normal'>
					Copyright © 2022 by Company, Inc. All Rights Reserved
				</span>
			</div>
		</footer>
	);
};

export default Footer;
