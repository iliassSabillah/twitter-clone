"use strict";

module.exports = (sequelize, DataTypes)=> {
	const Tweet = sequelize.define("Tweet", {
			tweet: {
				type:DataTypes.STRING,
				validate: {notNull:true}
			}
		}
		,{
			classMethods: {
				associate: (models)=> {
					Tweet.belongsTo(models.User)
				}
			}
		}
	);

	return Tweet;
};
