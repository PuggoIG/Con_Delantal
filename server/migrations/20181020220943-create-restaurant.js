'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      products: {
        type: Sequelize.STRING//array de strings como en las photos de airbnb
      },
      description: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.ENUM
      },
      photos: {
        type: Sequelize.ARRAY
      },
      rate: {
        type: Sequelize.DECIMAL
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Restaurants');
  }
};