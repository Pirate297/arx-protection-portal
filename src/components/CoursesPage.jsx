import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Calendar, Clock, Users, Award, MapPin, CheckCircle, Heart, Shield, UserCheck, ChevronDown, ChevronUp } from 'lucide-react'
import CourseRegistrationForm from './CourseRegistrationForm.jsx'

const courses = [
  {
    id: 1,
    title: "Stop the Bleed",
    category: "Emergency Response",
    icon: Heart,
    image: "/courses/stop-the-bleed.jpeg",
    description: "Learn life-saving bleeding control techniques. This course teaches you how to recognize life-threatening bleeding and intervene effectively.",
    duration: "4 hours",
    price: 270.00,
    certification: "Stop the Bleed Certification",
    color: "from-red-500 to-rose-600",
    iconColor: "from-red-500 to-rose-500",
    highlights: [
      "Recognize life-threatening bleeding",
      "Proper tourniquet application",
      "Wound packing techniques",
      "Hands-on practical training",
      "Official certification upon completion"
    ],
    upcomingSessions: [
      { date: "2025-11-15", time: "09:00 AM", location: "ARX Training Center, Oranjestad", spots: 12 },
      { date: "2025-12-10", time: "02:00 PM", location: "ARX Training Center, Oranjestad", spots: 15 },
      { date: "2026-01-20", time: "09:00 AM", location: "ARX Training Center, Oranjestad", spots: 15 }
    ],
    enrollmentEnabled: true
  },
  {
    id: 2,
    title: "Basics of Protection",
    category: "Security Fundamentals",
    icon: Shield,
    image: "/courses/executive-protection.jpeg",
    description: "Comprehensive introduction to personal and asset protection. Learn fundamental security principles and protective techniques.",
    duration: "2 days (16 hours)",
    price: 900.00,
    certification: "Basic Protection Certificate",
    color: "from-blue-500 to-cyan-600",
    iconColor: "from-blue-500 to-cyan-500",
    highlights: [
      "Threat assessment fundamentals",
      "Security awareness and observation",
      "Basic defensive tactics",
      "Communication protocols",
      "Legal considerations in protection",
      "Practical scenario training"
    ],
    upcomingSessions: [
      { date: "2025-11-22", time: "08:00 AM", location: "ARX Training Center, Oranjestad", spots: 10 },
      { date: "2026-01-15", time: "08:00 AM", location: "ARX Training Center, Oranjestad", spots: 12 }
    ],
    enrollmentEnabled: false
  },
  {
    id: 3,
    title: "Basics of Executive Protection",
    category: "Professional Security",
    icon: UserCheck,
    image: "/courses/drone-training.jpeg",
    description: "Professional-level training in executive protection operations. Designed for those pursuing careers in close protection and VIP security.",
    duration: "5 days (40 hours)",
    price: 2250.00,
    certification: "Executive Protection Specialist Certificate",
    color: "from-yellow-500 to-orange-600",
    iconColor: "from-yellow-500 to-orange-500",
    highlights: [
      "Advanced threat assessment",
      "Route planning and advance work",
      "Protective formations and movements",
      "Vehicle security operations",
      "Emergency response procedures",
      "Professional conduct and etiquette",
      "Communication and coordination",
      "Real-world scenario exercises"
    ],
    upcomingSessions: [
      { date: "2025-12-02", time: "08:00 AM", location: "ARX Training Center, Oranjestad", spots: 8 },
      { date: "2026-02-10", time: "08:00 AM", location: "ARX Training Center, Oranjestad", spots: 10 }
    ],
    enrollmentEnabled: false
  }
]

// Floating particles component
function FloatingParticles({ count = 20 }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  )
}

