'use strict';
module.exports = (sequelize, DataTypes) => {
  var locationsTrips = sequelize.define('locationsTrips', {
    locationId: DataTypes.INTEGER,
    tripId: DataTypes.INTEGER
  }, {});
  locationsTrips.associate = function(models) {
    // associations can be defined here
  };
  return locationsTrips;
};