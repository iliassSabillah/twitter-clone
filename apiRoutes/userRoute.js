const express = require('express');
const userRouter  = express.Router();
const models = require('../models');


// GET specific user by id
const getUser = (req,res)=>{
	models.User.findOne({where:{username:req.params.username},
		include: [
			{model: models.Tweet},{model:models.Message}
		]
			})
		.then(user=>{res.send(user)});
};

// GET specific User Followers by id
const getUserFollowers = (req,res)=>{
	models.User.findOne({where:{id:req.params.id},
		include: [
			{model: models.Followers},{model:models.Tweet}
		]
	})
		.then(user=>{res.send(user)});
};

const getUsers = (req,res)=>{
	models.User.findAll({include:[{model: models.Tweet},{model:models.Message}]})
		.then(users=>{res.send(users)});
};


// POST (create) a new user
const postUser = (req,res)=>{
	models.User.create({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		profilePhoto: req.body.profilePhoto,
		headerPhoto: req.body.headerPhoto,
		location: req.body.location,
		website: req.body.website,
		birthday: req.body.birthday,
		bio : req.body.bio

	}).then(newUser=> res.send(newUser))
};

const destroyUser = (req,res)=> (
	models.User.destroy({
		where: {username: req.params.username}
	})
)

userRouter.route('/')
	.get(getUsers)
	.post(postUser);

userRouter.route('/:username')
	.get(getUser)
	.get(getUserFollowers)
	.delete(destroyUser);


module.exports = userRouter;
