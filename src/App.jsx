import NavBar from './Components/NavBar/NavBar'
import Cards from './Components/Card/Cards'
import CarouselBanner from './Components/Carousel/Carousel';
import CardBouquetes from './Components/CardBouquetes/CardBouquetes';
import CardCorp from './Components/CardCorp/CardCorp';

function App() {
	return (
		<div className='App'>
			<NavBar/>
			<CarouselBanner/>
			<Cards/>
			<CardBouquetes/>
			<CardCorp/>
		</div>
	);
}

export default App;
