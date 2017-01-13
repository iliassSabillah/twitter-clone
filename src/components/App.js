//This component handles the App component
import React, {PropTypes} from 'react';
import Header from './common/Header';
import ProfileNav from './common/profilenav';
import ProfileBanner from './common/profileBanner';
import LoggedInHome from './common/loggedinhome';
import LogIn from './login';
import $ from 'jquery';


class App extends React.Component{
	// submitLoginInfo(e){
	// 	e.preventDefault();
	// 	try {
	// 	$.ajax({
	// 		url: '/signin',
	// 		method: 'POST',
	// 		data: this.state
	// 	}).done(data=>{console.log('received user data',data)})
	// 	}catch (e) {
	// 		console.log(e.message);
	// 	}
	// 	return false;
    //
	// }
	render(){
		return (
			<div className ="container-fluid">
				<Header/>
				{/* <LoggedInHome /> */}
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
