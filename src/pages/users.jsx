import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch users');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10 text-blue-600 dark:text-blue-300">Loading users...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-blue-950 dark:via-blue-900 dark:to-slate-900">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-800 dark:text-white">Meet Our Users</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white dark:bg-slate-800 text-blue-900 dark:text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl dark:hover:bg-slate-700 transition duration-300 border border-blue-200 dark:border-slate-700"
          >
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p className="text-sm">📧 <span className="text-blue-700 dark:text-blue-300">{user.email}</span></p>
            <p className="text-sm">📱 {user.phone}</p>
            <p className="text-sm">🌐 {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
