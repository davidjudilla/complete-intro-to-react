// @flow

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';

const FourOhfour = () => <h1>404</h1>;

const App = () => (
	<BrowserRouter>
		<div className="app">
			<Route exact path="/" component={Landing} />
			<Route path="/search" component={props => <Search shows={preload.shows} {...props} />} />
			<Route
				path="/details/:id"
				component={(props: { match: Match }) => (
					<Details show={preload.shows.find(show => show.imdbID == props.match.params.id)} {...props} />
				)}
			/>
			<Route component={FourOhfour} />
		</div>
	</BrowserRouter>
);

export default App;
