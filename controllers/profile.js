var express = require('express');
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');
var router = express.Router();

router.get('/', isLoggedIn, function (req, res) {
  db.trip.findAll().then(function(trips) {
    res.render('profile', {trips: trips});
  });
});

module.exports = router;
