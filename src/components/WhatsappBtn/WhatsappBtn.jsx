import { BsWhatsapp } from 'react-icons/bs';

const WhatsappBtn = () => {
	return (
		<div className='z-50 fixed right-6 bottom-10'>
			<a
				href='https://api.whatsapp.com/send?phone=13058146416'
				target='_blank'
				rel='noreferrer'
			>
				<BsWhatsapp className='text-white text-5xl p-3 bg-[#075e54] rounded-full box-content' />
			</a>
		</div>
	);
};

export default WhatsappBtn;
