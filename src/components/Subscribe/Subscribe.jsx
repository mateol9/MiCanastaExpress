import bg from '../../assets/bgsub.jpg';
import { BsFacebook, BsWhatsapp, BsInstagram } from 'react-icons/bs';

const Subscribe = () => {
	return (
		<div
			style={{ backgroundImage: `url(${bg})` }}
			className='px-5 sm:px-64 pb-16 sm:pb-44'
		>
			<div className='bg-[#006C84] rounded-b-[14px] sm:rounded-b-[58px] flex flex-col items-center pt-7 sm:pt-28 pb-5 sm:pb-14 gap-2 sm:gap-14'>
				<h2 className='text-[#FFE227] fontStylePlayfair text-lg sm:text-[40px] font-bold'>
					SUBSCRIBE TO RECEIVE NEWS
				</h2>
				<p className='text-white/50 fontStyleNeurial font-normal sm:font-medium text-sm text-center max-w-[180px] sm:max-w-none sm:text-2xl'>
					Find out about our news and discounts.
				</p>
				<div className='flex gap-2 sm:gap-4 mt-2'>
					<input
						type='text'
						placeholder='Enter your email'
						className='rounded-full w-44 sm:w-[436px] h-7 sm:h-auto text-[9px] sm:text-sm sm:px-8 fontStyleNeurial placeholder:text-[#4F4F4F]/50 placeholder:font-medium placeholder:text-[9px] sm:placeholder:text-sm leading-7 customShadow'
					/>
					<button className='bg-[#FFE227] rounded-full h-7 sm:h-16 w-28 sm:w-72 text-[#006C84] text-[9px] sm:text-xl font-bold fontStyleNeurial customShadow hover:bg-[#006C84] hover:text-[#FFE227] hover:border-2 border-[#FFE227]'>
						SUBSCRIBE
					</button>
				</div>
				<div className='flex text-white gap-2 sm:gap-7 text-xl sm:text-4xl'>
					<a
						href='#'
						className='hover:text-[#4267B2] p-2 hover:bg-white hover:p-2 rounded-full'
					>
						<BsFacebook />
					</a>
					<a
						href='#'
						className='hover:text-[#075e54] p-2 hover:bg-white hover:p-2 rounded-full'
					>
						<BsWhatsapp />
					</a>
					<a
						href='#'
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
