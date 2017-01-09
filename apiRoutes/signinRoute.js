const express = require('express');
const signinRouter = express.Router();
const session = require('express-session');

const User = require('../models/user');

const signinUser = (req,res)=>{
	const userLogin = ((req, res) => {
		console.log('Session:', req.session);
		let userInfo = req.body;
		User.sync()
		.then(() => {
			return User.findOne({
				where: {
					username: userInfo.username
				}
			})
		})
		.then((user) => {
			if (user && user.password === userInfo.password) {
				console.log('Password is correct')
				return user
			} else if (!user) {
				console.log('Create New User')
				return User.create(userInfo)
			} else {
				return null
			}
		})
		.then((user) => {
			if (user) {
				req.session.username = user.username;
				req.session.save();
				console.log('Updated Session:', req.session)
				res.send(user)
			} else if {
				res.send('incorrect password')
			} else (!user){
				console.log('user does not exist and creating new one');
				return User.create(userInfo)
			}
		})
};

signinRouter.route('/signin')
	.post(signinUser);


module.exports = signinRouter;
