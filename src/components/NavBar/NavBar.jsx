import { Navbar } from 'flowbite-react';

import '../../index.css';

function NavBar() {
	return (
		<Navbar fluid={true} rounded={true} className='sticky top-0 z-50'>
			<Navbar.Brand>
				<img
					src='https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/logo%2FLOGO%20PRINCIPAL.png?alt=media&token=398018ef-a6aa-49bc-9dd2-e93183b9c0a5'
					className='mr-3 h-30 sm:h-30'
					alt='Flowbite Logo'
				/>
			</Navbar.Brand>
			<div className='flex md:order-2'>
				<a
					href='https://www.facebook.com/profile.php?id=100083066395537'
					target='_blank'
					rel='noreferrer'
				>
					<img
						// eslint-disable-next-line react/no-unknown-property
						variant='top'
						src='https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/rrss%2Ffacebook.svg?alt=media&token=f1d8628c-c89c-469d-a105-fadd1eb7d88e'
						style={{
							width: '1rem',
							height: '1rem',
							alignSelf: 'center',
							margin: '10px',
						}}
					/>
				</a>
				<a
					href='https://www.instagram.com/micanastaexpress/'
					target='_blank'
					rel='noreferrer'
				>
					<img
						// eslint-disable-next-line react/no-unknown-property
						variant='top'
						src='https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/rrss%2Finstagram.svg?alt=media&token=86e74074-ba0d-4d19-8b6e-8df97a859cd0'
						style={{
							width: '1rem',
							height: '1rem',
							alignSelf: 'center',
							margin: '10px',
						}}
					/>
				</a>
				<a
					href='https://api.whatsapp.com/send?phone=13058146416'
					target='_blank'
					rel='noreferrer'
				>
					<img
						// eslint-disable-next-line react/no-unknown-property
						variant='top'
						src='https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/rrss%2Fwhatsapp.svg?alt=media&token=f560f445-deb1-4e0e-bf2d-1a94389bb01b'
						style={{
							width: '1rem',
							height: '1rem',
							alignSelf: 'center',
							margin: '10px',
						}}
					/>
				</a>
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse style={{ textAlign: 'center', alignSelf: 'center', width: '500px' }}>
				<Navbar.Link href='#surpriceBreakfast'>SURPRISE BREAKFAST</Navbar.Link>
				<Navbar.Link href='#bouquets'>
					FLOWER BOUQUETS AND CHOCOLATES
				</Navbar.Link>
				<Navbar.Link href='#corporate'>CORPORATE AND EVENTS</Navbar.Link>
				<Navbar.Link href='#onUs'>
					ON US
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBar;
