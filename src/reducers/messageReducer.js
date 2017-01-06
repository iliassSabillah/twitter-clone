//Messages section reducer
import * as types from '../actions/actionTypes';


export default function messageReducer(state = {}, action){
	switch(action.type){
		case types.CREATE_MESSAGE:
			return Object.assign({},state, action.message);
		default:
			return state;
	}
}
