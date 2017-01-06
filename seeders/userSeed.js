const Sequelize = require('sequelize');
const sequelizeConnection = require('../models/index');
const models = require('../models');

//User.sync will create the users table
models.User.sync({force: true})
//add the following user to the database:
	.then(() => models.User.bulkCreate([
		{username: 'iliass', password:  'pass',email: 'iliass@gmail.com',profilePhoto:'',headerPhoto:'',website:'hello.com',birthday:'20-12-2012',location:'NY',bio:'hello'}

	]))
	//the following users should NOT be added to your database:
	//(if your validations are setup correctly)
	// .then(() => User.bulkCreate([
	// 	{name: ''},
	// 	{name: ['user1', 'user2']},
	// ], {validate: true}))

	// if everything is correct, you should only have THREE users in your database
	.catch((err) => console.log(err));
