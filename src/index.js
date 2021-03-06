import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from './containers/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchRobots } from './reducers';


const store=createStore(searchRobots);
ReactDOM.render(
	<div>
		<Provider store={store}>
			<App />
		</Provider>
	</div>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
