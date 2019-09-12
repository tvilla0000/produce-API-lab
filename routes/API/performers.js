const express = require('express');
const router = express.Router();
const apiPerformersCtrl = require('../../controllers/api/performers');

router.get('/', apiPerformersCtrl.index);
router.post('/', apiPerformersCtrl.create);
router.get('/:id', apiPerformersCtrl.show);
router.delete('/:id', apiPerformersCtrl.del);
router.put('/:id', apiPerformersCtrl.edit);

module.exports = router;

