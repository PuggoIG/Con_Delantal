'use strict';
module.exports = (sequelize, DataTypes) => {
  var Restaurants = sequelize.define('Restaurants', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    products: DataTypes.ARRAY,
    description: DataTypes.TEXT,
    status: {type:DataTypes.ENUM,values:["Open","CLosed"]},
    photos: DataTypes.ARRAY(DataTypes.STRING),
    rate: DataTypes.DECIMAL(10,2)
  }, {});

  Restaurants.associate = function(models) {
  Restaurants.belongsTo(models.Users,{foreignKey:"userId",as:"user"})
    Restaurants.hasMany(models.Orders,{foreignKey:"restaurantId"})
    Restaurants.hasOne(models.Addresses,{foreignKey:"restaurantId",as:"address"}) 
  
  };
  return Restaurants;
};