var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig');
var isLoggedIn = require('../middleware/isLoggedIn');
var router = express.Router();



router.get('/', isLoggedIn, function (req, res) {
  res.render('profile');
});

module.exports = router;
