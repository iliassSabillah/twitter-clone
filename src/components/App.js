//This component handles the App component
import React, {PropTypes} from 'react';
import Header from './common/Header';
import ProfileNav from './common/profilenav';
import LoggedInHome from './common/loggedinhome';
import LogIn from './login';
import $ from 'jquery';


class App extends React.Component{
	render(){
		return (
			<div className ="container-fluid">
				<Header/>
				<ProfileNav />
				{/* <LogIn /> {/*This is just here to get funtionality working. Will be integrated into our Twitter Home Page*/}

				{this.props.children}
			</div>
		);
	}
}

App.propTypes = {
	children : PropTypes.object.isRequired
};


export default App;
