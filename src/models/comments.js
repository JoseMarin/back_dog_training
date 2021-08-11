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
      Comments.belongsTo(models.Relation, {
        foreignKey: 'userId',
        me: 'name',
        onDelete: 'CASCADE'
      },
      {name: user.name}
      );

      Comments.belongsTo(models.Relation, {
        foreignKey: 'postId',
        onDelete: 'CASCADE'
      });
    }
  };
  Comments.init({
    content: DataTypes.STRING,
    userName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};