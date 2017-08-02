import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBoughtStock } from '../actions';
import SearchStock from '../containers/search_stock';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Moment from 'react-moment';

class StocksNew extends Component {
	constructor(props) {
		super(props);
		this.state = {
			market: '',
			name: '',
			code: '',
			buying_price: 0.00,
			bought_at: null
		}
		this.onTextChange = this.onTextChange.bind(this);
		this.onDateChange = this.onDateChange.bind(this);
	}

	/* componentWillReceiveProps(nextProps) {
		console.log(nextProps.stocks);
		this.setState({
			market: nextProps.stocks.market,
			name: nextProps.stocks.name,
			code: nextProps.stocks.code
		});
		console.log(this.state);
		/*this.setState({
			market: nextProps.stocks.market,
			code: nextProps.stocks.code,
			name: nextProps.stocks.name
		});
	} */



	renderField(field) {
		const { meta: { touched, error } }	= field;
		return (
			<div>
				<TextField {...field.input} value={field.value} errorText={touched ? error : ''} floatingLabelFixed={true} floatingLabelText={field.label} />
			</div>
		);
	}

	renderDate(field) {
		const { meta: { touched, error } } = field;
		return (
			<div>
				<DatePicker {...field.input} value={field.input.value !== '' ? new Date(field.input.value) : null} onChange={(e, date) => field.input.onChange(date)} floatingLabelFixed={true} floatingLabelText={field.label} />
			</div>
		);
	}

	onSubmit(values) {
		this.props.createBoughtStock(values, () => {
			this.props.history.push('/');
		});
	}

	onTextChange(event) {
    const name = event.target.name;
		this.setState({
			[name] : event.target.value
		});
	}

	onDateChange(event, date) {
		this.setState({
			bought_at: date
		});
	}

	render() {
		const { handleSubmit, pristine, submitting } = this.props;
		return (
			<div>
					<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field label="Code" name="code" value={this.state.code} onChange={this.onTextChange} component={this.renderField} />
					<Field label="Name" name="name" value={this.state.name} onChange={this.onTextChange} component={this.renderField} />
					<Field label="Market" name="market" value={this.state.market} onChange={this.onTextChange} component={this.renderField} />
					<Field label="Buying Price" name="buying_price" value={this.state.buying_price} onChange={this.onTextChange} component={this.renderField} />
					<Field label="Bought At" name="bought_at" value={this.state.bought_at} onChange={this.onDateChange} component={this.renderDate} />
					<RaisedButton primary type="submit" disabled={pristine || submitting} label="Submit" />
					<Link to="/">
						<RaisedButton label="Cancel" secondary />
					</Link>
				</form>
			</div>
		)
	}
}

function validate(values) {
	const errors = {};

	//validate inputs from values
	if (!values.name) {
		errors.name = "Enter a name!";
	}

	if (!values.market) {
		errors.market = "Enter a market!";
	}

	if (!values.code) {
		errors.code = "Enter a code	!";
	}

	if (!values.buying_price) {
		errors.buying_price = "Enter a buying price"
	} else if (isNaN(Number(values.buying_price))) {
		errors.buying_price = "Buying Price must be a number"
	}

	//errors is empty, form is fine to submit
	return errors;
}

export default reduxForm({
	validate,
	form: 'StocksNewForm'
})(
	connect(null, { createBoughtStock })(StocksNew)
);
