import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav className='NavBar-container'>
          <div className='logo'>
            <Link to='/' className='links'>PawPals🐾</Link>
          </div>
          <div className='link-container'>
            <Link to='/createtask' className='links'>Create Task</Link>
            <Link to='/mytasks' className='links'>My Tasks</Link>
            {user && (
                <span className='links'> Hello, {user.name}</span>
            )}
            <Link to='' className='links' onClick={handleLogOut}>logout</Link>
          </div>
        </nav>
    );
}