import {combineReducers} from 'redux';
import user from './userReducer';
import tweet from './tweetReducer';
import message from './messageReducer';
import follower from './followerReducer';

import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
	user,
	routing: routerReducer,
	tweet,
	message,
	follower

});

export default rootReducer;

