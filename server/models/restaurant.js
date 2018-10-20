'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    products: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.ENUM,
    photos: DataTypes.ARRAY,
    rate: DataTypes.DECIMAL
  }, {});
  Restaurant.associate = function(models) {
    // associations can be defined here
  };
  return Restaurant;
};