import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { 
  Calendar, FileText, Bell, Users, Radio, AlertCircle, 
  LogOut, Settings, Book, Shield, Clock, MapPin 
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

export default function EmployeeDashboardPage() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('arxToken')
    const userData = localStorage.getItem('arxUser')

    if (!token || !userData) {
      navigate('/employee-portal')
      return
    }

    setUser(JSON.parse(userData))
    setLoading(false)
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('arxToken')
    localStorage.removeItem('arxUser')
    navigate('/employee-portal')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  const quickLinks = [
    {
      title: 'Team Calendar',
      description: 'View schedules and shifts',
      icon: Calendar,
      color: 'from-blue-500 to-cyan-500',
      link: '/employee-portal/calendar'
    },
    {
      title: 'Processes & Procedures',
      description: 'Company protocols and guidelines',
      icon: Book,
      color: 'from-purple-500 to-pink-500',
      link: '/employee-portal/processes'
    },
    {
      title: 'Documents',
      description: 'Forms, policies, and resources',
      icon: FileText,
      color: 'from-green-500 to-emerald-500',
      link: '/employee-portal/documents'
    },
    {
      title: 'Uniform & Radio Codes',
      description: 'Dress code and communication protocols',
      icon: Radio,
      color: 'from-orange-500 to-red-500',
      link: '/employee-portal/codes'
    },
    {
      title: 'Emergency Contacts',
      description: 'Important phone numbers and contacts',
      icon: AlertCircle,
      color: 'from-red-500 to-rose-500',
      link: '/employee-portal/contacts'
    },
    {
      title: 'Announcements',
      description: 'Latest company news and updates',
      icon: Bell,
      color: 'from-yellow-500 to-orange-500',
      link: '/employee-portal/announcements'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      <div className="pt-32 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Welcome back, {user?.firstName || user?.username}!
                </h1>
                <p className="text-gray-400 text-lg">
                  {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
              <div className="flex gap-3">
                {(user?.role === 'admin' || user?.role === 'manager' || user?.role === 'supervisor') && (
                  <Button
                    onClick={() => navigate('/employee-portal/admin')}
                    className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Admin Panel
                  </Button>
                )}
                <Button
                  onClick={handleLogout}
                  className="bg-gray-700 hover:bg-gray-600 text-white"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>

          {/* User Info Card */}
          <div className="mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl blur-xl opacity-30" />
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center gap-6 flex-wrap">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {user?.firstName} {user?.lastName}
                    </h3>
                    <p className="text-gray-400 capitalize">{user?.role} • {user?.department}</p>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <div>
                      <p className="text-gray-500">Employee ID</p>
                      <p className="text-white font-semibold">{user?.employeeId}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Status</p>
                      <p className="text-green-400 font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        Active
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <button
                  key={index}
                  onClick={() => navigate(link.link)}
                  className="group relative"
                >
                  {/* Glowing Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                  
                  {/* Card */}
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 group-hover:scale-105 h-full">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {link.description}
                    </p>
                    
                    {/* Arrow */}
                    <div className="mt-4 flex items-center text-yellow-500 text-sm font-medium">
                      <span className="group-hover:translate-x-1 transition-transform">
                        Access →
                      </span>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Recent Activity */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
            <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
              <div className="space-y-4">
                {[
                  { icon: Clock, text: 'Logged in', time: 'Just now', color: 'text-green-400' },
                  { icon: FileText, text: 'Viewed Uniform Guidelines', time: '2 hours ago', color: 'text-blue-400' },
                  { icon: Calendar, text: 'Checked team schedule', time: 'Yesterday', color: 'text-purple-400' },
                ].map((activity, index) => {
                  const Icon = activity.icon
                  return (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                      <Icon className={`w-5 h-5 ${activity.color}`} />
                      <div className="flex-1">
                        <p className="text-white">{activity.text}</p>
                      </div>
                      <span className="text-gray-500 text-sm">{activity.time}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

