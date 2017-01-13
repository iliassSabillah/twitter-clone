const express = require('express');
const messageRouter  = express.Router();
const models = require('../models');

// const fetchMessage = ((req, res) => {
// 		models.Message.findAll({
// 			text: req.body.text
// 		})
// 		.then((data) => {
// 			res.json(data)
// 		})
// 		.catch((err) => {
// 			console.log(err)
// 		})
// 	});
const getMessages = ((req, res)=> {
	models.Message.findAll({})
		.then((data) => {
		res.json(data)
	})
		.catch((err) => {
			console.log(err)
		})
})

const createMessage = ((req, res) => {
		models.Message.findOrCreate({
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
  		models.Message.findById(req.params.id)
  		.then((data)=> {
  			data.destroy()
  		})
  		.then((data) => {
  			console.log('Deleted!');
  			res.send(data)
  		})
  		.catch((err) => {
  			res.send(err)
  		})
  	})

  messageRouter.route('/')
	.get(getMessages)
	.post(createMessage);
  	// .get(fetchMessage)

  messageRouter.route('/:id')
  	.delete(deleteMessage);


  module.exports = messageRouter;
