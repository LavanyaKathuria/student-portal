import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import Users from './pages/users';
import Home from './pages/home';
import Navbar from './pages/navbar';
import { useEffect, useState } from 'react';

function AppRoutes() {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
  const location = useLocation();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
  }, [theme]);

  const showNavbar = isLoggedIn && !['/', '/signup'].includes(location.pathname);

  return (
    <div className={`transition duration-500 min-h-screen font-["Plus Jakarta Sans"] ${theme === 'dark' ? 'bg-blue-950 text-white' : 'bg-white text-blue-900'}`}>
      {showNavbar && <Navbar theme={theme} setTheme={setTheme} />}
      <Routes>
        <Route path="/" element={!isLoggedIn ? <Login /> : <Navigate to="/home" />} />
        <Route path="/signup" element={!isLoggedIn ? <Signup /> : <Navigate to="/home" />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/users" element={isLoggedIn ? <Users /> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
