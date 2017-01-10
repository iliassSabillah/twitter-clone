"use strict";

module.exports = (sequelize, DataTypes)=> {
	const Tweet = sequelize.define("Tweet", {
			tweet: DataTypes.STRING
		}
		, {
			classMethods: {
				associate: (models)=> {
					Tweet.belongsTo(models.User, {
						onDelete: 'CASCADE',
						foreignKey: {
							name: 'UserId', allowNull: false
						}
					})
				}
			}
		}
	);

	return Tweet;
};
