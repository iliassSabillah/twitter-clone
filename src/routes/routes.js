import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/App';
import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/aboutPage';
import UserContainer from '../components/user/UserContainer';
import TweetContainer from '../components/tweet/TweetContainer';
import Header from '../components/common/Header';
import profilenav from '../components/common/profilenav';
import profileBanner from '../components/common/profileBanner';
import loggedinhome from'../components/common/loggedinhome';
import {onUsersEnter,onTweetsEnter, onFollowersEnter} from './route_data';


export default (
			<Route path="/" component={App}>
				<IndexRoute  component={HomePage}/>
				<Route path="profile" component={loggedinhome} onEnter={onUsersEnter}>
					<IndexRoute component={UserContainer}  onEnter={onFollowersEnter}/>
					<Route path="tweet" component={TweetContainer} onEnter={onTweetsEnter} />
				</Route>
				<Route path ="about" component={AboutPage}/>
			</Route>
);
//
