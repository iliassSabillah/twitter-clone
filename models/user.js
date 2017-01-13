const bcrypt = require('bcryptjs');
"use strict";

module.exports = (sequelize, DataTypes)=> {
	const User = sequelize.define("User", {
			username: {
				type: DataTypes.STRING,
				validate: {
					len: [1, 50],
					unique: true,
					notNull: true
				}
			},
			email: {
				type: DataTypes.STRING,
				validate: {
					len: [1, 50],
					idEmail: true,
					unique: true,
					notNull: true
				}
			},
			password: {
				type: DataTypes.STRING,
				validate: {
					len: [1, 20],
					notNull: true
				}
			},
			profilePhoto: {
				type: DataTypes.STRING,
				validate: {
					len: [1, 50]
				}
			},
			headerPhoto: {
				type: DataTypes.STRING,
				validate: {
					len: [1, 50]
				}
			},
			location: {
				type: DataTypes.STRING,
				validate: {
					len: [1, 20]
				}
			},
			website: {
				type: DataTypes.STRING,
				validate: {
					len: [1, 50],
					isUrl: true
				}
			},
			birthday: {
				type: DataTypes.STRING,
				validate: {
					len: [1, 20],
					isDate: true
				}
			},
			bio: {
				type: DataTypes.TEXT,
				validate: {
					len: [1,160]
				}
			},

	},
		{
		hooks: {
			afterValidate : user => user.password = bcrypt.hashSync(user.password,8)
		}
	},
		{
		classMethods: {
			associate: (models)=> {
				User.hasMany(models.Tweet);
				User.hasMany(models.Message);
				User.belongsToMany(User, { as: 'Followers', foreignKey: 'FollowedId', through: models.Followers});
				User.belongsToMany(User, { as: 'Followeds', foreignKey: {name: 'FollowerId', unique: 'uniqueFollower'
				}, through: models.Followers});
			}
		}
	}
	);

	return User;
};

