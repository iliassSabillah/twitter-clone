const express = require('express');
const loginRouter = express.Router();
const session = require('express-session');

const db = require('../models/index.js');
const User = db.User;

const userLogin = (req, res) => {
	console.log('Session:', req.session);
	let userInfo = req.body;
	//User.sync()
	//.then(() => {
	console.log("request body: ", userInfo)
	User.findOne({
		where: {
			username: userInfo.username
		}
	})
		.then((user) => {
			console.log("query result: ", user)
			if (user && user.password === userInfo.password) {
				req.session.username = user.username;
				req.session.save();
				console.log('Updated Session:', req.session)
				res.send(user);
			} else if (!user) {
				console.log('User does not exists')
				res.send('user does not exist')
			} else {
				res.send('incorrect password')
			}
		})
}




loginRouter.route('/')
	.post(userLogin);


module.exports = loginRouter;
