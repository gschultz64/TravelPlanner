var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig');
var isLoggedIn = require('../middleware/isLoggedIn');
var router = express.Router();

// GET - /trips - display all saved trips
router.get('/', isLoggedIn, function (req, res) {
  db.trip.findAll({
    // include: [db.user]
  }).then(function (trips) {
    res.render('trips/index', { trips: trips });
  }).catch(function (error) {
    res.status(400).render('404');
  });
});

// GET - /trips/new - display form to create a new trip
router.get('/new', isLoggedIn, function(req, res) {
  db.user.findAll().then(function(users) {
    res.render('trips/new', {users: users});
  }).catch(function(error) {
    res.status(400).render('404');
  });
});

// POST - /trips - add a new trip


module.exports = router;