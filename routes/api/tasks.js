const express = require('express');
const router = express
const tasksCtrl = require('../../controllers/api/tasks');


router.post('/create', tasksCtrl.createTask);
router.put('/:id', tasksCtrl.updateTask);
router.delete('/:id', tasksCtrl.deleteTask);

// GET all tasks
router.get('/', tasksCtrl.getAllTasks);