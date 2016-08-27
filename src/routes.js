import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Course from './components/Course';
import About from './components/About';
import HomePage from './components/HomePage';
import Nest from './components/Nest';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="course" component={Course} />
		<Route path="about" component={About} onEnter={() => {
			console.log("About to enter /about");
		}}>
			<Route path=":name" component={Nest} />
		</Route>
	</Route>
)