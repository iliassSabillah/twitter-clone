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

		this.handleFollow = this.handleFollow.bind(this);
	}
	// handleInput(e,inputField){
	// 	// const user = this.state.user;
	// 	user[inputField] = e.target.value;
	// 	this.userRow();
	// 	this.props.actions.createUser(user);
	// }
	handleFollow(e) {
		// let userId = 1;
		let follower = {followerId : e.target.value};
		let followers = Object.assign({}, this.props.user, follower);
		this.props.actions.createFollower(followers);
	}
	render(){
		// console.log('state inside user container:',this.props.user.followers);
		return (
				<User follow={this.handleFollow} user={this.props} handleSubmit={this.handleSubmit} userRow={this.userRow}/>
		);
	}
}

UserContainer.propTypes = {
	actions : PropTypes.object.isRequired,
	user: PropTypes.object,
	fetchUser: PropTypes.func,
	createFollower: PropTypes.func
};

const mapStateToProps= (state,ownProps)=>({user: state.user});

const mapDispatchToProps=(dispatch)=>({
		actions: bindActionCreators({ userActions , followerActions}, dispatch)
	});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
// this.state = {
// 	user: {
// 		id: '',
// 		username: '',
// 		email: '',
// 		password:'',
// 		followers: {
// 			followedId : 1,
// 			followerId : ''
// 		}
// 	}
// };
