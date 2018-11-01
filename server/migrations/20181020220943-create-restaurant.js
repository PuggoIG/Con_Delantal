'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        primaryKey: true,//te amo bb
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4 
      },
      products: {
        type: Sequelize.ARRAY(Sequelize.JSON)//array de strings como en las photos de airbnb sequelize array.json
      },
      description: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.ENUM,
        values:["Open","CLosed"]
      },
      photos: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      }, //va dentro del JSON de los productos */
      rate: {
        type: Sequelize.DECIMAL(5,1)
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