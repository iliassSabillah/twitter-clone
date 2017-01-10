//Messages section reducer
import * as types from '../actions/actionTypes';
import _ from 'lodash';

export default function messageReducer(state = {}, action){
	switch(action.type){
		case types.FETCH_MESSAGE:
			return action.message;
		case types.CREATE_MESSAGE:
			return Object.assign({},state, action.message);
		case types.DELETE_MESSAGE:
			return _.omit(state, action.message.id)
		default:
			return state;
	}
}
