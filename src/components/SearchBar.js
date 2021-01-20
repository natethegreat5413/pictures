import React, { Component } from 'react';

class SearchBar extends Component {
	state = { term: '' };

	onFormSubmit = (e) => {
		e.preventDefault();

		console.log(this.state.term);
		this.setState({ term: '' });
	};

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Image Search</label>

						<input
							type="text"
							placeholder="Search..."
							onChange={(e) => this.setState({ term: e.target.value })}
							value={this.state.term}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
