var express = require('express');
var router = express.Router();

var main = require('../controllers/main');

router.get('/', main.angular);

module.exports = router;
