//User section reducer
import * as types from '../actions/actionTypes';


const INITIAL_STATE = {};

export default function userReducer(state= INITIAL_STATE, action){
	switch(action.type){
		case types.FETCH_USER:
			return   action.user;
		case types.CREATE_USER:
			return Object.assign({},state, action.user);
		// case FETCH_USERS:
		// 	const newUsers = _.mapKeys(action.user,'id');
		// 	return	{...state, ...newUsers};
		// case UPDATE_USER:
		// 	return	{...state, [action.user.id]: action.user};
		// case DELETE_USER:
		// 	return	_.omit(state, action.user.id);
		default:
			return state;

	}
}
