//This component handles the Home template
import React, {PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import $ from 'jquery';
import User from './User';
import onUsersEnter from '../../routes/route_data';


class UserContainer extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			user: {
				id: '',
				username: '',
				email: '',
				password:''
			}
		};
		this.userRow= this.userRow.bind(this);



	}

	// handleInput(e,inputField){
	// 	// const user = this.state.user;
	// 	user[inputField] = e.target.value;
	// 	this.userRow();
	// 	this.props.actions.createUser(user);
	// }
	handleSubmit(e) {
		e.preventDefault();
		let username = this.refs.username;
		let email = this.refs.email;
		this.props.actions.createUser(user);

	}
	handleChange(e,inputField) {
		const user = this.state.user;
		user[inputField] = e.target.value;
	}
	addLink(){
		$('.link').toggleClass('hidden');
	}
	userRow(user,index){return (<li key={user+index}>{user}</li>);}
	render(){
		console.log('state inside user container:',this.props.user);
		return (
				<User handleChange={this.handleChange} user={this.props.user} handleSubmit={this.handleSubmit} userRow={this.userRow}/>
		);
	}
}

UserContainer.propTypes = {
	actions : PropTypes.object.isRequired,
	user: React.PropTypes.object,
	fetchUsers: PropTypes.func
};

const mapStateToProps= (state,ownProps)=>({user: state.user});

const mapDispatchToProps=(dispatch)=>({
		actions: bindActionCreators(userActions, dispatch)
	});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

