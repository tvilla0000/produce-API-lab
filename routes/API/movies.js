const express = require('express');
const apiMoviesCtrl = require('../../controllers/api/movies');
const router = express.Router();

router.get('/', apiMoviesCtrl.index);
router.post('/', apiMoviesCtrl.create);
router.get('/:id', apiMoviesCtrl.show);
router.delete('/:id', apiMoviesCtrl.del);
router.put('/:id', apiMoviesCtrl.edit);

module.exports = router;



