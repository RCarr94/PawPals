const Task = require('../../models/task');

// get all tasks
async function getAllTasks(req, res) {
  const tasks = await Task.find({});
  if (!tasks) {
    res.send("controller task api error");
  } else {
    res.json(tasks);
  }
}

// create task
async function createTask(req, res) {
    req.body.user = req.user._id;
    const task = await Task.create(req.body);
    res.json(task);
}

// update task
async function updateTask(req, res) {
    let updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedTask);
}

// delete task
async function deleteTask(req, res) {
    await Event.findByIdAndDelete(req.params.id);
}
// task details --- later

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};
