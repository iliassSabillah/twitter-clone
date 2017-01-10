"use strict";

module.exports = (sequelize, DataTypes)=> {
	const Followers = sequelize.define('Followers', {
			FollowedId: {
				type:DataTypes.INTEGER,
				allowNull: false,
				unique: 'uniqueFollower'
			},
			FollowerId: {
				type:DataTypes.INTEGER,
				allowNull: false,
				unique: 'uniqueFollower'
			}
		}
	);

	return Followers;
};
