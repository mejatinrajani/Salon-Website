import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Auth from './pages/Auth.jsx';
import Category from './components/Category.jsx';
import Templates from './components/Templates.jsx';
import Payment from './components/Payment.jsx';
import AboutSection from './components/About.jsx';

// We will create these layout wrappers next
import AdminLayout from './layouts/AdminLayout.jsx';
import SuperAdminLayout from './layouts/SuperAdminLayout.jsx';

// Existing editor components (moving into Admin)
import WebsiteDetails from './components/WebsiteDetails.jsx';
import WebsitePreview from './components/WebsitePreview.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC & ONBOARDING FLOW */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/category" element={<Category />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/payment" element={<Payment />} />

        {/* ADMIN ROUTE (For Business Owners) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/editor" replace />} />
          <Route path="editor" element={<WebsiteDetails />} />
          <Route path="preview" element={<WebsitePreview />} />
          <Route path="settings" element={<div>Admin Settings (Domain, Billing)</div>} />
        </Route>

        {/* SUPER ADMIN ROUTE (For You/Your Team) */}
        <Route path="/superadmin" element={<SuperAdminLayout />}>
          <Route index element={<div>Dashboard (Total Users, MRR)</div>} />
          <Route path="users" element={<div>Manage Users</div>} />
          <Route path="templates" element={<div>Manage Global Templates</div>} />
        </Route>

        {/* DYNAMIC PUBLIC SITE ROUTE (What the customer's clients see) */}
        <Route path="/:username" element={<div>Dynamic Rendered Site Goes Here</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;