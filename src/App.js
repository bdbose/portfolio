/** @format */

import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home';

import './index.css';
import Project from './components/projects';
import NoPage from './components/404';
import ContactForm from './components/contact';
import Blog from './components/blog';
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/projects' component={Project} />
					<Route path='/contact' component={ContactForm} />
					<Route path='/blogs' component={Blog} />
					<Route path='*' component={NoPage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
