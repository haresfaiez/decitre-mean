var express = require('express');
var router  = express.Router();

var main     = require('../controllers/main');
var category = require('../controllers/category');
var book     = require('../controllers/book');
var search   = require('../controllers/search');
var authentication = require('../controllers/authentication');

router.get('/', main.angular);


router.get('/category/books', category.all);
router.get('/book/:bookid',   book.details);
router.get('/search/:token',  search.byname);


var passport      = require('passport');


router.get('/register', function(req, res) {
  res.render('register', { });
});

router.post('/register', authentication.register);

router.get('/login', function(req, res) {
  res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
