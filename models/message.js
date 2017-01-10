"use strict";

module.exports = (sequelize, DataTypes)=> {
	const Message = sequelize.define("Message", {
			tweet: DataTypes.STRING,
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
