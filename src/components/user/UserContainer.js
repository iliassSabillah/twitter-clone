//This component handles the Home template
import React, {PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import * as followerActions from '../../actions/followerActions';
const debug  =require('debug')('FOLLOWER');
// import $ from 'jquery';
import User from './User';
// import onUsersEnter from '../../routes/route_data';


class UserContainer extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			user: {
				id: '',
				username: '',
				email: '',
				password:'',
				followers: {
					followedId : 1,
					followerId : ''
				}
			}
		};
		this.userRow= this.userRow.bind(this);
		this.follow = this.follow.bind(this);
	}

	// handleInput(e,inputField){
	// 	// const user = this.state.user;
	// 	user[inputField] = e.target.value;
	// 	this.userRow();
	// 	this.props.actions.createUser(user);
	// }
	handleFollow(e) {
		let userId = 1;
		console.log(e.target.value);
		debug
		let follower = {followerId : e.target.value};
		let followers = Object.assign({}, this.state.user.followers, follower);
		this.props.actions.createFollower(followers);
		debug
	}
	userRow(user,index){return (<li key={user+index}>{user}</li>);}
	render(){
		console.log('state inside user container:',this.props.user);
		return (
				<User follow={this.handleFollow} user={this.props.user} handleSubmit={this.handleSubmit} userRow={this.userRow}/>
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
