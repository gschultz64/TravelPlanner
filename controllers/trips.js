var express = require('express');
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');
var router = express.Router();

// GET - /trips - display all saved trips
router.get('/', function (req, res) {
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

// GET - /trips/:name - display a specific trip and its locations
router.get('/:name', function(req, res) {
  db.trip.find({
    where: {name: req.params.name},
    // include: [db.location]
  }).then(function(trip) {
    if (!trip) throw Error();
    res.render('trips/show', {trip: trip});
  }).catch(function(error) {
    console.log(error);
    res.status(400).render('404');
  });
});

// GET - /trips/:name/edit - display form to update a trip's details and/or add locations
router.get('/:name/edit', function (req, res) {
  db.trip.find({
    where: {name: req.params.name}
  }).then(function(data) {
  res.render('trips/edit', {trip: data});
  });
});

//PUT - /trips/:name - update a trip (locations and/or trip details)
router.put('/:name/', function(req,res) {
  console.log("put /:name/ " + JSON.stringify(req.body));
  db.trip.update({
    name: req.params.name,
    startDate: req.params.startDate,
    endDate: req.params.endDate
  }, {
    where: {name: req.params.name}
  }).then(function(data) {
    res.sendStatus(200);
  });
});


// POST - /trips - add a new trip
router.post('/', function(req,res) {
  db.trip.findOrCreate({
    where: {
      name: req.body.name,
      startDate: req.body.startDate,
      endDate: req.body.endDate
    }
  }).spread(function(trip) {
    res.redirect('/trips');
  }).catch(function (error) {
    console.log(error);
    res.status(400).render('404');
  });
});

// 


//DELETE - /trips/:name - delete a trip 
router.delete('/:name', function(req, res) {
  db.trip.destroy({
    where: {name: req.params.name}
  }).then(function(data) {
    console.log(data);
    res.sendStatus(200);
  });
});

//DELETE - /trips/:name - delete a location from a trip



module.exports = router;