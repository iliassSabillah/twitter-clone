//Education section reducer

import * as types from '../actions/actionTypes';


const INITIAL_STATE = {};

export default function tweetReducer(state= INITIAL_STATE, action){
	switch(action.type){
		case types.FETCH_TWEET:
			return   action.tweet;
		case types.CREATE_TWEET:
			return Object.assign({},state, action.tweet);
		// case FETCH_TWEET:
		// 	const newEducation = _.mapKeys(action.experience,'id');
		// 	return	{...state, ...newEducation};
		// case UPDATE_TWEET:
		// 	return	{...state, [action.tweet.id]: action.tweet};
		case DELETE_TWEET:
			return	_.omit(state, action.tweet.id);
		default:
			return state;

	}
}
