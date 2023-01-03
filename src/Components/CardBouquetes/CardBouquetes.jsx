import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState, useEffect } from 'react';
import bouquetes from '../../Utils/BouquetesMocks';
import Carousel from 'react-bootstrap/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';


function CardBouquetes() {
  const [info, setInfo] = useState([]);

  const getBreakFast = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(bouquetes)
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
    <h2 className='titleBouquetes'>BOUQUETS OF FLOWERS AND CHOCOLATES</h2>
    <Swiper
      spaceBetween={10}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      { info.map((data) =>{

        return(
          
          <SwiperSlide>
          <Card key={data.id} style={{ textAlign: 'center', width: '12rem', height: '18rem'}}>
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

export default CardBouquetes;