"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Relation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Relation.hasMany(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });
      Relation.hasMany(models.Post, {
        foreignKey: 'postId',
        onDelete: 'CASCADE'
      });
      Relation.hasMany(models.Comments, {
        foreignKey: 'commentsId',
        as: 'comments',
        onDelete: 'CASCADE'
      });
    }
  }
  Relation.init(
    {
      userId: DataTypes.INTEGER,
      postId: DataTypes.INTEGER,
      commentsId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Relation",
    }
  );
  return Relation;
};
