import { Outlet, Link } from 'react-router-dom';

export default function AdminLayout() {
  // TODO: Add Auth Check Here. If not logged in -> redirect to /login

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-black text-white p-6 hidden md:block">
        <div className="text-xl font-bold mb-10">Admin Panel</div>
        <nav className="space-y-4 text-sm font-medium">
          <Link to="/admin/editor" className="block hover:text-indigo-400">Website Editor</Link>
          <Link to="/admin/preview" className="block hover:text-indigo-400">Live Preview</Link>
          <Link to="/admin/settings" className="block hover:text-indigo-400">Site Settings</Link>
          <hr className="border-gray-800 my-4" />
          <Link to="/" className="block text-gray-500 hover:text-white">Log Out</Link>
        </nav>
      </aside>

      {/* Admin Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* <Outlet /> renders whatever child route is active (e.g., WebsiteDetails) */}
        <Outlet /> 
      </main>
    </div>
  );
}