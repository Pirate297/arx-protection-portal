import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { 
  Bell, ArrowLeft, AlertCircle, Info, CheckCircle, 
  Calendar, Award, Users, Megaphone
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

export default function AnnouncementsPage() {
  const [user, setUser] = useState(null)
  const [filter, setFilter] = useState('all')
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('arxToken')
    const userData = localStorage.getItem('arxUser')

    if (!token || !userData) {
      navigate('/employee-portal')
      return
    }

    setUser(JSON.parse(userData))
  }, [navigate])

  const announcements = [
    {
      id: 1,
      type: 'important',
      title: 'New Security Protocols Effective Immediately',
      content: 'All personnel must complete the updated security training module by October 25, 2025. The new protocols include enhanced access control procedures and updated emergency response guidelines. Failure to complete training by the deadline may result in temporary suspension from active duty assignments.',
      date: '2025-10-17',
      author: 'Alexander Tsu',
      icon: AlertCircle,
      color: 'from-red-500 to-rose-500',
      priority: 'high'
    },
    {
      id: 2,
      type: 'event',
      title: 'Stop the Bleed Training - October 20',
      content: 'Mandatory Stop the Bleed certification training scheduled for October 20, 2025, at 9:00 AM at the ARX Training Center. All security personnel must attend. This training is required for maintaining active duty status. Lunch will be provided.',
      date: '2025-10-15',
      author: 'Millicent Croes',
      icon: Calendar,
      color: 'from-green-500 to-emerald-500',
      priority: 'medium'
    },
    {
      id: 3,
      type: 'recognition',
      title: 'Employee of the Month - September 2025',
      content: 'Congratulations to Bruce Croes for being named Employee of the Month! Bruce demonstrated exceptional professionalism and dedication during the high-profile executive protection detail at the Caribbean Security Summit. His attention to detail and proactive approach to threat assessment were exemplary.',
      date: '2025-10-01',
      author: 'Cedric Croes',
      icon: Award,
      color: 'from-yellow-500 to-orange-500',
      priority: 'low'
    },
    {
      id: 4,
      type: 'info',
      title: 'New Client Partnership: Aruba Convention Center',
      content: 'ARX Protection is proud to announce a new partnership with the Aruba Convention Center. We will be providing comprehensive security services for all major events starting November 1, 2025. Additional staffing opportunities available - contact Operations for details.',
      date: '2025-10-14',
      author: 'Alexander Tsu',
      icon: Info,
      color: 'from-blue-500 to-cyan-500',
      priority: 'medium'
    },
    {
      id: 5,
      type: 'important',
      title: 'Uniform Inspection - October 22',
      content: 'Scheduled uniform and equipment inspection on October 22, 2025. All personnel must ensure uniforms are clean, pressed, and in good repair. Equipment must be functional and properly maintained. Deficiencies must be corrected within 48 hours.',
      date: '2025-10-13',
      author: 'Cedric Croes',
      icon: AlertCircle,
      color: 'from-purple-500 to-pink-500',
      priority: 'high'
    },
    {
      id: 6,
      type: 'event',
      title: 'Team Building Event - November 5',
      content: 'Join us for our quarterly team building event on November 5, 2025, at Eagle Beach. Activities include team challenges, BBQ lunch, and awards ceremony. This is a great opportunity to connect with colleagues and celebrate our achievements. RSVP by October 30.',
      date: '2025-10-12',
      author: 'Millicent Croes',
      icon: Users,
      color: 'from-cyan-500 to-blue-500',
      priority: 'low'
    },
    {
      id: 7,
      type: 'info',
      title: 'Updated Radio Codes Effective October 15',
      content: 'New radio communication codes have been implemented to improve clarity and efficiency. All personnel should review the updated codes in the Employee Portal under Uniform & Radio Codes section. Pocket reference cards are available at the office.',
      date: '2025-10-10',
      author: 'Operations Department',
      icon: Info,
      color: 'from-green-500 to-emerald-500',
      priority: 'medium'
    },
    {
      id: 8,
      type: 'recognition',
      title: 'Successful Completion: Executive Protection Course',
      content: 'Congratulations to Dijon Croes and three other team members for successfully completing the Advanced Executive Protection Course. This certification enhances our team\'s capabilities and opens new opportunities for high-level assignments.',
      date: '2025-10-08',
      author: 'Millicent Croes',
      icon: Award,
      color: 'from-yellow-500 to-orange-500',
      priority: 'low'
    },
    {
      id: 9,
      type: 'important',
      title: 'Hurricane Season Preparedness',
      content: 'As we approach peak hurricane season, all personnel must review emergency response procedures. Ensure you have updated contact information on file and know your assigned emergency role. Emergency kits should be checked and restocked as needed.',
      date: '2025-10-05',
      author: 'Alexander Tsu',
      icon: AlertCircle,
      color: 'from-red-500 to-rose-500',
      priority: 'high'
    },
    {
      id: 10,
      type: 'info',
      title: 'New Equipment: Body-Worn Cameras',
      content: 'ARX Protection is implementing body-worn cameras for all security personnel. Training on proper use and policies will be conducted October 18-19. These devices enhance accountability and provide valuable documentation for incident reports.',
      date: '2025-10-03',
      author: 'Operations Department',
      icon: Info,
      color: 'from-purple-500 to-pink-500',
      priority: 'medium'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Announcements', icon: Megaphone },
    { id: 'important', label: 'Important', icon: AlertCircle },
    { id: 'event', label: 'Events', icon: Calendar },
    { id: 'recognition', label: 'Recognition', icon: Award },
    { id: 'info', label: 'Information', icon: Info }
  ]

  const filteredAnnouncements = filter === 'all' 
    ? announcements 
    : announcements.filter(a => a.type === filter)

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

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
            <Button
              onClick={() => navigate('/employee-portal/dashboard')}
              className="mb-6 bg-gray-800 hover:bg-gray-700 text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-2xl flex items-center justify-center">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Announcements
                </h1>
                <p className="text-gray-400 text-lg">
                  Latest company news, updates, and important information
                </p>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
            {filters.map(f => {
              const Icon = f.icon
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`
                    flex items-center gap-2 px-5 py-3 rounded-xl font-medium whitespace-nowrap transition-all
                    ${filter === f.id
                      ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {f.label}
                </button>
              )
            })}
          </div>

          {/* Announcements List */}
          <div className="space-y-6">
            {filteredAnnouncements.map(announcement => {
              const Icon = announcement.icon
              return (
                <div key={announcement.id} className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${announcement.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                  
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all">
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className={`w-14 h-14 bg-gradient-to-br ${announcement.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                              {announcement.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <span>{new Date(announcement.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}</span>
                              <span>•</span>
                              <span>Posted by {announcement.author}</span>
                            </div>
                          </div>
                          {announcement.priority === 'high' && (
                            <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full whitespace-nowrap">
                              HIGH PRIORITY
                            </span>
                          )}
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed">
                          {announcement.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* No Results */}
          {filteredAnnouncements.length === 0 && (
            <div className="text-center py-12">
              <Bell className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No announcements in this category.</p>
            </div>
          )}

          {/* Subscribe Section */}
          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl blur-xl opacity-20" />
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                  <p className="text-gray-400">
                    Important announcements are also sent via email and SMS. Make sure your contact information is up to date.
                  </p>
                </div>
                <Button className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white whitespace-nowrap">
                  Update Contact Info
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

