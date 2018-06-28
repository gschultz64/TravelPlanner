var express = require('express');
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');
var router = express.Router();

// GET - /trips - display all saved trips
router.get('/', isLoggedIn, function (req, res) {
  db.trip.findAll().then(function (trips) {
    res.render('trips/index', { trips: trips });
  }).catch(function (error) {
    console.log(error);
    res.status(400).render('404');
  });
});

// GET - /trips/new - display form to create a new trip
router.get('/new', function (req, res) {
  db.user.findAll().then(function (users) {
    res.render('trips/new', { users: users });
  }).catch(function (error) {
    res.status(400).render('404');
  });
});

// GET - /trips/:name - display a specific trip
router.get('/:name', function(req, res) {
  db.trip.find({
    where: {name: req.params.name},
    // include: []
  }).then(function(trip) {
    if (!trip) throw Error();
    res.render('trips/show', {trip: trip});
  }).catch(function(error) {
    console.log(error);
    res.status(400).render('404');
  });
});

// POST - /trips - add a new trip
router.post('/', function(req,res) {
  db.trip.create({
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate
  }).catch(function (error) {
    console.log(error);
    res.status(400).render('404');
  });
});


// GET - /trips/update - display form to update a trip's details and/or add locations


//POST - /trips - update a trip (locations and/or trip details)



module.exports = router;