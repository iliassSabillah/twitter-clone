//This component handles the User section
import React, {PropTypes, Component}   from 'react';


class User extends React.Component{
	render() {
		console.log('inside user', this.props);
		return (
			<div id="user" className="contact-form col-md-3">
				<h2>User</h2>
				<form onSubmit={this.props.handleSubmit}>
					<input type="text" defaultValue={this.props.username} placeholder="Name"/>
					<input type="text" defaultValue={this.props.bio} placeholder="Bio"/>
					<input type="text" defaultValue={this.props.location} placeholder="Location"/>
					<input type="text" defaultValue={this.props.website} placeholder="Website"/>
					<input type="text" defaultValue={this.props.birthday} placeholder="Birthday"/>
					<input type="button"className="btn" value="Cancel"/>
					<input onClick={this.props.saveInfo} className="btn btn-primary" type="button" value='Save Changes'/>

					<label>Follow me! --> </label>
					<input onClick={this.props.follow} className="btn btn-primary" type="button" value='2'/>
				</form>
			</div>
		);
	}
	}

User.propTypes = {
	userRow: PropTypes.func,
	handleChange : PropTypes.func,
	saveInfo: PropTypes.func,
	user: React.PropTypes.object,
	handleSubmit: PropTypes.func,
	follow: PropTypes.func
};

export default User;
