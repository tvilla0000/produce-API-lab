const Performer = require('../../models/performer');

module.exports = {
    index,
    create,
    show, 
    edit,
    del

}

function index(req, res) {
  Performer.find({})
    .then(function(performer) {
      res.status(200).json(performer)
  })
    .catch(function(performer) {
      req.status(500).json(performer)
  })
}

function create(req, res) {
  Performer.create(req.body)
    .then(function(performer) {
      res.status(201).json(performer)
  })
}

function show(req, res) {
  Performer.findById(req.params.id)
    .then(function(performer) {
      res.status(200).json(performer)
    })
}

function edit(req, res) {
  Performer.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(function(performer){
      res.status(200).json(performer)
  }) 
}

function del(req, res) {
  Performer.findByIdAndRemove(req.params.id)
    .then(function(performer) {
      res.status(200).json(performer)
    })
}