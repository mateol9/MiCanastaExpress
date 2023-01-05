import zelle from '../../assets/zelle.png';
import cash from '../../assets/cashApp.png';
import truck from '../../assets/truck.png';

const PayMethods = () => {
	return (
		<div className='bg-[#FEFEFE] p-5 sm:p-20 gap-8 sm:gap-32 flex flex-col sm:flex-row items-center shadow shadow-black/20'>
			<div className='flex items-center justify-end gap-8 flex-1'>
				<h4 className='fontStylePlayfair text-[#007994] font-medium text-[9px] sm:text-3xl'>
					Payment Methods:
				</h4>
				<img src={zelle} alt='Zelle logo' className='w-10 sm:w-auto' />
				<img src={cash} alt='CashApp logo' className='w-16 sm:w-auto' />
			</div>
			<span className='p-0.5 h-20 bg-[#D9D9D9] hidden sm:block'></span>
			<div className='flex items-center gap-5 sm:gap-16 flex-1'>
				<img
					src={truck}
					alt='truck'
					className='bg-[#FFF3C7] box-content p-2 sm:p-4 rounded-md w-3 sm:w-auto'
				/>
				<p className='fontStylePlayfair font-medium text-[9px] sm:text-3xl'>
					Delivery in Tampa <br /> and surroundings.
				</p>
			</div>
		</div>
	);
};

export default PayMethods;
