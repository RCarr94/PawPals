import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import TaskDetailsPage from '../TaskDetailsPage/TaskDetailsPage';
import CreateTaskPage from '../CreateTaskPage/CreateTaskPage';
import FindTasksPage from '../FindTasksPage/FindTasksPage';
import MyTasks from '../MyTasks/MyTasks';
import EditTaskForm from '../../components/EditTaskForm/EditTaskForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [task, setTask] = useState({});
  const [showAllTasks, setShowAllTasks] = useState([]);
  const navigate = useNavigate();
  function handleDelete(id) {
    console.log('Delete clicked!');
    setShowAllTasks(showAllTasks.filter((task) => task.id !== id));
    axios.delete(`/api/tasks/${id}`);
    console.log('Delete finished!');
    navigate('/');
  }
  return (
    <>
      <main className="App">
        {user ? (
          <>
            <NavBar user={user} setUser={setUser} />

            <Routes>
              <Route
                path="/"
                element={<FindTasksPage showAllTasks={showAllTasks} setShowAllTasks={setShowAllTasks} setTask={setTask} user={user} />}
              />
              <Route
                path="/mytasks"
                element={<MyTasks user={user} task={task} setTask={setTask} showAllTasks={showAllTasks} setShowAllTasks={setShowAllTasks} />}
              />

              <Route
                path="/:id"
                element={
                  <TaskDetailsPage
                    handleDelete={handleDelete}
                    task={task}
                    user={user}
                    showAllTasks={showAllTasks}
                    setShowAllTasks={setShowAllTasks}
                  />
                }
              />

              <Route path="/createtask" element={<CreateTaskPage />} />
              <Route path="/:id/edit" element={<EditTaskForm task={task} />} />
            </Routes>
          </>
        ) : (
          <>
            <AuthPage setUser={setUser} />
          </>
        )}
      </main>
    </>
  );
}
