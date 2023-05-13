import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as tasksAPI from '../../utilities/tasks-api';
import './MyTasks.css';

export default function MyTasks({ user, setTask }) {
  const [userCreated, setUserCreated] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      let userTasks = await tasksAPI.getAllForUser();
      setUserCreated(userTasks[0]);
    }
    fetchUserData();
  }, []);

  return (
    <>
      <div className="user-tasks-page">
        <div className="user-tasks-page-header">
          <h1>My Created Tasks</h1>
        </div>
        <div className="lists-container">
          <div className="created-list-container">
            <div className="created-tasks-list">
              {userCreated.map((task) => {
                console.log(task);
                return (
                  <div className="created-task-card" key={task._id}>
                    <Link to={'/' + task._id} className="generate-task-links" onClick={() => setTask(task)}>
                      <h2 className="bold">{task.name.toUpperCase()}</h2>
                    </Link>
                    <div className="card-content">
                      <div className="property">
                        <div className="bold-key">Due:</div>
                        <div className="value">{task.date.slice(0, 10)}</div>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="property-details">
                        <div className="bold-key">
                          <Link to={'/' + task._id} className="generate-task-links" onClick={() => setTask(task)}>
                            More Info
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
