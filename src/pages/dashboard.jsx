import Navbar from './navbar';

export default function Dashboard() {
  const stats = [
    { title: 'CGPA', value: '9.12', color: 'from-[#93C5FD] to-[#60A5FA]' },
    { title: 'Attendance', value: '94%', color: 'from-[#FBCFE8] to-[#F9A8D4]' },
    { title: 'Credits Earned', value: '122 / 150', color: 'from-[#D9F99D] to-[#A7F3D0]' },
    { title: 'Assignments Submitted', value: '28 / 30', color: 'from-[#FEF9C3] to-[#FDE68A]' },
    { title: 'Seminars Attended', value: '12', color: 'from-[#E0E7FF] to-[#A5B4FC]' },
    { title: 'Projects Completed', value: '5', color: 'from-[#FDE2E4] to-[#FBC4AB]' },
  ];

  return (
    <>
      <div className="p-6 min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800 transition duration-500">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800 dark:text-white tracking-tight">Dashboard Overview</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 text-blue-900 dark:text-blue-900 shadow-xl bg-gradient-to-br ${stat.color} transform hover:scale-[1.03] hover:shadow-2xl transition-all duration-300`}
            >
              <h2 className="text-lg font-semibold uppercase tracking-wider mb-2">{stat.title}</h2>
              <p className="text-4xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
