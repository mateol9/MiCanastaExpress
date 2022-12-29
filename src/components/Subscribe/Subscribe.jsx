import bg from '../../assets/bgus.png';
import { BsFacebook, BsWhatsapp, BsInstagram } from 'react-icons/bs';

const Subscribe = () => {
	return (
		<div style={{ backgroundImage: `url(${bg})` }} className='px-64 py-44 pt-0'>
			<div className='bg-[#006C84] rounded-b-[58px] flex flex-col items-center pt-28 pb-14 gap-14'>
				<h2 className='text-[#FFE227] fontStylePlayfair text-[40px] font-bold'>
					SUBSCRIBE TO RECEIVE NEWS
				</h2>
				<p className='text-white/50 fontStyleNeurial font-medium text-2xl'>
					Find out about our news and discounts.
				</p>
				<div className='flex gap-4'>
					<input
						type='text'
						placeholder='Enter your email'
						className='rounded-full w-[436px] text-sm px-8 fontStyleNeurial placeholder:text-[#4F4F4F]/50 placeholder:font-medium customShadow'
					/>
					<button className='bg-[#FFE227] rounded-full h-16 w-72 text-[#006C84] text-xl font-bold fontStyleNeurial customShadow hover:bg-[#006C84] hover:text-[#FFE227] hover:border-2 border-[#FFE227]'>
						SUBSCRIBE
					</button>
				</div>
				<div className='flex text-white gap-7 text-4xl'>
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
