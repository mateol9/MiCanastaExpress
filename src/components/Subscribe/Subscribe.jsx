import bg from '../../assets/bgus.png';
import { BsFacebook, BsWhatsapp, BsInstagram } from 'react-icons/bs';

const Subscribe = () => {
	return (
		<div style={{ backgroundImage: `url(${bg})` }} className='p-32 pt-0'>
			<div className='bg-[#006C84] rounded-b-3xl flex flex-col items-center py-20 gap-8'>
				<h2 className='text-[#FFE227]'>SUBSCRIBE TO RECEIVE NEWS</h2>
				<p className='text-white/50'>Find out about our news and discounts.</p>
				<div className='flex gap-4'>
					<input type='text' className='rounded-full' />
					<button className='bg-[#FFE227] rounded-full p-2 w-32 text-[#006C84]'>
						SUBSCRIBE
					</button>
				</div>
				<div className='flex text-white gap-6'>
					<BsFacebook />
					<BsWhatsapp />
					<BsInstagram />
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
