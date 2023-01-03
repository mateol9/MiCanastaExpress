import Carousel from 'react-bootstrap/Carousel';

function CarouselBanner() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/carrusel%2Fcarrusel.jpg?alt=media&token=01b9389c-c682-478e-9708-0101b2dc6e13"
          alt="First slide"
        />
      </Carousel.Item>
      
    </Carousel>
  );
}

export default CarouselBanner;