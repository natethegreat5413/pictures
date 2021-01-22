import React, { Component } from 'react';
// components //
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

class App extends Component {
	state = { images: [] };

	//// axios call to the unsplash api ////
	onSearchSubmit = async (term) => {
		const res = await unsplash.get('/search/photos', {
			params: { query: term }
		});
		this.setState({ images: res.data.results });
	};
	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}
export default App;
