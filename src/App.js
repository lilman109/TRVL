import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/Navbar';
import Home from './components/Pages/Home.js';
import Products from './components/Pages/Products.js';
import Services from './components/Pages/Services.js';
import SignUp from './components/Pages/SignUp.js';
import Footer from './components/Footer.js';

function App() {
	return (
		<div className='App'>
			<Router>
				<NavBar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/services' exact component={Services} />
					<Route path='/products' exact component={Products} />
					<Route path='/sign-up' exact component={SignUp} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
