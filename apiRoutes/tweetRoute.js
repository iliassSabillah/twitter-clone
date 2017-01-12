const express = require('express');
const tweetRouter  = express.Router();
const models = require('../models');


// GET all tweets information fully populated
const getAllTweet = (req, res)=>{
	models.Tweet.findAll({})
		.then((tweet)=> {
			res.send(tweet)
		})
};

// GET specific tweet by id
const getTweet = (req,res)=>{
	models.Tweet.findById(req.params.id)
		.then(tweet=>{res.send(tweet)});
};

// POST (create) a new tweet
const postTweet = (req,res)=>{
	models.Tweet.create({
		tweet: req.body.tweet
	}).then(newTweet=> { res.send(newTweet)})
};

// GET specific tweet by id
const deleteTweet = (req,res)=>{
	models.Tweet.findOne({where:{id:req.params.id}})
		.then(tweet=>{tweet.destroy()});
};

tweetRouter.route('/')
	.get(getAllTweet)
	.post(postTweet);

tweetRouter.route('/:id')
	.get(getTweet);


module.exports = tweetRouter;
