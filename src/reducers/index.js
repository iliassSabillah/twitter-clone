import {combineReducers} from 'redux';
import user from './userReducer';
import tweet from './tweetReducer';
import message from './messageReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
	user,
	routing: routerReducer,
	tweet,
	message

});

export default rootReducer;