function CourseCard({ course, onEnroll }) {
  const [expanded, setExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const IconComponent = course.icon

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div
      className={`group relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* 3D Glass Card */}
      <div className="relative bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/20">
        
        {/* Course Image with Overlay */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-60 mix-blend-multiply`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Floating Icon */}
          <div className="absolute top-6 left-6">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.iconColor} flex items-center justify-center shadow-lg shadow-black/50 group-hover:rotate-12 transition-transform duration-500`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-6 right-6">
            <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
              {course.category}
            </div>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className={`text-3xl font-bold text-white mb-2 bg-gradient-to-r ${course.color} bg-clip-text text-transparent`}>
              {course.title}
            </h3>
            <p className="text-gray-200 text-sm line-clamp-2">{course.description}</p>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-4">
          {/* Quick Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <Clock className="w-4 h-4 text-yellow-500" />
              <span className="text-sm">{course.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="text-sm">Certified</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className={`text-4xl font-bold bg-gradient-to-r ${course.color} bg-clip-text text-transparent`}>
              AWG {course.price}
            </span>
            <span className="text-gray-400 text-sm">per person</span>
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <h4 className="text-white font-semibold flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-yellow-500" />
              What You'll Learn
            </h4>
            <ul className="space-y-1.5">
              {course.highlights.slice(0, 4).map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expand Button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 text-white hover:border-yellow-500/50 transition-all duration-300"
          >
            <span className="font-medium">
              {expanded ? 'Hide' : 'View'} Upcoming Sessions
            </span>
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {/* Expanded Sessions */}
          {expanded && (
            <div className="space-y-3 animate-in slide-in-from-top-2 duration-300">
              {course.upcomingSessions.map((session, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-700/30 border border-gray-600/30 space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-white">
                        <Calendar className="w-4 h-4 text-yellow-500" />
                        <span className="font-medium">{formatDate(session.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <Clock className="w-4 h-4 text-yellow-500" />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <MapPin className="w-4 h-4 text-yellow-500" />
                        <span>{session.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-sm">
                        <Users className="w-4 h-4 text-yellow-500" />
                        <span className="text-white font-medium">{session.spots}</span>
                      </div>
                      <span className="text-xs text-gray-400">spots left</span>
                    </div>
                  </div>

                  {course.enrollmentEnabled ? (
                    <button
                      onClick={() => onEnroll(course, session)}
                      className={`w-full py-3 rounded-xl bg-gradient-to-r ${course.color} text-white font-semibold hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 hover:scale-105`}
                    >
                      Enroll Now
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full py-3 rounded-xl bg-gray-700/50 border border-gray-600/50 text-gray-400 font-semibold cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function CoursesPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [selectedSession, setSelectedSession] = useState(null)
  const [showRegistrationForm, setShowRegistrationForm] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleEnroll = (course, session) => {
    setSelectedCourse(course)
    setSelectedSession(session)
    setShowRegistrationForm(true)
  }

  const handleCloseForm = () => {
    setShowRegistrationForm(false)
    setSelectedCourse(null)
    setSelectedSession(null)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(234, 179, 8, 0.15) 0%, transparent 50%)`
          }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-20 animate-pulse" />
      </div>

      <FloatingParticles count={25} />

      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Training Courses
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Professional security training programs designed to elevate your skills and advance your career
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="relative z-10 py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={course.id}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CourseCard course={course} onEnroll={handleEnroll} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose ARX Training */}
      <div className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="relative bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5" />
            
            <div className="relative z-10 text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Why Choose ARX Training?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  {
                    icon: Award,
                    title: "Certified Instructors",
                    description: "Learn from industry professionals with real-world experience"
                  },
                  {
                    icon: Users,
                    title: "Small Class Sizes",
                    description: "Personalized attention and hands-on training for every student"
                  },
                  {
                    icon: CheckCircle,
                    title: "Official Certification",
                    description: "Recognized credentials that advance your career"
                  }
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-700/30 border border-gray-600/30 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form Modal */}
      {showRegistrationForm && selectedCourse && selectedSession && (
        <CourseRegistrationForm
          course={selectedCourse}
          session={selectedSession}
          onClose={handleCloseForm}
        />
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  )
}

