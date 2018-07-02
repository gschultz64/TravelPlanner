'use strict';
module.exports = (sequelize, DataTypes) => {
  var location = sequelize.define('location', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    placeId: DataTypes.STRING
  }, {});
  location.associate = function(models) {
    // associations can be defined here
    models.location.belongsToMany(models.trip, { through: "locationsTrips" });
  };
  return location;
};