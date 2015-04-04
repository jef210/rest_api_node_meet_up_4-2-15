var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node Blog' });
});

router.use('/api/', require('./post.js'));

module.exports = router;


// http://expressjs.com/guide/routing.html