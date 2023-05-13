import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as tasksAPI from '../../utilities/tasks-api';
import './TaskDetailsPage.css';

export default function TaskDetailsPage({ task, user, handleDelete }) {
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  function handleChange(evt) {
    setComment(evt.target.value);
  }
  return (
    <>
      <div className="details-page-container">
        <div className="details-card-container">
          <h2 className="bold-header">{task.name.toUpperCase()}</h2>
          <p>
            <span className="bold-header">Date:</span> {task.date.slice(0, 10)}
          </p>
          <p>
            <span className="bold-header">Time:</span> {task.date.slice(11, 19)}
          </p>
          <p className="details-text">
            <span className="bold-header">Details: </span> {task.details}
          </p>
          <div className="edit-delete-container">
            <Link to={'/' + task._id + '/edit'}>{task.user == user._id && <button className="edit-btn">EDIT</button>}</Link>
            <p>
              {task.user == user._id && (
                <button className="delete-btn" onClick={() => handleDelete(task._id)}>
                  X
                </button>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
