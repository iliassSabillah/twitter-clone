//Follower section reducer
import * as types from '../actions/actionTypes';


const INITIAL_STATE = {};

export default function followerReducer(state= INITIAL_STATE, action){
	switch(action.type){
		case types.FETCH_FOLLOWER:
			console.log(action.user);
			return   action.user;
		case types.CREATE_FOLLOWER:
			return Object.assign({},state, action.user);
		// case FETCH_FOLLOWERS:
		// 	const newFollowers = _.mapKeys(action.follower,'id');
		// 	return	{...state, ...newFollowers};
		// case UPDATE_FOLLOWER:
		// 	return	{...state, [action.follower.id]: action.follower};
		// case DELETE_FOLLOWER:
		// 	return	_.omit(state, action.follower.id);
		default:
			return state;

	}
}
