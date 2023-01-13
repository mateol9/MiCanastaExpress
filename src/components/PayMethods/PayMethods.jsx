import zelle from '../../assets/zelle.png';
import cash from '../../assets/cashApp.png';
import truck from '../../assets/truck.png';

const PayMethods = () => {
	return (
		<div className='bg-[#FEFEFE] p-5 lg:p-20 gap-8 sm:gap-12 md:gap-18 lg:gap-20 xl:gap-24 flex flex-col lg:flex-row items-center shadow shadow-black/20'>
			<div className='flex items-center justify-end gap-4 flex-1'>
				<h4 className='fontStylePlayfair text-[#007994] font-medium text-[9px] sm:text-xl md:text-2xl lg:text-3xl'>
					Payment Methods:
				</h4>
				<img
					src={zelle}
					alt='Zelle logo'
					className='w-10 sm:w-14 md:w-20 lg:w-24 xl:w-auto'
				/>
				<img
					src={cash}
					alt='CashApp logo'
					className='w-16 sm:w-24 md:w-32 lg:w-40 xl:w-auto'
				/>
			</div>
			<span className='p-0.5 h-20 bg-[#D9D9D9] hidden lg:block'></span>
			<div className='flex items-center gap-5 sm:gap-8 md:gap-12 xl:gap-16 flex-1'>
				<img
					src={truck}
					alt='truck'
					className='bg-[#FFF3C7] box-content p-2 sm:p-3 lg:p-4 rounded-lg w-3 sm:w-6 md:w-8 lg:w-auto'
				/>
				<p className='fontStylePlayfair font-medium text-[9px] sm:text-xl md:text-2xl lg:text-3xl'>
					Delivery in Tampa <br /> and surroundings.
				</p>
			</div>
		</div>
	);
};

export default PayMethods;
