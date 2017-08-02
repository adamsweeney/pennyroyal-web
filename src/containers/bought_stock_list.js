import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBoughtStocks } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class BoughtStockList extends Component {
	componentDidMount() {
		this.props.fetchBoughtStocks();
	}

	renderStocks(stockData) {
		return _.map(this.props.stocks, stock => {
			return (
				<TableRow key={stock.id}>
					<TableRowColumn>
						<Link to={`/stocks/${stock.id}`}>
							{stock.name}
						</Link>
					</TableRowColumn>
					<TableRowColumn>{stock.code}</TableRowColumn>
					<TableRowColumn>{stock.market}</TableRowColumn>
					<TableRowColumn>{stock.bought_at}</TableRowColumn>
					<TableRowColumn>{stock.buying_price}</TableRowColumn>
					<TableRowColumn>{stock.current_price}</TableRowColumn>
				</TableRow>
			)
		});
	}

	render() {
		if (!this.props.stocks) {
			console.log("Loading");
			return <div>Loading...</div>
		}
		return (
			<Table>
				<TableHeader>
					<TableRow>
						<TableHeaderColumn>Name</TableHeaderColumn>
						<TableHeaderColumn>Code</TableHeaderColumn>
						<TableHeaderColumn>Market</TableHeaderColumn>
						<TableHeaderColumn>Bought At</TableHeaderColumn>
						<TableHeaderColumn>Buying Price</TableHeaderColumn>
						<TableHeaderColumn>Current Price</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody showRowHover={true} stripedRows={true}>
					{this.renderStocks()}
				</TableBody>
			</Table>
		);
	}
}

function mapStateToProps({ stocks }) {
	return { stocks };
}

export default connect(mapStateToProps, { fetchBoughtStocks })(BoughtStockList);
;
