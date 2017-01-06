"use strict";

module.exports = (sequelize, DataTypes)=> {
	const User = sequelize.define("User", {
		username: DataTypes.STRING,
		password: DataTypes.STRING,
		email: DataTypes.STRING,
		location: DataTypes.STRING,
		profilePhoto: DataTypes.STRING,
		headerPhoto: DataTypes.STRING,
		website: DataTypes.STRING,
		birthday: DataTypes.DATE,
		bio: DataTypes.TEXT

	}, {
		classMethods: {
			associate: (models)=> {
				User.hasMany(models.Tweet);
				User.hasMany(models.Message);
			}
		}
	}
	);

	return User;
};

