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
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

