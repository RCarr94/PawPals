import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as TasksAPI from '../../utilities/tasks-api';

export default function TaskForm({ selectedCategory }) {
    const [invalidForm, setValidForm] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        date: new Date(),
        detils: '',
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
            const taskData = await tasksAPI.createTask(formData);
            setFormData(formData);
            navigate('/');
        } catch (err) {
            setError('Task creation failed - try again');
        }
    }

    function handleSelectedCategoryBorder() {
        switch (selectedCategory) {
            case "Dog Tasks":
                return "solid 2px black";
            case "Cat Tasks":
                return "solid 2px black";
            case "House Tasks":
                return "solid 2px black";
        }
    }

    return (
        <>
          <div className='selected-task-container'>
            <h1>{SelectedCategory}</h1>
          </div>

          <div className='task-form-container'>
            <form className='task-form' onSubmit={handleSubmitForm}>
                <label>Name of Task</label>
                <input type='text' value={formData.name} name='name' onChange={handleChangeForm} required />
                <label>Date</label>
                <input type='date' value={formData.date} name='date' onChange={handleChangeForm} required />
                <label>Details</label>
                <input type='text' value={formData.details} name='details' onChange={handleChangeForm} required />
                <button type='submit' disabled={invalidForm}>CREATE TASK</button>
            </form>
          </div>
        </>
    );
}