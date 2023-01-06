import Footer from './components/Footer/Footer';
import PayMethods from './components/PayMethods/PayMethods';
import Subscribe from './components/Subscribe/Subscribe';
import Us from './components/Us/Us';
import CarouselBanner from './components/Carousel/Carousel'
import NavBar from './components/NavBar/NavBar';
import Cards from './components/Card/Cards';
import CardBouquetes from './components/CardBouquetes/CardBouquetes'
import CardCorp from './components/CardCorp/CardCorp'
function App() {
	return (
		<div className='App'>
			<NavBar/>
			<CarouselBanner/>
			<Cards/>
			<CardBouquetes/>
			<CardCorp/>
			<Us />
			<PayMethods />
			<Subscribe />
			<Footer />
		</div>
	);
}

export default App;
