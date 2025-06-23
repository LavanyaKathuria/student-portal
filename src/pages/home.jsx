export default function Home() {
  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-white to-blue-50 dark:from-blue-950 dark:to-slate-900 transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-900 dark:text-white tracking-tight">Welcome to the Student Portal</h1>
        <p className="text-lg text-blue-800 dark:text-blue-100 leading-relaxed mb-8">
          Manage all your academic details, stay on top of your progress, and explore useful student resources — all in one beautifully organized place.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          <div className="p-6 rounded-xl shadow-xl bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-white hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-2">📚 Academic Records</h2>
            <p className="text-sm">Keep track of grades, courses, and performance insights.</p>
          </div>

          <div className="p-6 rounded-xl shadow-xl bg-teal-100 dark:bg-teal-800 text-teal-900 dark:text-white hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-2">👥 Student Directory</h2>
            <p className="text-sm">Connect with fellow students and share knowledge.</p>
          </div>

          <div className="p-6 rounded-xl shadow-xl bg-yellow-100 dark:bg-yellow-800 text-yellow-900 dark:text-white hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-2">📆 Schedule Overview</h2>
            <p className="text-sm">View your academic calendar and upcoming events.</p>
          </div>

          <div className="p-6 rounded-xl shadow-xl bg-purple-100 dark:bg-purple-800 text-purple-900 dark:text-white hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-2">🛠️ Resources</h2>
            <p className="text-sm">Access learning tools, guides, and support materials.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
