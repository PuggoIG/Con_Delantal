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
      types:DataTypes.ENUM,
      values:["On the way","Received","In the kitchen"]},
    total_price: DataTypes.DECIMAL(10,2),
    paypal_confirmation: DataTypes.STRING
  }, {});
  Orders.associate = function(models) {
/*     Orders.belongsTo(models.Users,{foreignKey:"userId"})
    Orders.belongsTo(models.Houses,{foreignKey:"houseId"}) */
  };
  return Orders;
};