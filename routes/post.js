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
console.log(newPost)
// instance of post with a save method
// ran into a problem with the postman chrome extension where I needed to add Content-Type    application/json in order to get my json to display propperly
  
  post.save(function(err, results){
    if(err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });

});

// if err and res.send are all the same so far
// what is the params object all about? built in?
// http://expressjs.com/4x/api.html#req.params - this page explains all the built in objects in express

// PUT post
router.put('/post/:id', function(req, res, next) {

  Post.findByIdAndUpdate(req.params.id, req.body, function(err, results){
    if(err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });

});


// DELETE post
router.delete('/post/:id', function(req, res, next) {

  Post.findByIdAndRemove(req.params.id, function(err, results){
    if(err) {
      res.send(err);
    } else {
      res.send(results);

    }
  });

});

module.exports = router
