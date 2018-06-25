'use strict';
module.exports = (sequelize, DataTypes) => {
  var trip = sequelize.define('trip', {
    name: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  trip.associate = function(models) {
    // associations can be defined here
  };
  return trip;
};