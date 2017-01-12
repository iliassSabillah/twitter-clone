const Sequelize = require('sequelize');
const sequelizeConnection = require('../models/index');
const models = require('../models');

//User.sync will create the users table
models.User.sync({force: true})
//add the following user to the database:
	.then(() => models.User.bulkCreate([
		{username: 'iliass', password:  'pass',email: 'iliass@gmail.com',profilePhoto:'',headerPhoto:'',website:'iliass.com',birthday:'20-12-2012',location:'NY',bio:'what\'sup'},
		{username: 'test0', password:  'test0',email: 'test0@gmail.com',profilePhoto:'',headerPhoto:'',website:'test0.com',birthday:'20-12-2010',location:'NY',bio:'test0'},
		{username: 'test1', password:  'test1',email: 'test1@gmail.com',profilePhoto:'',headerPhoto:'',website:'test1.com',birthday:'20-12-2010',location:'NY',bio:'test1'},
		{username: 'test2', password:  'test2',email: 'test2@gmail.com',profilePhoto:'',headerPhoto:'',website:'test2.com',birthday:'20-12-2010',location:'NY',bio:'test2'},
		{username: 'test3', password:  'test3',email: 'test3@gmail.com',profilePhoto:'',headerPhoto:'',website:'test3.com',birthday:'20-12-2010',location:'NY',bio:'test3'},
		{username: 'test4', password:  'test4',email: 'test4@gmail.com',profilePhoto:'',headerPhoto:'',website:'test4.com',birthday:'20-12-2010',location:'NY',bio:'test4'},


	]))
	//the following users should NOT be added to your database:
	//(if your validations are setup correctly)
	// .then(() => User.bulkCreate([
	// 	{username: ''},
	// 	{username: ['user1', 'user2']},
	// ], {validate: true}))
	// if everything is correct, you should only have THREE users in your database
	.catch((err) => console.log(err));
