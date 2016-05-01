var express = require('express');
var router = express.Router();

var main     = require('../controllers/main');
var category = require('../controllers/category');

router.get('/', main.angular);
router.get('/category/books', category.books);

module.exports = router;
