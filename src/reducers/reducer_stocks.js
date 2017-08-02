import _ from 'lodash';
import { SEARCH_STOCK, FETCH_BOUGHT_STOCK } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case SEARCH_STOCK:
			return action.payload.data;
		case FETCH_BOUGHT_STOCK:
			console.log(action.payload.data);
			return _.mapKeys(action.payload.data, 'id');
		/*case DELETE_POST:
			return _.omit(state, action.payload)*/
		default:
			return state;
	}
}
