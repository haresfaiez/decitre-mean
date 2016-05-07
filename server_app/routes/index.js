var passport = require('passport');
var express  = require('express');
var router   = express.Router();

var main           = require('../controllers/main');
var category       = require('../controllers/category');
var book           = require('../controllers/book');
var search         = require('../controllers/search');
var authentication = require('../controllers/authentication');

router.get('/', main.angular);

router.get('/category/books', category.all);
router.get('/book/:bookid',   book.details);
router.get('/search/:token',  search.byname);

router.post('/register', authentication.register);
router.post('/login',    passport.authenticate('local'), authentication.login);

router.get ('/logout',  authentication.logout);

module.exports = router;
