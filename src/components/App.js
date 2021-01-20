import React, { Component } from 'react';
import axios from 'axios';
// components //
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
	onSearchSubmit(term) {
		axios
			.get('https://api.unsplash.com/search/photos', {
				params: { query: term },
				headers: {
					Authorization: 'Client-ID Ir667BlJRr6hV1kVrSjMYmtN24_JCONFXbgm3kNIrQY'
				}
			})
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList />
			</div>
		);
	}
}
export default App;
