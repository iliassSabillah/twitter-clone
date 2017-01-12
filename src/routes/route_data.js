import configureStore from '../store/configureStore';
import {fetchTweet} from '../actions/tweetActions';
import {fetchUser} from '../actions/userActions';
import {fetchFollowers} from '../actions/followerActions';
import {fetchMessage} from '../actions/messageActions';


let store = configureStore();

export  function onUsersEnter() {
	store.dispatch(fetchUser());
}


export function onFollowersEnter(){
	store.dispatch(fetchFollowers());
}

export  function onTweetsEnter() {
	store.dispatch(fetchTweet());
}



// export  function onMessageEnter() {
// 	store.dispatch(fetchMessage());
// }
