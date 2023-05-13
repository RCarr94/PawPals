
import { useState, useEffect } from 'react';
import * as tasksAPI from '../../utilities/tasks-api';
import './GenerateTasks.css';
import { Link } from 'react-router-dom';

export default function GenerateTasks({ showAllTasks, setShowAllTasks, user, setTask }) {
  const [error, setError] = useState('');

  async function handleDetails(id) {
    try {
      let detail = await tasksAPI.getDetails(id);
    } catch (err) {
      setError('Get Detail Task failed - Try Again');
    }
  }

  return (
    <>
      <div className="find-tasks-list">
        <div>
          {showAllTasks.map((task, idx) => {
            return (
              <div className="find-task-card" key={idx}>
                <Link
                  onClick={() => {
                    handleDetails(task._id);
                    setTask(task);
                  }}
                  to={'/' + task._id}
                  className="generate-tasks-links"
                >
                  <h2 className="bold-header">{task.name.toUpperCase()}</h2>
                </Link>
                <p>
                  <span className="bold-header">Due: </span>
                  {task.date.slice(0, 10)}
                </p>
                <p>
                  <span className="bold-header">Details: </span>
                  {task.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
