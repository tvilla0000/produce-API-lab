const Movie = require('../../models/movie');

module.exports = {
    index,
    create,
    show,
    edit,
    editComment,
    del

}

function index(req, res) {
  Movie.find({}).populate("cast")
    .then(function(movie) {
      res.status(200).json(movies);
  })
    .catch(function(err) {
      req.status(500).json(err);
  })
};

function create(req, res) {
  Movie.create(req.body).then(function(movie) {
    res.status(201).json(movie);
  });
}

function show(req, res) {
  Movie.findById(req.params.id).populate("cast")
    .then(function(movie) {
      res.status(200).json(movie);
  })
}

function edit(req, res) {
  Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(function(movie) {
      res.status(200).json(movie)
  })
}

function editComment(req, res) {
  Movie.findById(req.params.id) 
  
}

function del(req, res) {
  Movie.findByIdAndRemove(req.params.id)
    .then(function(movie) {
      res.tatus(200).json(movie);
  })
}