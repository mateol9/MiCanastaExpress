import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from './components/DetailPage/DetailPage';
import Footer from './components/Footer/Footer';
import PayMethods from './components/PayMethods/PayMethods';
import Subscribe from './components/Subscribe/Subscribe';
import Us from './components/Us/Us';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Us />
								<PayMethods />
								<Subscribe />
							</>
						}
					/>
					<Route path='/detail/:productId' element={<DetailPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
