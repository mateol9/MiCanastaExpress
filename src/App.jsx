import Carousel from './components/Carousel/Carousel';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from './components/DetailPage/DetailPage';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import PayMethods from './components/PayMethods/PayMethods';
import Subscribe from './components/Subscribe/Subscribe';
import Us from './components/Us/Us';
import Cards from './components/Card/Cards';
import desayunos from './utils/DesayunosMocks.js';
import bouquetes from './utils/BouquetesMocks.js';
import corporativos from './utils/CorporativosMocks.js';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Carousel />
								<h2 className='titleBouquetes' id='surpriceBreakfast'>
									SURPRISE BREAKFAST
								</h2>
								<Cards products={desayunos} />
								<h2 className='titleBouquetes' id='bouquets'>
									BOUQUETS OF FLOWERS AND CHOCOLATES
								</h2>
								<Cards products={bouquetes} />
								<h2 className='titleBouquetes' id='corporate'>CORPORATE AND EVENTS</h2>
								<Cards products={corporativos} />
								<Us id='onUs'/>
								<PayMethods />
								<Subscribe />
							</>
						}
					/>
					<Route path='/detail/:titulo' element={<DetailPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
