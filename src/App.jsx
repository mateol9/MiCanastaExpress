import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import PayMethods from './components/PayMethods/PayMethods';
import Subscribe from './components/Subscribe/Subscribe';
import Us from './components/Us/Us';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Us />
			<PayMethods />
			<Subscribe />
			<Footer />
		</div>
	);
}

export default App;
