import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState, useEffect } from 'react';
import corporativos from '../../Utils/CorporativosMocks';
import Carousel from 'react-bootstrap/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';


function CardCorp() {
  const [info, setInfo] = useState([]);

  const getBreakFast = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(corporativos)
      }, 2000)
    })
  }

  useEffect( () => {
   getBreakFast()
   .then((res) => {
    setInfo(res)
   }) 
    
  }, [])


  return (
    <>
    <h2 className='titleBouquetes'>CORPORATE AND EVENTS</h2>
    <Swiper
      breakpoints={{
        385: {
          width: 385,
          slidesPerView: 2
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
      { info.map((data) =>{

        return(
          
          <SwiperSlide key={data.id}>
          <Card  style={{ textAlign: 'center', width: '12rem', height: '18rem', marginBottom: '8rem'}}>
          <Card.Img variant="top" src={data.imagen} style={{ width: '8rem', height: '8rem', alignSelf: 'center'}} />
          <Card.Body>
            <Card.Title>{data.titulo}</Card.Title>
            <Card.Text>
              ${data.precio}
            </Card.Text>
            <Button variant="outline-primary" style={{alignContent: 'center'}}>buy now</Button>
          </Card.Body>
        </Card>
        </SwiperSlide>
      )})
      }
    </Swiper>
    </>
  );
}

export default CardCorp;