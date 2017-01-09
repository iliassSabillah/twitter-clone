import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/App';
import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/aboutPage';
import UserContainer from '../components/user/UserContainer';

import {onUsersEnter} from './route_data';


export default (
	<Route path="/" component={App}>
			<IndexRoute  component ={HomePage}/>
			<Route path="profile" component={UserContainer} onEnter={onUsersEnter} />
		<Route path ="about" component={AboutPage}/>
	</Route>
);
