import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EditTaskForm.css';
import * as tasksAPI from '../../utilities/tasks-api';

export default function EditTaskForm({ selectedCategory, task }) {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: task.name,
    date: new Date(),
    details: task.details,
    category: selectedCategory,
  });

  useEffect(function () {
    setFormData.category = selectedCategory;
  }, []);

  const navigate = useNavigate();

  function handleChangeForm(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmitForm(evt) {
    evt.preventDefault();
    try {
      await tasksAPI.updateTask(formData, task._id);
      setFormData(formData);
      navigate('/');
    } catch (err) {
      setError('Create Task Failed - Try Again');
    }
  }

  return (
    <>
      <div className="edit-header">
        <h1>Edit Task </h1>
        <h2>
          <span className="edit-header-name">{task.name}</span>
        </h2>
      </div>
      <div className="edit-form-container">
        <form onSubmit={handleSubmitForm} className="task-form">
          <label>Task</label>
          <input type="text" value={formData.name} name="name" required onChange={handleChangeForm} />
          <label>Due Date:</label>
          <input type="datetime-local" value={formData.date} name="date" required onChange={handleChangeForm} />
          <label>Details</label>
          <input type="text" value={formData.details} name="details" required onChange={handleChangeForm} className="details-input" />
          <button type="submit">Update Task</button>
        </form>
      </div>
    </>
  );
}
