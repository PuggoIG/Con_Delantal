'use strict';
module.exports = (sequelize, DataTypes) => {
  var Addresses = sequelize.define('Addresses', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    address_1: DataTypes.STRING,
    address_2: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING
  }, {});
  Addresses.associate = function(models) {
    Addresses.belongsTo(models.Restaurants,{foreignKey:"restaurantId"})
    };
    return Addresses;
  };