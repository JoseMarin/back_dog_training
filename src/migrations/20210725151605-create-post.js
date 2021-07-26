'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING,
        required: false
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: "CASCADE",//Para borrar en todas las tablas o sumar y asi mantener nuestra integridad
        onUpdate: "CASCADE"
      },
      commont_wallId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Common_walls',
          key: 'id'
        },
        onUpdate: "CASCADE",//Para borrar en todas las tablas o sumar y asi mantener nuestra integridad
        onUpdate: "CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  }
};