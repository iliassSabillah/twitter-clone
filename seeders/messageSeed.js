const Sequelize = require('sequelize');
const sequelizeConnection = require('../models/index');
const models = require('../models');

//Message.sync will create the messages table
models.Message.sync({force: true})
//add the following message to the database:
	.then(() => models.Message.bulkCreate([
		{message: 'Access Code produces high quality web developers through a 10-month curriculum developed and taught by leading experts from companies such as Artsy, Google, FlyLabs and Betaworks.'},
		{include:[models.User]}

	]))
	//the following messages should NOT be added to your database:
	//(if your validations are setup correctly)
	// .then(() => Message.bulkCreate([
	// 	{message: ''},
	// 	{message: ['message1', 'message2']},
	// ], {validate: true}))

	// if everything is correct, you should only have THREE messages in your database
	.catch((err) => console.log(err));
