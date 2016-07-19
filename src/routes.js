import React from 'react';
import { Router, Route, IndexRedirect, Redirect } from 'react-router';
import { history } from './redux/store';

// Pages.
import App from './app';
import Home from './pages/home';
import About from './pages/about';
import PageNotFound from './pages/404';

let onUpdate = () => { window.scrollTo(0, 0); };

// Routes template.
export default (
	<Router history={history}>
		<Route path="/" component={Home} onUpdate={onUpdate} />
		<Route path="/home" component={Home} title="Home" onUpdate={onUpdate} />
		<Route path="/about" component={About} title="Home" onUpdate={onUpdate} />
		<Route path="/oops" component={PageNotFound} title="Page Not Found" onUpdate={onUpdate} />
		<Redirect from='*' to='/oops' />
	</Router>
);
