const Task = require('../../models/task');

// // get all tasks that are created
async function getAllTasks(req, res) {
  const tasks = await Task.find({});
  if (!tasks) {
    res.send('controller tasks error');
  } else {
    res.json(tasks);
  }
}
async function createTask(req, res) {
  req.body.user = req.user._id;
  const task = await Task.create(req.body);
  res.json(task);
}

async function updateTask(req, res) {
  let updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json(updatedTask);
}

async function getDetails(req, res) {
  let id = req.params.id;
  Task.findById(id, function (err, task) {
    res.json(task);
  });
}

async function getAllForUser(req, res) {
  const tasksCreated = await Task.find({ user: req.user._id }).sort();
  const alltasks = await Task.find({});

  alltasks.forEach((task) => {});
  res.json([tasksCreated]);
}

// delete task
async function deleteTask(req, res) {
  await Task.findByIdAndDelete(req.params.id);
}

module.exports = {
  getAllForUser,
  getAllTasks,
  createTask,
  getDetails,
  delete: deleteTask,
  update: updateTask,
};
