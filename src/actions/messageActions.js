//Message actions creator

import * as types from './actionTypes';
import axios from 'axios';

export function fetchMessage() {
	const request = axios.get('/api/message');

	return (dispatch)=>{
		request.then(({data})=>{
			// console.log('message data',data);
			dispatch({type: types.FETCH_MESSAGE, message: data});
		});
	};
}

export function deleteMessage() {
	const request = axios.delete('/api/message/:id');

	return (dispatch)=>{
		request.then(({data})=>{
			// console.log('message data',data);
			dispatch({type: types.DELETE_MESSAGE, message: data});
		});
	};
}

export function createMessage() {
	const request = axios.post('/api/message/');

	return (dispatch)=>{
		request.then(({data})=>{
			// console.log('message data',data);
			dispatch({type: types.CREATE_MESSAGE, message: data});
		});
	};
}
