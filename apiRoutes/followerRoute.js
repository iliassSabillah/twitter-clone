const express = require('express');
const followerRouter  = express.Router();
const models = require('../models');



// GET follower by id
const getFollower = (req,res)=>{
	models.Followers.findOne({where:{followedId:req.params.id}})
		.then(user => {res.send(user)});
};

// GET all followers
const getFollowers = (req,res)=>{
	models.Followers.findAll({where:{followedId :req.params.id}})
		.then(users=>{
			console.log(users);
			res.send(users)
		})
};

// POST (create) a new follower
const createFollower = (req,res)=>{
	models.Followers.create({
		followedId: 1,
		followerId: req.body.followerId

	}).then(newFollower=> {
		res.send(newFollower)})
};


followerRouter.route('/')
	.post(createFollower)
	.get(getFollowers);

followerRouter.route('/:id')
	.get(getFollower);


module.exports = followerRouter;
