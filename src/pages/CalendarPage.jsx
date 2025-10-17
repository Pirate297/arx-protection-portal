import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { 
  Calendar as CalendarIcon, ChevronLeft, ChevronRight, 
  Clock, MapPin, Users, ArrowLeft, Filter 
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

export default function CalendarPage() {
  const [user, setUser] = useState(null)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [viewMode, setViewMode] = useState('month') // month, week, day
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

  // Sample schedule data - In production, fetch from API
  const scheduleData = [
    {
      id: 1,
      title: 'Morning Shift - Renaissance Hotel',
      date: new Date(2025, 9, 18),
      startTime: '06:00',
      endTime: '14:00',
      location: 'Renaissance Aruba Resort & Casino',
      assignedTo: ['Bruce Croes', 'Dijon Croes'],
      type: 'shift',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Evening Shift - Hyatt Regency',
      date: new Date(2025, 9, 18),
      startTime: '14:00',
      endTime: '22:00',
      location: 'Hyatt Regency Aruba',
      assignedTo: ['Alexander Tsu'],
      type: 'shift',
      color: 'purple'
    },
    {
      id: 3,
      title: 'Executive Protection Detail',
      date: new Date(2025, 9, 19),
      startTime: '08:00',
      endTime: '18:00',
      location: 'Various Locations',
      assignedTo: ['Cedric Croes', 'Millicent Croes'],
      type: 'ep',
      color: 'red'
    },
    {
      id: 4,
      title: 'Stop the Bleed Training',
      date: new Date(2025, 9, 20),
      startTime: '09:00',
      endTime: '13:00',
      location: 'ARX Training Center',
      assignedTo: ['All Staff'],
      type: 'training',
      color: 'green'
    },
    {
      id: 5,
      title: 'Night Shift - Aruba Ports Authority',
      date: new Date(2025, 9, 20),
      startTime: '22:00',
      endTime: '06:00',
      location: 'Aruba Ports Authority',
      assignedTo: ['Bruce Croes'],
      type: 'shift',
      color: 'blue'
    },
    {
      id: 6,
      title: 'Event Security - Private Function',
      date: new Date(2025, 9, 21),
      startTime: '18:00',
      endTime: '23:00',
      location: 'Private Residence',
      assignedTo: ['Cedric Croes', 'Dijon Croes', 'Bruce Croes'],
      type: 'event',
      color: 'orange'
    },
    {
      id: 7,
      title: 'Team Meeting',
      date: new Date(2025, 9, 22),
      startTime: '10:00',
      endTime: '11:00',
      location: 'ARX Office',
      assignedTo: ['All Staff'],
      type: 'meeting',
      color: 'yellow'
    }
  ]

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }
    
    return days
  }

  const getEventsForDate = (date) => {
    if (!date) return []
    return scheduleData.filter(event => 
      event.date.toDateString() === date.toDateString()
    )
  }

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const isToday = (date) => {
    if (!date) return false
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isSelected = (date) => {
    if (!date) return false
    return date.toDateString() === selectedDate.toDateString()
  }

  const typeColors = {
    shift: 'from-blue-500 to-cyan-500',
    ep: 'from-red-500 to-rose-500',
    training: 'from-green-500 to-emerald-500',
    event: 'from-orange-500 to-yellow-500',
    meeting: 'from-yellow-500 to-amber-500'
  }

  const typeLabels = {
    shift: 'Shift',
    ep: 'Executive Protection',
    training: 'Training',
    event: 'Event Security',
    meeting: 'Meeting'
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  const days = getDaysInMonth(currentDate)
  const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })
  const selectedEvents = getEventsForDate(selectedDate)

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

            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Team Calendar
            </h1>
            <p className="text-gray-400 text-lg">
              View schedules, shifts, and upcoming events
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl blur-xl opacity-20" />
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  {/* Calendar Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">{monthName}</h2>
                    <div className="flex gap-2">
                      <button
                        onClick={previousMonth}
                        className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={() => setCurrentDate(new Date())}
                        className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white text-sm font-medium transition-colors"
                      >
                        Today
                      </button>
                      <button
                        onClick={nextMonth}
                        className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Day Names */}
                  <div className="grid grid-cols-7 gap-2 mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="text-center text-sm font-semibold text-gray-400 py-2">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2">
                    {days.map((date, index) => {
                      const events = getEventsForDate(date)
                      const hasEvents = events.length > 0

                      return (
                        <button
                          key={index}
                          onClick={() => date && setSelectedDate(date)}
                          disabled={!date}
                          className={`
                            aspect-square p-2 rounded-lg transition-all relative
                            ${!date ? 'invisible' : ''}
                            ${isToday(date) ? 'bg-yellow-600/20 border-2 border-yellow-500' : 'bg-gray-800/50 border border-gray-700'}
                            ${isSelected(date) ? 'ring-2 ring-yellow-500' : ''}
                            ${date && !isToday(date) ? 'hover:bg-gray-700/50' : ''}
                          `}
                        >
                          {date && (
                            <>
                              <div className={`text-sm font-semibold ${isToday(date) ? 'text-yellow-400' : 'text-white'}`}>
                                {date.getDate()}
                              </div>
                              {hasEvents && (
                                <div className="flex gap-1 mt-1 flex-wrap justify-center">
                                  {events.slice(0, 3).map((event, idx) => (
                                    <div
                                      key={idx}
                                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${typeColors[event.type]}`}
                                    />
                                  ))}
                                </div>
                              )}
                            </>
                          )}
                        </button>
                      )
                    })}
                  </div>

                  {/* Legend */}
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="flex flex-wrap gap-4">
                      {Object.entries(typeLabels).map(([type, label]) => (
                        <div key={type} className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${typeColors[type]}`} />
                          <span className="text-sm text-gray-400">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Events Sidebar */}
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl blur-xl opacity-20" />
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                  </h3>

                  {selectedEvents.length === 0 ? (
                    <div className="text-center py-8">
                      <CalendarIcon className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                      <p className="text-gray-400">No events scheduled</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {selectedEvents.map(event => (
                        <div key={event.id} className="relative group">
                          <div className={`absolute inset-0 bg-gradient-to-r ${typeColors[event.type]} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity`} />
                          <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-gray-600 transition-all">
                            <div className={`inline-block px-2 py-1 bg-gradient-to-r ${typeColors[event.type]} rounded text-xs font-semibold text-white mb-2`}>
                              {typeLabels[event.type]}
                            </div>
                            <h4 className="text-white font-semibold mb-2">{event.title}</h4>
                            <div className="space-y-1 text-sm text-gray-400">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{event.startTime} - {event.endTime}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{event.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                <span>{event.assignedTo.join(', ')}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl blur-xl opacity-20" />
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">This Month</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Total Shifts</span>
                      <span className="text-white font-semibold">24</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Hours Scheduled</span>
                      <span className="text-white font-semibold">192</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Training Sessions</span>
                      <span className="text-white font-semibold">3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

