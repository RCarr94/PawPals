const express = require('express');
const router = express.Router();
const tasksCtrl = require('../../controllers/api/tasks');


router.post('/create', tasksCtrl.createTask);
router.get('/user', tasksCtrl.getAllForUser);
router.get('/:id', tasksCtrl.getDetails);
router.put('/:id', tasksCtrl.update);

// GET /api/tasks
router.get('/', tasksCtrl.getAllTasks);

// // DELETE /api/tasks/:id
router.delete('/:id', tasksCtrl.delete);


module.exports = router;
