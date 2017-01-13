import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes/routes';
import configureStore from './store/configureStore';
import 'jquery';
import './styles/styles.css'; //Webpack can import CSS files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {fetchUser} from './actions/userActions';
import {fetchTweet} from './actions/tweetActions';
import {fetchFollowers} from './actions/followerActions';


const store = configureStore();

// window.store = store;

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);



render (
	<Provider store={store}>
		<Router history={history} routes={routes}/>
	</Provider>,
	document.getElementById('root')
);

//
store.dispatch(fetchUser(store.getState().routing.params));
store.dispatch(fetchTweet());
store.dispatch(fetchFollowers());

