'use strict';
module.exports = (sequelize, DataTypes) => {
  var Restaurant = sequelize.define('Restaurant', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue:Sequelize.UUIDV4 
    },
    products: DataTypes.ARRAY,
    description: DataTypes.TEXT,
    status: {type:DataTypes.ENUM,values:["Open","CLosed"]},
    photos: DataTypes.ARRAY(DataTypes.STRING),
    rate: DataTypes.DECIMAL(10,2)
  }, {});

  Restaurant.associate = function(models) {
  Restaurants.belongsTo(models.Users,{foreignKey:"userId",as:"user"})
    Restaurants.hasMany(models.Orders,{foreignKey:"restaurantId"})
    Restaurants.hasOne(models.Addresses,{foreignKey:"restaurantId",as:"address"}) 
  
  };
  return Restaurant;
};