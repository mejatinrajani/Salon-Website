import { Outlet, Link } from 'react-router-dom';

export default function SuperAdminLayout() {
  // TODO: Add Strict Role Check Here. If role !== 'SUPERADMIN' -> redirect to /

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-indigo-900 text-white p-4 flex justify-between items-center shadow-md z-10">
        <div className="font-bold text-lg tracking-wider">SUPER ADMIN HQ</div>
        <nav className="flex gap-6 text-sm">
          <Link to="/superadmin" className="hover:text-indigo-300">Dashboard</Link>
          <Link to="/superadmin/users" className="hover:text-indigo-300">Users</Link>
          <Link to="/superadmin/templates" className="hover:text-indigo-300">Templates</Link>
        </nav>
      </header>
      
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}