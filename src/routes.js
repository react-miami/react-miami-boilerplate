import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import { history } from './redux/store';

// Pages.
import Home from './views/pages/home';
import Pokemon from './views/pages/pokemon';
import About from './views/pages/about';
import PageNotFound from './views/pages/404';

let onUpdate = () => { window.scrollTo(0, 0); };

// Routes template.
export default (
	<Router history={history}>
		<Route path="/" component={Home} title="Home" onUpdate={onUpdate} />
		<Route path="/pokemon" component={Pokemon} title="Pokemon" onUpdate={onUpdate} />
		<Route path="/about" component={About} title="About" onUpdate={onUpdate} />
		<Route path="/oops" component={PageNotFound} title="Page Not Found" onUpdate={onUpdate} />
		<Redirect from="*" to="/oops" />
	</Router>
);
