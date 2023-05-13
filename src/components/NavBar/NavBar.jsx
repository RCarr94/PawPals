import React from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar-container">
      <div className="logo">
        <Link to="/" className="links logo">
          PawPals
        </Link>
      </div>
      <div className="links-container">
        <Link to="/createtask" className="links">
          Create Task
        </Link>

        <Link to="/mytasks" className="links">
          My Tasks
        </Link>

        {user && <span className="links welcome-user">Hello, {user.name}</span>}

        <Link to="" onClick={handleLogOut} className="links">
          <span>logout</span>
        </Link>
      </div>
    </nav>
  );
}
