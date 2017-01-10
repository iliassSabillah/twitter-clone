//Follower actions creator
import * as types from './actionTypes';
import axios from 'axios';


export function createFollower(){
	const request = axios.post('./api/followers/');
	return (dispatch)=>{
		request.then(({data})=>{
			dispatch({type: types.CREATE_FOLLOWER, user: data});
		});
	};
}
