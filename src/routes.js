import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Contact from './components/Contact';
import About from './components/About';
import HomePage from './components/HomePage';
import Nest from './components/Nest';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="contact" component={Contact} />
		<Route path="about" component={About}>
			<Route path=":name" component={Nest} />
		</Route>
	</Route>
)