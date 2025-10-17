import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { 
  Phone, Mail, MapPin, ArrowLeft, Shield, AlertCircle,
  Building, Users, Clock, ExternalLink
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

export default function ContactsPage() {
  const [user, setUser] = useState(null)
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

  const emergencyContacts = [
    {
      category: 'Emergency Services',
      color: 'from-red-500 to-rose-500',
      icon: AlertCircle,
      contacts: [
        {
          name: 'Emergency Services (Police/Fire/Ambulance)',
          phone: '911',
          available: '24/7',
          priority: 'IMMEDIATE'
        },
        {
          name: 'Police Non-Emergency',
          phone: '+297 100',
          available: '24/7'
        },
        {
          name: 'Fire Department',
          phone: '+297 115',
          available: '24/7'
        },
        {
          name: 'Ambulance Service',
          phone: '+297 911',
          available: '24/7'
        },
        {
          name: 'Hospital Dr. Horacio Oduber',
          phone: '+297 527-4000',
          address: 'L.G. Smith Boulevard 76, Oranjestad',
          available: '24/7'
        }
      ]
    },
    {
      category: 'ARX Management',
      color: 'from-yellow-500 to-orange-500',
      icon: Shield,
      contacts: [
        {
          name: 'Alexander Tsu - CEO',
          phone: '+297 XXX-XXXX',
          email: 'alexander@arxglobalprotection.com',
          available: '24/7 Emergency Line'
        },
        {
          name: 'Cedric Croes - Operations Manager',
          phone: '+297 XXX-XXXX',
          email: 'cedric@arxglobalprotection.com',
          available: 'Mon-Fri 8:00-18:00, Emergency 24/7'
        },
        {
          name: 'Millicent Croes - Training Coordinator',
          phone: '+297 XXX-XXXX',
          email: 'millicent@arxglobalprotection.com',
          available: 'Mon-Fri 9:00-17:00'
        },
        {
          name: 'ARX Office Main Line',
          phone: '+297 XXX-XXXX',
          email: 'info@arxglobalprotection.com',
          available: 'Mon-Fri 8:00-17:00'
        }
      ]
    },
    {
      category: 'Client Sites',
      color: 'from-blue-500 to-cyan-500',
      icon: Building,
      contacts: [
        {
          name: 'Renaissance Aruba Resort & Casino',
          phone: '+297 583-6000',
          address: 'L.G. Smith Boulevard 82, Oranjestad',
          contact: 'Security Department'
        },
        {
          name: 'Hyatt Regency Aruba',
          phone: '+297 586-1234',
          address: 'J.E. Irausquin Boulevard 85, Palm Beach',
          contact: 'Security Office'
        },
        {
          name: 'Aruba Ports Authority',
          phone: '+297 588-0200',
          address: 'L.G. Smith Boulevard 23, Oranjestad',
          contact: 'Port Security'
        },
        {
          name: 'Central Bank of Aruba',
          phone: '+297 525-2100',
          address: 'J.E. Irausquin Boulevard 8, Oranjestad',
          contact: 'Security Manager'
        }
      ]
    },
    {
      category: 'Support Services',
      color: 'from-purple-500 to-pink-500',
      icon: Users,
      contacts: [
        {
          name: 'IT Support',
          phone: '+297 XXX-XXXX',
          email: 'it@arxglobalprotection.com',
          available: 'Mon-Fri 8:00-17:00'
        },
        {
          name: 'HR Department',
          phone: '+297 XXX-XXXX',
          email: 'hr@arxglobalprotection.com',
          available: 'Mon-Fri 9:00-17:00'
        },
        {
          name: 'Equipment & Supplies',
          phone: '+297 XXX-XXXX',
          email: 'equipment@arxglobalprotection.com',
          available: 'Mon-Fri 8:00-16:00'
        },
        {
          name: 'Training Department',
          phone: '+297 XXX-XXXX',
          email: 'training@arxglobalprotection.com',
          available: 'Mon-Fri 9:00-17:00'
        }
      ]
    },
    {
      category: 'Government & Authorities',
      color: 'from-green-500 to-emerald-500',
      icon: Building,
      contacts: [
        {
          name: 'Immigration Department',
          phone: '+297 522-1500',
          address: 'Sabana Blanco 31, Oranjestad'
        },
        {
          name: 'Customs Department',
          phone: '+297 522-2500',
          address: 'L.G. Smith Boulevard, Oranjestad'
        },
        {
          name: 'Coast Guard Aruba',
          phone: '+297 527-8600',
          available: '24/7'
        },
        {
          name: 'Airport Security',
          phone: '+297 524-2424',
          address: 'Queen Beatrix International Airport'
        }
      ]
    }
  ]

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

            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Emergency Contacts
            </h1>
            <p className="text-gray-400 text-lg">
              Important phone numbers and contact information
            </p>
          </div>

          {/* Emergency Banner */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-500 rounded-2xl blur-xl opacity-50 animate-pulse" />
            <div className="relative bg-gradient-to-r from-red-600 to-rose-500 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">Emergency: 911</h2>
                  <p className="text-red-100">For immediate police, fire, or medical emergency</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Categories */}
          <div className="space-y-8">
            {emergencyContacts.map((category, catIndex) => {
              const Icon = category.icon
              return (
                <div key={catIndex} className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-20`} />
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">{category.category}</h2>
                    </div>

                    {/* Contacts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.contacts.map((contact, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all">
                          <h3 className="text-lg font-semibold text-white mb-4">{contact.name}</h3>
                          
                          <div className="space-y-3">
                            {contact.phone && (
                              <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <div>
                                  <a 
                                    href={`tel:${contact.phone}`}
                                    className="text-gray-300 hover:text-yellow-400 transition-colors font-medium"
                                  >
                                    {contact.phone}
                                  </a>
                                  {contact.priority && (
                                    <span className="ml-2 px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded">
                                      {contact.priority}
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}
                            
                            {contact.email && (
                              <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <a 
                                  href={`mailto:${contact.email}`}
                                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                                >
                                  {contact.email}
                                </a>
                              </div>
                            )}
                            
                            {contact.address && (
                              <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300">{contact.address}</span>
                              </div>
                            )}
                            
                            {contact.available && (
                              <div className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300">{contact.available}</span>
                              </div>
                            )}
                            
                            {contact.contact && (
                              <div className="flex items-start gap-3">
                                <Users className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300">{contact.contact}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Quick Reference Card */}
          <div className="mt-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl blur-xl opacity-20" />
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Reference</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">911</div>
                  <div className="text-gray-400">Emergency Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">+297 XXX-XXXX</div>
                  <div className="text-gray-400">ARX 24/7 Emergency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">+297 527-4000</div>
                  <div className="text-gray-400">Hospital Emergency</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-center">
                  💡 <strong>Tip:</strong> Save these numbers in your personal phone for quick access during emergencies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

