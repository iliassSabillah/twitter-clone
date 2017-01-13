const Sequelize = require('sequelize');
const sequelizeConnection = require('../models/index');
const models = require('../models');

//Tweet.sync will create the tweet table
models.Tweet.sync({force: true})
//add the following tweet to the database:
	.then(() => models.Tweet.bulkCreate([
			{tweet: 'bla bla',UserId: 1},
			{tweet: 'bla bla bla',UserId: 1}
		]))
	//the following tweet should NOT be added to your database:

	//(if your validations are setup correctly)
	// .then(() => models.Tweet.bulkCreate([
	// 	{tweet: ''}]
	// 	, {validate: true}))

	// if everything is correct, you should only have THREE tweet in your database
	.catch((err) => console.log(err));
