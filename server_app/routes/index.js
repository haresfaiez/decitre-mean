var express = require('express');
var router  = express.Router();

var main     = require('../controllers/main');
var category = require('../controllers/category');
var book     = require('../controllers/book');

router.get('/', main.angular);

router.get('/category/books', category.all);
router.get('/book/:bookid',   book.details);

module.exports = router;
