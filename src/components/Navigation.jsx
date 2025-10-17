import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Shield } from 'lucide-react'
import arxLogo from '../assets/arx-castle-logo.jpeg'

export default function Navigation() {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path
  const isPortalRoute = location.pathname.startsWith('/employee-portal')

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={arxLogo} alt="ARX Protection" className="h-14 w-auto" />
          </Link>
          
          <div className="hidden md:flex space-x-1">
            <Link to="/">
              <Button 
                variant={isActive('/') ? 'default' : 'ghost'}
                className={isActive('/') ? 'bg-gold text-black hover:bg-gold/90' : 'text-white hover:text-gold hover:bg-white/10'}
              >
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant={isActive('/about') ? 'default' : 'ghost'}
                className={isActive('/about') ? 'bg-gold text-black hover:bg-gold/90' : 'text-white hover:text-gold hover:bg-white/10'}
              >
                About
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                variant={isActive('/services') ? 'default' : 'ghost'}
                className={isActive('/services') ? 'bg-gold text-black hover:bg-gold/90' : 'text-white hover:text-gold hover:bg-white/10'}
              >
                Services
              </Button>
            </Link>
            <Link to="/courses">
              <Button 
                variant={isActive('/courses') ? 'default' : 'ghost'}
                className={isActive('/courses') ? 'bg-gold text-black hover:bg-gold/90' : 'text-white hover:text-gold hover:bg-white/10'}
              >
                Training Courses
              </Button>
            </Link>
            <Link to="/store">
              <Button 
                variant={isActive('/store') ? 'default' : 'ghost'}
                className={isActive('/store') ? 'bg-gold text-black hover:bg-gold/90' : 'text-white hover:text-gold hover:bg-white/10'}
              >
                Store
              </Button>
            </Link>
            <Link to="/certifications">
              <Button 
                variant={isActive('/certifications') ? 'default' : 'ghost'}
                className={isActive('/certifications') ? 'bg-gold text-black hover:bg-gold/90' : 'text-white hover:text-gold hover:bg-white/10'}
              >
                Certifications
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant={isActive('/contact') ? 'default' : 'ghost'}
                className={isActive('/contact') ? 'bg-gold text-black hover:bg-gold/90' : 'text-white hover:text-gold hover:bg-white/10'}
              >
                Contact
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center gap-3">
            <Link to="/employee-portal">
              <Button 
                variant="ghost"
                className={isPortalRoute ? 'bg-purple-600 text-white hover:bg-purple-700' : 'text-white hover:text-purple-400 hover:bg-white/10'}
              >
                <Shield className="w-4 h-4 mr-2" />
                Employee Portal
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-gold text-black hover:bg-gold/90">
                Get Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

