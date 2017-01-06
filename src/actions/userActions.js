//User actions creator
import * as types from './actionTypes';
import axios from 'axios';


export function createUser(user){
	return {type: types.CREATE_USER,user};
}


export function fetchUser() {
	const request = axios.get('/api/users');

	return (dispatch)=>{
		request.then(({data})=>{
			dispatch({type: types.FETCH_USER, user: data});
		});
	};

}

// export function postUser() {
// 	const request = axios.put('/api/users/:name');
//
// 	return (dispatch)=>{
// 		request.then(({data})=>{
// 			dispatch({type: types.UPDATE_USER, user: data});
// 		});
// 	};
//
// }
