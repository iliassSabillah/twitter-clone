//This component handles the User section
import React, {PropTypes, Component}   from 'react';


class User extends Component{
	render() {
		console.log('inside user', this.props);
		return (
			<div id="user" className="contact-form col-md-3">
				<h2>User</h2>
				<div className="row">
					<div className="col-md-12">
						<form role="form" onSubmit={this.props.handleSubmit}>
							<div className="form-group">
								<label htmlFor="username">Username</label>
								<input className="form-control" ref="username" name="username" placeholder="Your username" onChange={(e)=>{this.props.handleChange(e,"username");}} defaultValue={this.props.user[0].username} readOnly/>
							</div>
							<div className="form-group">
								<label htmlFor="bio">Bio</label>
								<input className="form-control" ref="bio" name="bio" placeholder="Your bio" onChange={(e)=>{this.props.handleChange(e,"bio");}} defaultValue={this.props.user[0].bio}/>
							</div>
							<div className="form-group">
								<label htmlFor="location">Location</label>
								<input className="form-control" ref="location" name="location" placeholder="Your location" defaultValue={this.props.user[0].location}/>
							</div>
							<div className="form-group">
								<label htmlFor="birth_date">Birth date</label>
								<input className="form-control" ref="birthday" name="birthday" placeholder="Your birth date" defaultValue={this.props.user[0].birthday}/>
							</div>
							<div className="form-group">
								<label htmlFor="website">Website</label>
								<input className="form-control" ref="website" name="website" placeholder="Your website" defaultValue={this.props.user[0].website}/>
							</div>
							<input type="button"className="btn" value="Cancel"/>
							<button type="submit" style={{width:100+'px'}} className="btn btn-primary">Save Changes</button>
						</form>
					</div>
				</div>
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
	follow: PropTypes.func,
	username :PropTypes.string,
	bio :PropTypes.string,
	location :PropTypes.string,
	website :PropTypes.string,
	birthday :PropTypes.string,
};

export default User;
