import bg from '../../assets/bgsub.jpg';
import { BsFacebook, BsWhatsapp, BsInstagram } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Subscribe = () => {
	const [input, setInput] = useState('');
	const [emailValidation, setEmailValidation] = useState(false);
	const [message, setMessage] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		if (
			/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(input)
		) {
			emailjs
				.sendForm(
					'service_gq0p837',
					'template_kd556dg',
					e.target,
					'4JgsonVoX_1F5DQ3G'
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
			setEmailValidation(true);
			setMessage(true);
			setInput('');
		} else {
			setEmailValidation(false);
			setMessage(true);
		}
	};

	return (
		<div
			style={{ backgroundImage: `url(${bg})` }}
			className='px-5 sm:px-12 md:px-20 lg:px-64 pb-16 sm:pb-20 md:pb-28 lg:pb-44'
		>
			<div className='bg-[#006C84] rounded-b-[14px] sm:rounded-b-[24px] md:rounded-b-[38px] lg:rounded-b-[58px] flex flex-col items-center pt-7 sm:pt-12 md:pt-16 lg:pt-28 pb-5 sm:pb-7 md:pb-9 lg:pb-14 gap-2 sm:gap-6 lg:gap-14'>
				<h2 className='text-[#FFE227] text-center fontStylePlayfair text-lg sm:text-2xl md:text-3xl lg:text-[40px] font-bold'>
					SUBSCRIBE TO RECEIVE NEWS
				</h2>
				<p className='text-white/50 fontStyleNeurial font-normal sm:font-medium text-sm sm:text-md md:text-lg lg:text-2xl text-center max-w-[180px] sm:max-w-none '>
					Find out about our news and discounts.
				</p>
				<form
					onSubmit={sendEmail}
					className='flex flex-wrap justify-center gap-2 sm:gap-4 mt-2'
				>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						name='email'
						type='text'
						placeholder='Enter your email'
						className='rounded-full w-44 sm:w-72 lg:w-[436px] h-7 sm:h-12 lg:h-16 text-[9px] sm:text-sm sm:px-4 md:px-6 lg:px-8 fontStyleNeurial placeholder:text-[#4F4F4F]/50 placeholder:font-medium placeholder:text-[9px] sm:placeholder:text-sm leading-7 customShadow'
					/>
					<button
						type='submit'
						className='bg-[#FFE227] rounded-full h-7 sm:h-12 lg:h-16 w-28 sm:w-48 lg:w-72 text-[#006C84] text-[9px] sm:text-sm lg:text-xl font-bold fontStyleNeurial customShadow hover:bg-[#006C84] hover:text-[#FFE227] hover:border-2 border-[#FFE227]'
					>
						SUBSCRIBE
					</button>
					<span
						className='text-2xl font-bold hidden'
						style={{
							color: emailValidation ? '#FFE227' : 'red',
							display: message ? 'block' : 'none',
						}}
					>
						{emailValidation
							? 'Your subscription was sent.'
							: 'The email you entered is invalid!'}
					</span>
				</form>
				<div className='flex text-white gap-2 sm:gap-7 text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
					<a
						href='https://www.facebook.com/profile.php?id=100083066395537'
						target='_blank'
						rel='noreferrer'
						className='hover:text-[#4267B2] p-2 hover:bg-white hover:p-2 rounded-full'
					>
						<BsFacebook />
					</a>
					<a
						href='https://api.whatsapp.com/send?phone=13058146416'
						target='_blank'
						rel='noreferrer'
						className='hover:text-[#075e54] p-2 hover:bg-white hover:p-2 rounded-full'
					>
						<BsWhatsapp />
					</a>
					<a
						href='https://www.instagram.com/micanastaexpress/'
						target='_blank'
						rel='noreferrer'
						className='hover:text-[#fa7e1e] p-2 hover:bg-white hover:p-2 rounded-full'
					>
						<BsInstagram />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
