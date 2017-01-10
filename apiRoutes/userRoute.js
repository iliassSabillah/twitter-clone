const express = require('express');
const userRouter  = express.Router();
const models = require('../models');


// GET specific user by id
const getUser = (req,res)=>{
	models.User.findOne({where:{id:req.params.id}})
		.then(user=>{res.send(user)});
};

// POST (create) a new user
const postUser = (req,res)=>{
	models.User.create({
		username: req.body.username,
		location: req.body.address,
		email: req.body.email,
		password: req.body.password,

	}).then(newUser=> { res.send(newUser)})
};

//// create + get content for followers table
// sequelize.sync({ force: true }).success(function() {
// 	User.create({ name: 'jon' }).success(function(jon) {
// 		User.create({ name: 'bob' }).success(function(bob) {
// 			jon.addFollower(bob).success(function() {
// 				jon.getFollowers().success(function(followers) {
// 					console.log(followers.map(function(person) {return person.name}));
// 				});
// 			});
// 		});
// 	});
// });


userRouter.route('/')
	// .get(getUsers)
	.post(postUser);

userRouter.route('/:id')
	.get(getUser);


module.exports = userRouter;
