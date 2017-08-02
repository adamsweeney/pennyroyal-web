import axios from 'axios';

export const CREATE_BOUGHT_STOCK = 'CREATE_BOUGHT_STOCK';
export const FETCH_BOUGHT_STOCK = 'FETCH_BOUGHT_STOCK';
export const SEARCH_STOCK = 'SEARCH_STOCK';

const ROOT_URL = 'https://pennyroyal-stock.herokuapp.com/api/';
const IEX_URL = 'https://api.iextrading.com/1.0/stock/';
const ALPHA_URL = 'https://alphaadvantage.co/query';
const ALPHA_API = '&apikey=PKK5';

export function createBoughtStock(values, callback) {
	const request = axios.post(`${ROOT_URL}stocks`, values)
		.then(() => callback());

	return {
		type: CREATE_BOUGHT_STOCK,
		payload: request
	};
}

export function fetchBoughtStocks() {
	const request = axios.get(`${ROOT_URL}stocks`);

	return {
		type: FETCH_BOUGHT_STOCK,
		payload: request
	};
}

export function searchStock(term) {
	const request = axios.get(`${IEX_URL}${term}/company`);
	return {
		type: SEARCH_STOCK,
		payload: request
	};
}
