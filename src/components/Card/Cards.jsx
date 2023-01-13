import { Card } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';

function Cards(products) {
	const [info, setInfo] = useState([]);

	const getBreakFast = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(products);
			}, 2000);
		});
	};

	useEffect(() => {
		getBreakFast().then((res) => {
			setInfo(res.products);
		});
	}, []);

	return (
		<Swiper
			breakpoints={{
				385: {
					width: 385,
					slidesPerView: 2,
				},
				446: {
					width: 446,
					slidesPerView: 2,
				},
				// when window width is >= 640px
				640: {
					width: 640,
					slidesPerView: 3,
				},
				// when window width is >= 768px
				987: {
					width: 987,
					slidesPerView: 5,
				},
			}}
			spaceBetween={1}
			slidesPerView={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			{info.map((data) => {
				return (
					<SwiperSlide key={data.id}>
						<div className='max-w-sm'>
							<Card style={{ width: '200px', height: '350px' }}>
								<img className='imgCard' src={data.imagen} alt={data.titulo} />
								<a href='#'>
									<h5 className='text-xl tracking-tight text-gray-900 dark:text-white text-center'>
										{data.titulo}
									</h5>
								</a>
								<h5 className='text-3xl text-gray-900 dark:text-white text-center'>
									${data.precio}
								</h5>
								<div className='flex items-center justify-center'>
								<Link to={`/detail/${data.titulo}`} style={ {textDecoration: 'none', color: 'aliceblue' } } >
									<button
										rel='noreferrer'
										className='rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
									>
										Detalles
									</button>
								</Link>
								</div>
							</Card>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}

export default Cards;
