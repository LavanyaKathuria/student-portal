import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();

  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

  const emailExists = existingUsers.some(user => user.email === email);

  if (emailExists) {
    alert('Account already exists. Please login.');
    navigate('/');
  } else {

    const newUser = { name, email, password };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    localStorage.setItem('username', name);
    localStorage.setItem('loggedIn', 'true');

    navigate('/login');
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-950 dark:to-blue-900 transition-colors duration-500">
      <div className="bg-white dark:bg-blue-950 p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900 dark:text-white">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-blue-900 dark:text-white">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-blue-700 bg-white dark:bg-blue-900 text-blue-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-blue-900 dark:text-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-blue-700 bg-white dark:bg-blue-900 text-blue-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-blue-900 dark:text-white">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-blue-700 bg-white dark:bg-blue-900 text-blue-900 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm mt-4 text-center text-blue-900 dark:text-blue-300">
          Already have an account?{' '}
          <span
            className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
