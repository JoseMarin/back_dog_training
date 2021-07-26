'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Common_wall extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Common_wall.hasMany(models.Post, {
        foreignKey: 'postId',
        onDelete: 'CASCADE'
      });
    }
  };
  Common_wall.init({
    name: DataTypes.STRING,
    postId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Common_wall',
  });
  return Common_wall;
};