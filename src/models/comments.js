'use strict';

const user = require("./user");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comments.belongsTo(models.User, {
        foreignKey: 'userId',
        me: 'name'
      },
      {name: user.name}
      );
      Comments.belongsTo(models.Post, {
        foreignKey: 'postId'
      });
    }
  };
  Comments.init({
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};