import React from 'react';
import '../../styles/styles.css';
import $ from 'jquery';

const SignIn = React.createClass({
	updateUsername(e){
		this.setState({username: e.target.value})
	},
	updatePassword(e){
		this.setState({password: e.target.value})
	},
	submitLoginInfo(){
		store.dispatch(postUser())
	},
	render(){
		return (
			<div>
				<div className="modal fade" id="login-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="loginmodal-container">
							<h1>Login to Your Account</h1><br/>
							<form>
								<input onChange={this.updateUsername} type="text" name="user" placeholder="Username"/>
								<input onChange={this.updatePassword} type="password" name="pass" placeholder="Password"/>
								<input onClick={this.submitLoginInfo} type="submit" name="login" className="login loginmodal-submit" value="Login"/>
							</form>

							<div className="login-help">
								<a href="#">Register</a> - <a href="#">Forgot Password</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
});



export default SignUp;
