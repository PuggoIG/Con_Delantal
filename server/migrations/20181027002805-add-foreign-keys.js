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
          model:'Restaurants',
          key:"id"
        }
      }

    )


   
    queryInterface.addColumn(
      "Comments",
      "orderId",{
        type:Sequelize.UUID,
        references:{
          model:'Orders',
          key:"id"
        }
      }
    )


          
   queryInterface.addColumn(
        "Ordes",
        "restaurantId",{
          type:Sequelize.UUID,
          references:{
            model:'Restaurants',
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
