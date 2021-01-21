import React, { Component } from 'react';
import unsplash from '../api/unsplash';
// components //
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
	state = { images: [] };

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
				Found: {this.state.images.length} images
				{/* <ImageList /> */}
			</div>
		);
	}
}
export default App;
