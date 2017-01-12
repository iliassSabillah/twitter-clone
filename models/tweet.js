"use strict";

module.exports = (sequelize, DataTypes)=> {
	const Tweet = sequelize.define("Tweet", {
			tweet: {
				type:DataTypes.STRING,
				allowNull: false
			}
		}
		,{
			classMethods: {
				associate: (models)=> {
					Tweet.belongsTo(models.User)
						// , {
						// foreignKey: {
						// 	name: 'UserId', allowNull: false
						// }
					// })
				}
			}
		}
	);

	return Tweet;
};
