//Follower actions creator
import * as types from './actionTypes';
import axios from 'axios';


export function fetchFollowers(){
	const request = axios.get('/api/followers/1');
	return (dispatch)=>{
		request.then(({data})=>{
			console.log('follower data',data);
			dispatch({type: types.FETCH_FOLLOWER, follower: data});
		});
	};
}

