//User section reducer
import * as types from '../actions/actionTypes';


const INITIAL_STATE = { user: null, error: null };

export default function userReducer(state= INITIAL_STATE, action){
	switch(action.type){
		case types.FETCH_USER:
			return   action.user;
		case types.CREATE_USER:
			return Object.assign({},state, action.user);
		case types.LOG_IN:
			return state
			// if (action.response.success) {
			// 	return { ...state, user: action.response.user, error: null }
			// } else {
			// 	return { ...state, user: null, error: 'Login failed, check username/password' }
			// }
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
