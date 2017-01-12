//Message actions creator

import * as types from './actionTypes';
import axios from 'axios';

export function logIn(username, password) {
	const request = axios.post('/api/login', {
		username: username,
		password: password
	})

	return (dispatch)=>{
		request.then(({data})=>{
			dispatch({type: types.LOG_IN, response: data});
		});
	};
}
