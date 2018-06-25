'use strict';
module.exports = (sequelize, DataTypes) => {
  var location = sequelize.define('location', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    placeId: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT
  }, {});
  location.associate = function(models) {
    // associations can be defined here
  };
  return location;
};