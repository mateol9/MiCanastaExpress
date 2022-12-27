import logo from '../../assets/logo.png';

const Footer = () => {
	return (
		<footer className='p-4 bg-[#006C84] sm:p-6'>
			<div className='md:flex md:justify-between'>
				<div className='flex flex-col text-white w-80'>
					<a href='#' className='w-[121px] p-2 box-content'>
						<img src={logo} className='mr-3' alt='MiCanastaExpress Logo' />
					</a>
					<p>
						We are an online store of surprise gifts and breakfasts, which we
						make of that detail, something unique.
					</p>
				</div>
				<div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 text-white'>
					<div>
						<h2 className='mb-6'>OPENING HOURS</h2>
						<ul className='text-white/50'>
							<li>Monday to Friday</li>
							<li>8:00 am - 8:00 pm</li>
							<li>Saturdays</li>
							<li>7:00 am - 8:00 pm</li>
							<li>Sundays</li>
							<li>7:00 am - 6:00 pm</li>
						</ul>
					</div>
					<div>
						<h2 className='mb-6'>CONTACT US</h2>
						<ul className='text-white/50'>
							<li className='mb-4'>+1 (305) 814-6416</li>
							<li>Tampa - Florida (EEUU)</li>
						</ul>
					</div>
					<div>
						<h2 className='mb-6'>CUSTOMER SERVICE</h2>
						<ul className='text-white/50'>
							<li className='mb-4'>Terms and Conditions.</li>
							<li>Exchange and refund policies.</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className='my-6 border-white/20 sm:mx-auto lg:my-8' />
			<div className='sm:flex sm:items-center sm:justify-between'>
				<span className='text-sm text-white'>
					Copyright © 2022 by Company, Inc. All Rights Reserved
				</span>
			</div>
		</footer>
	);
};

export default Footer;
