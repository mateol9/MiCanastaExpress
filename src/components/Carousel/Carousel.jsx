
import { Carousel } from "flowbite-react";
function CarouselBanner() {
	return (
		<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel >
    <img className="md:h-full"
      src="https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/carrusel%2FSin%20título-1%204.png?alt=media&token=3885414e-53f1-40b7-bdbc-2b3e19a97538"
      alt="img3"
    />
    <img
      src="https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/carrusel%2Fbanner1.PNG?alt=media&token=8e52365d-4e58-46cd-bf62-0c46b7b7bdfc"
      alt="img1"
    />
    <img
      src="https://firebasestorage.googleapis.com/v0/b/micanastaexpress-23ff9.appspot.com/o/carrusel%2Fbanner2.PNG?alt=media&token=528e280d-7b12-4d49-8231-3739ac94b3d2"
      alt="img2"
    />
  </Carousel>
</div>
	);
}

export default CarouselBanner;
