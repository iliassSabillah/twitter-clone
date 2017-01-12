//Tweet actions creator

import * as types from './actionTypes';
import axios from 'axios';


export function createTweet(tweet){
	return {type: types.CREATE_TWEET,tweet};
}

export function fetchTweet(props) {
	console.log('tweet this',this);
	const request = axios.get('/api/tweets/');

	return (dispatch)=>{
		request.then(({data})=>{
			console.log('tweet data',data);
			dispatch({type: types.FETCH_TWEET, tweet: data});
		});
	};
}
