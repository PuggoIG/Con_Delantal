'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comments = sequelize.define('Comments', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    comments_user: DataTypes.TEXT
  }, {});
  Comments.associate = function(models) {
  /*   Comments.belongsTo(models.Orders,{foreignKey:"bookingId"}) */
  };
  return Comments;
};