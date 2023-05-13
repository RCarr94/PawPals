import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TaskForm.css';
import * as tasksAPI from '../../utilities/tasks-api';

export default function TaskForm({ selectedCategory }) {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    date: new Date(),
    details: '',
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
      let task = await tasksAPI.createAddTask(formData);
      setFormData(formData);
      navigate('/');
    } catch (err) {
      setError('Create Task Failed - Try Again');
    }
  }

  return (
    <>
      <div className="select-tasks-header">
        <h1>{selectedCategory}</h1>
      </div>

      <div className="task-form-container">
        <form onSubmit={handleSubmitForm} className="task-form">
          <label>Task</label>
          <input type="text" value={formData.name} name="name" required onChange={handleChangeForm} />
          <label>Date</label>
          <input type="datetime-local" value={formData.date} name="date" required onChange={handleChangeForm} className="date-and-time-input" />
          <label>Details</label>
          <input
            type="text"
            value={formData.details}
            name="details"
            required
            onChange={handleChangeForm}
            placeholder="Task details..."
            className="details-input"
          />
          <button type="submit">Create Task</button>
        </form>
      </div>
    </>
  );
}
