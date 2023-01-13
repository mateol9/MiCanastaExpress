import deluxe from '../../assets/deluxe.png';
import { useRef, useState, useEffect } from 'react';
import desayunos from '../../utils/DesayunosMocks';
import bouquetes from '../../utils/BouquetesMocks';
import corporativos from '../../utils/CorporativosMocks';
import { useParams } from 'react-router-dom';



const Detail = () => {
	const [ product, setProduct ] = useState([])
    const { titulo } = useParams()
	const products = [];
	const [description, setDescription ] = useState([])
	

	desayunos.map((breakFast) => {
		products.push(breakFast)
	})
	bouquetes.map((bouquete) => {
		products.push(bouquete)
	})
	corporativos.map((corporate) => {
		products.push(corporate)
	})

	const getBreakFast = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const productFilter = products.find( (producto) => {
					
					return producto.titulo == titulo
				
				})
				
				resolve(productFilter);
			}, 2000);
		});
	};

	useEffect(() => {
		getBreakFast().then((res) => {
			setProduct(res);
			setDescription(res.descripcion)
		});
	}, []);

	

	return (
		<div className='bg-[#FFF5EC] flex flex-col justify-center lg:flex-row px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28 py-12 sm:py-14 md:py-16 lg:py-18 gap-4 sm:gap-6 md:gap-9 lg:gap-12 xl:gap-16'>
			<div className='flex justify-center lg:block'>
				<img src={product.imagen} alt={product.titulo} />
			</div>
			<div className='flex flex-col justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16'>
				<div className='text-[#EB596E] fontStylePlayfair '>
					<h2 className='font-semibold text-[17px] sm:text-[20px] md:text-[22px] lg:text-[25px] uppercase'>
						{product.categoria}
					</h2>
					<h1 className='font-bold text-[31px] sm:text-[38px] md:text-[46px] lg:text-[52px] xl:text-[71px] leading-none uppercase'>
						{product.titulo}
					</h1>
					<p className='font-black text-[48px] sm:text-[52px] md:text-[56px] lg:text-[60px] xl:text-[63px] leading-[55px] sm:leading-[60px] md:leading-[62px] lg:leading-[70px] xl:leading-[75px]'>
						${product.precio}
					</p>
				</div>
				<div className='fontStyleNeurial'>
					<p className='font-extrabold mb-2 sm:mb-4 md:mb-6 lg:mb-8 tracking-[0.245em] text-[12px] md:text-[16px] lg:text-[18px]'>
						CONTENT
					</p>
					<ul className='list-disc  text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] xl:text-[26px] ml-5 flex flex-col gap-2 uppercase'>
					
						{
						description.map((item) => {
							return(
							<li key={item}>{item}</li>
							)
						})
						}

					</ul>
				</div>
				<div className='flex justify-center items-center'>
					<a
						href={`https://api.whatsapp.com/send?phone=13058146416&text=Hi!%20I%20am%20interested%20in%20this%20article%20${product.titulo}`}
						target='_blank'
						rel='noreferrer'
						className='px-16 md:px-20 lg:px-24 py-2 sm:py-3 lg:py-4 bg-[#007994] rounded-full text-white text-[9px] md:text-[14px] lg:text-[19px] border-2 border-[#007994] hover:bg-[#FFF5EC] hover:text-[#007994] font-bold'
					>
						BUY NOW
					</a>
				</div>
			</div>
		</div>
	);
};

export default Detail;
