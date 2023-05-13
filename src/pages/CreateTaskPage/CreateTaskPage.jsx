import { useState, useEffect } from 'react';
import React from 'react';
import './CreateTaskPage.css';
import CategoryButtons from '../../components/CategoryButtons/CategoryButtons';
import TaskForm from '../../components/TaskForm/TaskForm';

export default function CreateTaskPage() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <>
      <main className="create-task-page">
        <div className="create-task-page-header">
          <h1>Create a Task</h1>
        </div>
        <CategoryButtons selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        {selectedCategory === '' ? (
          <h2 className="task-msg">Pick a category for your task!</h2>
        ) : (
          <TaskForm selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        )}
      </main>
    </>
  );
}
