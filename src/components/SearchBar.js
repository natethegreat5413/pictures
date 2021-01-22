import React, { Component } from 'react';

class SearchBar extends Component {
	state = { term: '' };

	//// FORM SUBMIT HANDLER ////
	onFormSubmit = (e) => {
		e.preventDefault();
		// this grabs the axios call from the app function
		this.props.onSubmit(this.state.term);

		// This resets the form back to empty
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
