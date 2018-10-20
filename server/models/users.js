'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.ENUM,
    birth_date: DataTypes.DATE,
    paypal_id: DataTypes.STRING,
    type: DataTypes.ENUM
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};