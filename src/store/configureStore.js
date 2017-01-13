import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import logger from 'redux-logger';
import {browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import { routerMiddleware, push } from 'react-router-redux';

// import dataService

// Apply the router middleware to the store
const routerWare = routerMiddleware(browserHistory);

export default function configureStore(initialState){
	return createStore(
		rootReducer,
		initialState,
		compose(applyMiddleware(routerWare,logger(),thunk,reduxImmutableStateInvariant()))
	);
}
