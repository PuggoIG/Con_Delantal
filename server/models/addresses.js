'use strict';
module.exports = (sequelize, DataTypes) => {
  const Addresses = sequelize.define('Addresses', {
    address_1: DataTypes.STRING,
    address_2: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    long: DataTypes.FLOAT,
    references: DataTypes.TEXT
  }, {});
  Addresses.associate = function(models) {
    // associations can be defined here
  };
  return Addresses;
};