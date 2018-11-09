'use strict';
module.exports = (sequelize, DataTypes) => {
  var Restaurants = sequelize.define('Restaurants', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    name: {type:DataTypes.STRING,
      allowNull:false},
    description: DataTypes.TEXT,
    photos:  DataTypes.ARRAY(DataTypes.STRING),
    products: DataTypes.ARRAY(DataTypes.JSON),
    /* userId: {
      type:Sequelize.UUID,
      references:{
        model:'Users',
        key:"id"
      }
    } */
  }, {});
  Restaurants.associate = function(models) {
    Restaurants.belongsTo(models.Users,{foreignKey:"userId",as:"user"})
      Restaurants.hasMany(models.Orders,{foreignKey:"restaurantId"})
      Restaurants.hasOne(models.Addresses,{foreignKey:"restaurantId",as:"address"}) 
    
    };
    return Restaurants;
  };