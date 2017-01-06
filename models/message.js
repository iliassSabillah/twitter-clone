"use strict";

module.exports = (sequelize, DataTypes)=> {
	const Message = sequelize.define("Message", {
			school: DataTypes.STRING,
			startYear: DataTypes.INTEGER,
			endYear: DataTypes.INTEGER,
			current: DataTypes.BOOLEAN,
			gpa: DataTypes.STRING,
			achievements: DataTypes.STRING

		}
		, {
			classMethods: {
				associate: (models)=> {
					Message.belongsTo(models.User)
				}
			}
		}
	);

	return Message;
};
