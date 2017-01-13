//This component handles the Home template
import React, {Component, PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import * as followerActions from '../../actions/followerActions';
const debug  = require('debug')('follower');
// import $ from 'jquery';
import User from './User';
// import onUsersEnter from '../../routes/route_data';


class UserContainer extends Component{
	constructor(props, context){
		super(props, context);
		console.log('user container props',props);
		console.log(props.follower);
		this.handleFollow = this.handleFollow.bind(this);
	}
	handleChange(e,inputField) {
		const user = this.props.user;
		user[inputField] = e.target.value;

		this.props.actions.updateUser(user);

	}
	handleSubmit(e) {
		e.preventDefault();
		let username;
		// this.refs.username ? username = this.refs.username.value : username;
		// console.log('username',username)
		// let bio = this.refs.bio;
		// let location = this.refs.location;
		// let birthday = this.refs.birthday;
		// let website = this.refs.website;
		// let userInfo = {username,bio, location,birthday, website };
		// console.log(userInfo);
		console.log('bio value',e);
		// this.props.actions.updateUser(userInfo);

	}
	handleFollow(e) {
		// let userId = 1;
		let follower = {followerId : e.target.value};
		let followers = Object.assign({}, this.props.user, follower);
		this.props.actions.fetchFollowers(followers);
	}
	render(){
		return (
				<User follow={this.handleFollow} user={this.props.user} handleChange={this.handleChange} handleSubmit={this.handleSubmit} userRow={this.userRow}/>
		);
	}
}

UserContainer.propTypes = {
	actions : PropTypes.object.isRequired,
	user: PropTypes.array,
	fetchUser: PropTypes.func,
	fetchFollowers: PropTypes.func,
	follower: PropTypes.object,
	updateUser: PropTypes.func
};

const mapStateToProps= (state,ownProps)=>({user: state.user});

const mapDispatchToProps=(dispatch)=>({
		actions: bindActionCreators({ userActions , followerActions}, dispatch)
	});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

