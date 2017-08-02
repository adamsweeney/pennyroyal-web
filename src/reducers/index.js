import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import StocksReducer from './reducer_stocks';

const rootReducer = combineReducers({
  stocks: StocksReducer,
  form: formReducer
});

export default rootReducer;
