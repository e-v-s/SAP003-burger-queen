import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './pages/mainPage.js';
import MenuPage from './pages/menuPage.js';
import KitchenPage from './pages/kitchenPage.js';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={MainPage} />
				<Route path='/menu' component={MenuPage} />
				<Route path='/kitchen' component={KitchenPage} />
			</Switch>
		</BrowserRouter>
	)
};

export default Routes;
