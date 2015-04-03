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

// GET post
router.get('/post/:id', function(req, res, next) {

  Post.findById(req.params.id, function(err, results) {
    if(err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });

});

// instance vs constructor tells which case to use 

// POST post
router.post('/posts', function(req, res, next) {

  var newPost = req.body;
  var post = new Post(newPost);

// instance of post with a save method
  
  post.save(function(err, result){
    if(err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });

});
