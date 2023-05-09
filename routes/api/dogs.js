const express = require('express');
const router = express.Router();
const dogsCtrl = require('../../controllers/api/dogs');

// GET /api/dogs
router.get('/', dogsCtrl.index);
//GET /api/dogs/:id
router.get('/:id', dogsCtrl.show);

module.exports = router;