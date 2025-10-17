import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import CoursesPage from './components/CoursesPage.jsx'
import StorePage from './components/StorePage.jsx'
import CertificationsPage from './pages/CertificationsPage.jsx'

// Employee Portal Pages
import EmployeePortalPage from './pages/EmployeePortalPage.jsx'
import EmployeeDashboardPage from './pages/EmployeeDashboardPage.jsx'
import ProcessesPage from './pages/ProcessesPage.jsx'
import CalendarPage from './pages/CalendarPage.jsx'
import DocumentsPage from './pages/DocumentsPage.jsx'
import CodesPage from './pages/CodesPage.jsx'
import ContactsPage from './pages/ContactsPage.jsx'
import AnnouncementsPage from './pages/AnnouncementsPage.jsx'
import AdminPanelPage from './pages/AdminPanelPage.jsx'

import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />

          {/* Employee Portal Routes */}
          <Route path="/employee-portal" element={<EmployeePortalPage />} />
          <Route path="/employee-portal/dashboard" element={<EmployeeDashboardPage />} />
          <Route path="/employee-portal/processes" element={<ProcessesPage />} />
          <Route path="/employee-portal/calendar" element={<CalendarPage />} />
          <Route path="/employee-portal/documents" element={<DocumentsPage />} />
          <Route path="/employee-portal/codes" element={<CodesPage />} />
          <Route path="/employee-portal/contacts" element={<ContactsPage />} />
          <Route path="/employee-portal/announcements" element={<AnnouncementsPage />} />
          <Route path="/employee-portal/admin" element={<AdminPanelPage />} />
        </Routes>
        
        {/* Only show footer on non-portal pages */}
        <Footer />
      </div>
    </Router>
  )
}

export default App

