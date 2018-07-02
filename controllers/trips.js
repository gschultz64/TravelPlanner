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

// GET - /trips/:id - display a specific trip and its locations
router.get('/:id', function (req, res) {
  db.trip.find({
    where: { id: req.params.id },
    include: [db.location]
  }).then(function (trip) {
    if (!trip) throw Error();
    res.render('trips/show', { trip: trip });
  }).catch(function (error) {
    console.log(error);
    res.status(400).render('404');
  });
});

router.get('/:id/locations', function (req, res) {
  db.trip.find({
    where: { id: req.params.id },
    include: [db.location]
  }).then(function (trip) {
    res.json(JSON.stringify(trip.locations))
  }).catch(function (error) {
    console.log("/:id/locations error " + error)
    res.status(error).render('404')
  })
})

// GET - /trips/:id/edit - display form to update a trip's details and/or add locations
router.get('/:id/edit', function (req, res) {
  db.trip.find({
    where: { id: req.params.id }
  }).then(function (data) {
    res.render('trips/edit', { trip: data });
  });
});

//PUT - /trips/:id - update the details of a  trip (name, dates)
router.put('/:id/', function (req, res) {
  db.trip.update({
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate
  }, {
      where: { id: req.params.id }
    }).then(function (data) {
      res.sendStatus(200);
    });
});


// POST - /trips - add a new trip
router.post('/', function (req, res) {
  db.trip.findOrCreate({
    where: {
      name: req.body.name,
      startDate: req.body.startDate,
      endDate: req.body.endDate
    }
  }).spread(function (trip, created) {
    res.redirect('/trips/' + trip.id);
  }).catch(function (error) {
    console.log(error);
    res.status(400).render('404');
  });
});

// POST - /trips/:id - add locations to a trip
router.post('/:id', function (req, res) {
  db.trip.findById(req.params.id).then(function (trip) {
    db.location.findOrCreate({
      where: {
        placeId: req.body.placeId,
        name: req.body.placeName,
        address: req.body.address
      }
    }).spread(function (location, created) {
      trip.addLocation(location).then(function (location) {
        console.log(location + 'added to', trip);
        res.redirect('/trips/' + trip.id);
      });
    }); 
  }).catch(function(error){
    console.log(error);
    res.status(400).render('404');
  });
});


//DELETE - /trips/:id - delete a trip 
router.delete('/:id', function (req, res) {
  db.trip.destroy({
    where: { id: req.params.id }
  }).then(function (data) {
    console.log(data);
    res.sendStatus(200);
  });
});

//DELETE - /trips/:id - delete a location from a trip



module.exports = router;