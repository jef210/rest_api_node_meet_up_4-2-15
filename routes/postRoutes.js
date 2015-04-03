var Router = require('express').Router
var router = new Router
var Post = require('../models/post')

router.get('/posts', function(req, res, next) {

  Post.find({}, function (err, results) {
    if(err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });

});