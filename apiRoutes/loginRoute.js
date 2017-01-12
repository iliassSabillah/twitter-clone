const express = require('express');
const loginRouter = express.Router();
const session = require('express-session');

const User = require('../models/user');

const userLogin = (req,res)=> {
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
				console.log('Password is correct');
				return {success: true, user: user}
			} else if (!user) {
				console.log('Create New User');
				return {success: true, user: User.create(userInfo)}
			} else {
				return {success: false}
			}
		})
		.then((user) => {
			if (user) {
				req.session.username = user.username;
				req.session.save();
				console.log('Updated Session:', req.session);
				res.send(user)
			}
			else if (!user.password === userInfo.password) {
				res.send('incorrect password')
			}
			else if (!user) {
				console.log('user does not exist and creating new one');
				return User.create(userInfo)
			}
		})
	};

loginRouter.route('/login')
	.get(userLogin);


module.exports = loginRouter;
