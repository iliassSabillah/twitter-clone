import React from 'react';
import session from 'express-session';
import $ from 'jquery';


const LogIn = React.createClass({
	getInitialState: function () {
		return {username: null, password: null}
	},
	onFormSubmit: function (event) {
		event.preventDefault()

		$.ajax({
			url: '/api/login',
			type: 'POST',
			data: this.state
		})
		.done((response) => {
			console.log('response:', response)
			if (typeof response === "string"){
				alert(response)
			}
		})
	},
	updateUsername: function (event) {
		this.setState({username: event.target.value})
	},
	updatePassword: function (event) {
		this.setState({password: event.target.value})
	},
	render: function () {
		return (
		<div>
			<form onSubmit={this.onFormSubmit}>
        <h3>ENTER LOGIN</h3>{/*TEMP FOR TESTING*/}
				<input type="text" placeholder="Username" onChange={this.updateUsername}></input>
				<input type="text" placeholder="Password" onChange={this.updatePassword}></input>
				<input type="submit" value="Submit"></input>
			</form>
		</div>
		)
	}
})


module.exports = LogIn;
