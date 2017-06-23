// @flow

import React from 'react';
import ShowCard from './ShowCard';

class Search extends React.Component {
	state = {
		searchTerm: ''
	};

	props: {
		shows: Array<Show>
	};

	handleSearchChange = (e: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
		this.setState({
			searchTerm: e.target.value
		});
	};

	render() {
		return (
			<div className="search">
				<header>
					<h1>svideo</h1>
					<input
						value={this.state.searchTerm}
						type="text"
						placeholder="search"
						onChange={this.handleSearchChange}
					/>
				</header>
				<div>
					{this.props.shows
						.filter(
							show =>
								`${show.title} ${show.description}`
									.toUpperCase()
									.indexOf(this.state.searchTerm.toUpperCase()) >= 0
						)
						.map(show => <ShowCard {...show} key={show.imdbID} />)}
				</div>
			</div>
		);
	}
}

export default Search;
