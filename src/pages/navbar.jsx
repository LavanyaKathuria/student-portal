import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaUserCircle, FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar({ theme, setTheme }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData && userData.email) {
      const namePart = userData.email.split('@')[0];
      setUserName(namePart.charAt(0).toUpperCase() + namePart.slice(1));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-blue-950 shadow-md sticky top-0 z-50">
      {/* Left side navigation */}
      <div className="flex items-center gap-6 text-blue-800 dark:text-white text-sm font-medium">
        <div className="text-xl font-bold">
          <Link to="/dashboard">Student Portal</Link>
        </div>
        <Link to="/home" className="hover:text-blue-500">Home</Link>
        <Link to="/users" className="hover:text-blue-500">Users</Link>
        <Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link>
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-4 text-sm text-blue-800 dark:text-blue-100">
        {/* Theme toggle */}
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-800" />}
        </button>

        {/* Profile info */}
        {userName && (
          <div className="flex items-center gap-1">
            <FaUserCircle className="text-xl" />
            <span className="hidden sm:inline">{userName}</span>
          </div>
        )}

        {/* Logout */}
        <button onClick={handleLogout} className="hover:text-red-500 dark:hover:text-red-400">Logout</button>
      </div>
    </nav>
  );
}
