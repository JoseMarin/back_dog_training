'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Relation, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });

      Post.belongsTo(models.Relation, {
        foreignKey: 'commentsId',
        as: 'comments',
        onDelete: 'CASCADE'
      });
    };
  };
  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    userName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    date: DataTypes.DATE,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};