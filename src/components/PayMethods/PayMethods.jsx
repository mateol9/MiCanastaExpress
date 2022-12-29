import zelle from '../../assets/zelle.png';
import cash from '../../assets/cashApp.png';
import truck from '../../assets/truck.png';

const PayMethods = () => {
	return (
		<div className='bg-[#FEFEFE] p-20 gap-32 flex-wrap flex items-center shadow shadow-black/20'>
			<div className='flex items-center justify-end gap-8 flex-1'>
				<h4 className='fontStylePlayfair text-[#007994] font-medium text-3xl'>
					Payment Methods:
				</h4>
				<img src={zelle} alt='Zelle logo' />
				<img src={cash} alt='CashApp logo' />
			</div>
			<span className='p-0.5 h-20 bg-[#D9D9D9]'></span>
			<div className='flex items-center gap-16 flex-1'>
				<img src={truck} alt='' className='bg-[#FFF3C7] p-4 rounded-md' />
				<p className='fontStylePlayfair font-medium text-3xl'>
					Delivery in Tampa <br /> and surroundings.
				</p>
			</div>
		</div>
	);
};

export default PayMethods;
