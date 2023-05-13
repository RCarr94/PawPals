import FindTaskButtons from '../../components/FindTaskButtons/FindTaskButtons';
import GenerateTasks from '../../components/GenerateTasks/GenerateTasks';
import * as tasksAPI from '../../utilities/tasks-api';
import { useEffect, useState } from 'react';
import './FindTasksPage.css';

export default function FindTasksPage({ user, setTask, showAllTasks, setShowAllTasks }) {
  const [selectedTask, setSelectedTask] = useState('');

  useEffect(function () {
    async function getTasks() {
      let tasks = await tasksAPI.getAllTasks();
      setShowAllTasks(tasks);
    }
    getTasks();
  }, []);

  useEffect(
    function () {
      async function filterTasks() {
        if (selectedTask != '') {
          let tasks = await tasksAPI.getAllTasks();
          const filteredTasks = tasks.filter((task) => {
            return task.category === selectedTask;
          });
          setShowAllTasks(filteredTasks);
        }
      }
      filterTasks();
    },
    [selectedTask]
  );

  return (
    <>
      <div className="find-tasks-page">
        <div className="find-tasks-page-header">
          <h1>All Tasks</h1>
        </div>
        <FindTaskButtons selectedTask={selectedTask} setSelectedTask={setSelectedTask} />
        <GenerateTasks
          setTask={setTask}
          showAllTasks={showAllTasks}
          setShowAllTasks={setShowAllTasks}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          user={user}
        />
      </div>
    </>
  );
}
