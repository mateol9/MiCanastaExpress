import Footer from './components/Footer/Footer.jsx';
import PayMethods from './components/PayMethods/PayMethods.jsx';
import Subscribe from './components/Subscribe/Subscribe';
import Us from './components/Us/Us';
import CarouselBanner from './components/Carousel/Carousel'
import NavBar from './components/NavBar/NavBar';
import Cards from './components/Card/Cards';
import desayunos from './Utils/DesayunosMocks.js';
import bouquetes from './Utils/BouquetesMocks.js';
import corporativos from './Utils/CorporativosMocks.js';

function App() {
	return (
		<div className='App'>
			<NavBar/>
			<CarouselBanner/>
			<h2 className='titleBouquetes'>SURPRISE BREAKFAST</h2>
			<Cards products={desayunos}/>
			<h2 className='titleBouquetes'>BOUQUETS OF FLOWERS AND CHOCOLATES</h2>
			<Cards products={bouquetes}/>
			<h2 className='titleBouquetes'>CORPORATE AND EVENTS</h2>
			<Cards products={corporativos}/>
			<Us />
			<PayMethods />
			<Subscribe />
			<Footer />
		</div>
	);
}

export default App;
