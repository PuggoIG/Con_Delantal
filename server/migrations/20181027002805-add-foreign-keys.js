'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      "Restaurant",
      "userId",{
        type:Sequelize.UUID,
        references:{
          model:'Users',
          key:"id"
        }
      }

    )

    queryInterface.addColumn(
      "Addresses",
      "restaurantId",{
        type:Sequelize.UUID,
        references:{
          model:'Restaurant',
          key:"id"
        }
      }

    )


   
    queryInterface.addColumn(
      "Comments",
      "OrderId",{
        type:Sequelize.UUID,
        references:{
          model:'Orders',
          key:"id"
        }
      }

    )


    queryInterface.addColumn(
      "Orders",
      "restaurantId",{
        type:Sequelize.UUID,
        references:{
          model:'Restaurant',
          key:"id"
        }
      }

    )


    queryInterface.addColumn(
      "Orders",
      "userId",{
        type:Sequelize.UUID,
        references:{
          model:'Users',
          key:"id"
        }
      }

    )

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
