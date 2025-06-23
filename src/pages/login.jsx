import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (location.state) {
      setEmail(location.state.email || '');
      setPassword(location.state.password || '');
    }
  }, [location.state]);

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email);

    if (!user) {
      alert('Account not found. Please sign up.');
      return;
    }

    if (user.password !== password) {
      alert('Incorrect password.');
      return;
    }

    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-950 dark:to-blue-900">
      <div className="bg-white dark:bg-blue-950 p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900 dark:text-white">Login</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-blue-900 dark:text-white">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
              className="w-full p-3 rounded-lg border bg-white dark:bg-blue-900 text-blue-900 dark:text-white" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-blue-900 dark:text-white">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
              className="w-full p-3 rounded-lg border bg-white dark:bg-blue-900 text-blue-900 dark:text-white" />
          </div>
          <button type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">
            Login
          </button>
        </form>
        <p className="text-sm mt-4 text-center text-blue-900 dark:text-blue-300">
          Don’t have an account?{' '}
          <span onClick={() => navigate('/signup')} className="text-blue-600 hover:underline cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
