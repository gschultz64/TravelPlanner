require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('./config/passportConfig');
var isLoggedIn = require('./middleware/isLoggedIn');
var rowdy = require('rowdy-logger');

var app = express();

rowdy.begin(app);

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

// This needs to come before you app.use passport
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

// Setup flash messages
app.use(flash());

// This must come after the session setup
app.use(passport.initialize());
app.use(passport.session());

// Attach the current user to the response for all routes
// Also, attach the flash messages
app.use(function (req, res, next) {
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get('/', function (req, res) {
  res.render('index');
});


app.use('/auth', require('./controllers/auth'));
app.use('/trips', require('./controllers/trips'));
app.use('/profile', require('./controllers/profile'));

var server = app.listen(process.env.PORT || 3000, function() {
  rowdy.print();
});

module.exports = server;
