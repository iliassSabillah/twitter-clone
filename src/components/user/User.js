//This component handles the User section
import React, {PropTypes, Component}   from 'react';


class User extends React.Component{
	render() {
		console.log('inside user', this.props);
		return (
			<div id="user" className="contact-form col-md-3">
				<h2>User</h2>
				<label>Username</label>
				{/*<input ref ="username" defaultValue={this.props.user.username} onChange={this.props.handleChange}/>*/}
				{/*<label>email</label>*/}
				{/*<input ref ="email" defaultValue={this.props.user.email} onChange={this.props.handleChange}/>*/}
				{/*<input type="submit" value="Submit"/>*/}
			</div>
		);
	}
	}

User.propTypes = {
	userRow: PropTypes.func,
	handleChange : PropTypes.func,
	user: React.PropTypes.object,
	handleSubmit: PropTypes.func
};

export default User;
