const express = require('express');
const messageRouter  = express.Router();
const models = require('../models');

const fetchMessage = ((req, res) => {
		Message.findAll({
			text: req.body.text
		})
		.then((data) => {
			res.json(data)
		})
		.catch((err) => {
			console.log(err)
		})
	});

const createMessage = ((req, res) => {
		Message.findOrCreate({
			text: req.body.text
		})
		.then((data) => {
			res.json(data)
		})
		.catch((err) => {
			console.log(err)
		})
	});

  const deleteMessage = ((req, res) => {
  		Message.findById(req.params.id)
  		.then(function(data) {
  			data.destroy()
  		})
  		.then((data) => {
  			console.log('Deleted!')
  			res.send(data)
  		})
  		.catch((err) => {
  			res.send(err)
  		})
  	})

  messageRouter.route('/')
  	.get(fetchMessage)
  	.post(createMessage);

  messageRouter.route('/:id')
  	.get(deleteMessage);


  module.exports = messageRouter;
