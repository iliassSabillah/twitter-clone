const Sequelize = require('sequelize');
const sequelizeConnection = require('../models/index');
const models = require('../models');

//Followers.sync will create the followers table
models.Followers.sync({force: true})

	.then(() => models.Followers.bulkCreate([
		{FollowedId: 1, FollowerId:  2},
		{FollowedId: 1, FollowerId:  4},
		{FollowedId: 2, FollowerId:  1},
		{FollowedId: 4, FollowerId:  1},

	]))
	.catch((err) => console.log(err));


//add the following followers to the database:
// 	.then(()=>models.Followers.beforeBulkCreate((follow)=>{
// 		follow.map(followId=>{
// 			if(followId.dataValues.FollowedId === followId.dataValues.FollowerId){
// 				throw new Error(`Can't follow yourself id: ${followId.dataValues.FollowerId}!`);
// 			}
// 		})
// 	}))
