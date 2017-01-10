const express = require('express');
const followerRouter  = express.Router();
const models = require('../models');



// GET follower by id
const getFollower = (req,res)=>{
	models.Followers.findOne({where:{id:req.params.id}})
		.then(user => {res.send(user)});
};

// GET all followers
const getFollowers = (req,res)=>{
	models.User.findAll()
		.then(users=>{res.send(users)});
};

// POST (create) a new follower
const createFollower = (req,res)=>{
	models.Followers.create({
		followedId: 1,
		followerId: req.params.followerId

	}).then(newFollower=> {
		debugger;
		res.send(newFollower)})
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


followerRouter.route('/')
	.get(getFollowers)
	.post(createFollower);

followerRouter.route('/:id')
	.get(getFollower);


module.exports = followerRouter;
