import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchStock } from '../actions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class SearchStock extends Component {

	constructor(props) {
		super(props);

		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		this.props.searchStock(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<TextField
					hintText="AAPL"
					floatingLabelText="Search for stock by code"
					fullWidth={true}
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<RaisedButton type="submit" primary label="Search" />
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ searchStock }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchStock);
