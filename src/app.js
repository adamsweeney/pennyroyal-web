import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import promise from 'redux-promise';

import reducers from './reducers';
import StocksNew from './components/stocks_new';
import BoughtStockList from './containers/bought_stock_list';
import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<MuiThemeProvider>
			<BrowserRouter>
	      <div>
	        <Switch>
	          <Route path="/stocks/new" component={StocksNew} />
						<Route path="/portfolio" component={BoughtStockList} />
						<Route path="/" component={App} />
	        </Switch>
	      </div>
    	</BrowserRouter>
		</MuiThemeProvider>
  </Provider>
  , document.querySelector('.main'));
