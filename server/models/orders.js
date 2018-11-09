'use strict';
module.exports = (sequelize, DataTypes) => {
  var Orders = sequelize.define('Orders', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    status: {
      type:DataTypes.STRING},
    total_price:  DataTypes.DECIMAL(10,2),
    userId: DataTypes.STRING,
    restaurantId: DataTypes.STRING
  }, {});
  Orders.associate = function(models) {
    Orders.belongsTo(models.Users,{foreignKey:"userId"})
    Orders.belongsTo(models.Restaurants,{foreignKey:"restaurantId"})
  };
  return Orders;
};