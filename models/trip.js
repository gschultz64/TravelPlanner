'use strict';
module.exports = (sequelize, DataTypes) => {
  var trip = sequelize.define('trip', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  trip.associate = function(models) {
    // associations can be defined here
    models.trip.belongsToMany(models.user);
    models.trip.belongsToMany(models.location, { through: "locationsTrips" });
  };
  return trip;
};