import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Calendar, Clock, Users, Award, MapPin, CheckCircle, Heart, Shield, UserCheck } from 'lucide-react'
import CourseRegistrationForm from './CourseRegistrationForm.jsx'

const courses = [
  {
    id: 1,
    title: "Stop the Bleed",
    category: "Emergency Response",
    icon: Heart,
    description: "Learn life-saving bleeding control techniques. This course teaches you how to recognize life-threatening bleeding and intervene effectively.",
    duration: "4 hours",
    price: 150.00,
    certification: "Stop the Bleed Certification",
    color: "red",
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
    ]
  },
  {
    id: 2,
    title: "Basics of Protection",
    category: "Security Fundamentals",
    icon: Shield,
    description: "Comprehensive introduction to personal and asset protection. Learn fundamental security principles and protective techniques.",
    duration: "2 days (16 hours)",
    price: 500.00,
    certification: "Basic Protection Certificate",
    color: "blue",
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
    ]
  },
  {
    id: 3,
    title: "Basics of Executive Protection",
    category: "Professional Security",
    icon: UserCheck,
    description: "Professional-level training in executive protection operations. Designed for those pursuing careers in close protection and VIP security.",
    duration: "5 days (40 hours)",
    price: 1250.00,
    certification: "Executive Protection Specialist Certificate",
    color: "gold",
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
    ]
  }
]

function CourseCard({ course, onEnroll }) {
  const [expanded, setExpanded] = useState(false)
  const IconComponent = course.icon

  const getColorClasses = (color) => {
    const colors = {
      red: 'bg-red-100 text-red-700 border-red-300',
      blue: 'bg-blue-100 text-blue-700 border-blue-300',
      gold: 'bg-gold/10 text-black border-gold'
    }
    return colors[color] || colors.gold
  }

  return (
    <Card className="border-2 hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getColorClasses(course.color)}`}>
            <IconComponent className="h-8 w-8" />
          </div>
          <Badge variant="outline" className="text-sm">
            {course.category}
          </Badge>
        </div>
        <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
        <CardDescription className="text-base">{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Course Details */}
          <div className="grid grid-cols-2 gap-4 py-4 border-t border-b">
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-2 text-gold" />
              <span className="font-medium">{course.duration}</span>
            </div>
            <div className="flex items-center text-sm">
              <Award className="h-4 w-4 mr-2 text-gold" />
              <span className="font-medium">Certified</span>
            </div>
          </div>

          {/* Price */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-gray-600">Course Fee</span>
              <span className="text-3xl font-bold text-black">AWG {course.price.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Includes certification and materials</p>
          </div>

          {/* Highlights */}
          {expanded && (
            <div className="space-y-3 animate-fade-in">
              <h4 className="font-semibold text-sm">What You'll Learn:</h4>
              <ul className="space-y-2">
                {course.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t">
                <h4 className="font-semibold text-sm mb-3">Upcoming Sessions:</h4>
                <div className="space-y-3">
                  {course.upcomingSessions.map((session, idx) => (
                    <div key={idx} className="bg-white border rounded-lg p-3">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center text-sm font-medium">
                          <Calendar className="h-4 w-4 mr-2 text-gold" />
                          {new Date(session.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <Clock className="h-3 w-3 mr-2" />
                        {session.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <MapPin className="h-3 w-3 mr-2" />
                        {session.location}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm">
                          <Users className="h-3 w-3 mr-1 text-gold" />
                          <span className="font-medium">{session.spots} spots available</span>
                        </div>
                        <Button 
                          size="sm" 
                          className="bg-gold text-black hover:bg-gold/90"
                          onClick={() => onEnroll(course, session)}
                        >
                          Enroll Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Toggle Button */}
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show Less' : 'View Details & Schedule'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [showRegistrationForm, setShowRegistrationForm] = useState(false)

  const handleEnroll = (course, session) => {
    setSelectedCourse({ course, session })
    setShowRegistrationForm(true)
  }

  const handleCloseForm = () => {
    setShowRegistrationForm(false)
    setSelectedCourse(null)
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Professional Security <span className="text-gold">Training Courses</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Enhance your skills with industry-leading training programs. From life-saving emergency response to professional executive protection.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white">
            <div className="flex items-center">
              <Award className="h-5 w-5 mr-2 text-gold" />
              <span>Certified Programs</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-gold" />
              <span>Expert Instructors</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-gold" />
              <span>Hands-On Training</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                onEnroll={handleEnroll}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ARX Training */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose ARX Training?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Industry Certified</h3>
                <p className="text-gray-600">
                  All our courses meet international standards and provide recognized certifications upon completion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                <p className="text-gray-600">
                  Learn from professionals with 25+ years of experience in Fortune 500 and government security.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Practical Training</h3>
                <p className="text-gray-600">
                  Hands-on exercises and real-world scenarios ensure you're prepared for actual situations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Training?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of professionals who have enhanced their skills with ARX Protection training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-black hover:bg-gold/90 text-lg px-8 py-6">
              View Course Schedule
            </Button>
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 text-lg px-8 py-6">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Registration Form Modal */}
      {showRegistrationForm && selectedCourse && (
        <CourseRegistrationForm
          course={selectedCourse.course}
          session={selectedCourse.session}
          onClose={handleCloseForm}
        />
      )}
    </div>
  )
}

export default CoursesPage

