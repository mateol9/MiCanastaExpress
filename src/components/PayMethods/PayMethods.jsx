import zelle from '../../assets/zelle.png';
import cash from '../../assets/cashApp.png';
import truck from '../../assets/truck.png';

const PayMethods = () => {
	return (
		<div className='bg-[#FEFEFE] flex items-center shadow shadow-black/20'>
			<div className='flex items-center justify-center flex-1'>
				<h4>Payment Methods:</h4>
				<img src={zelle} alt='Zelle logo' />
				<img src={cash} alt='CashApp logo' />
			</div>
			<span className='text-5xl font-thin m-auto text-[#D9D9D9]'>|</span>
			<div className='flex items-center justify-center flex-1'>
				<img src={truck} alt='' className='bg-[#FFF3C7] p-4 rounded-md' />
				<p>Delivery in Tampa and surroundings.</p>
			</div>
		</div>
	);
};

export default PayMethods;
