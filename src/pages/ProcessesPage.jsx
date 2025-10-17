import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { 
  Book, ChevronRight, Shield, AlertTriangle, Users, 
  FileText, Radio, Clock, MapPin, ArrowLeft, Search 
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

export default function ProcessesPage() {
  const [user, setUser] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
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

  const categories = [
    {
      id: 'security-ops',
      title: 'Security Operations',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500',
      procedures: [
        {
          title: 'Post Orders & Standard Operating Procedures',
          description: 'General guidelines for all security posts and assignments',
          content: `
**General Post Orders:**

1. **Appearance & Conduct**
   - Maintain professional appearance at all times
   - Uniform must be clean, pressed, and complete
   - Arrive 15 minutes before shift for proper briefing
   - No personal phone use during active duty

2. **Access Control**
   - Verify all IDs against authorized personnel list
   - Log all visitors in access control system
   - Escort unauthorized personnel off premises
   - Report suspicious activity immediately

3. **Patrol Procedures**
   - Complete scheduled patrols on time
   - Check all doors, windows, and access points
   - Document any irregularities in patrol log
   - Use checkpoint scanning system

4. **Emergency Response**
   - Know location of all emergency equipment
   - Follow emergency action plans
   - Contact supervisor immediately for incidents
   - Complete incident reports within 2 hours

5. **Communication**
   - Monitor radio at all times
   - Use proper radio codes and protocols
   - Report on time for shift changes
   - Maintain communication logs
          `
        },
        {
          title: 'Client Site Protocols',
          description: 'Specific procedures for client locations',
          content: `
**Client Site Standards:**

1. **Arrival Protocol**
   - Check in with site supervisor
   - Review site-specific orders
   - Inspect equipment and post
   - Conduct initial site walkthrough

2. **Client Interaction**
   - Professional and courteous at all times
   - Address clients by proper titles
   - No discussion of sensitive information
   - Refer complex questions to supervisor

3. **Site Security**
   - Maintain visitor logs
   - Control access to restricted areas
   - Monitor CCTV systems
   - Conduct regular perimeter checks

4. **Departure Protocol**
   - Complete end-of-shift report
   - Brief incoming officer
   - Secure all equipment
   - Update supervisor on any issues
          `
        },
        {
          title: 'Executive Protection Procedures',
          description: 'Protocols for EP assignments',
          content: `
**Executive Protection Standards:**

1. **Pre-Assignment**
   - Advance security survey
   - Route planning and alternatives
   - Emergency evacuation procedures
   - Communication protocols

2. **During Assignment**
   - Maintain situational awareness
   - Position for optimal protection
   - Discrete and professional demeanor
   - Continuous threat assessment

3. **Transportation Security**
   - Vehicle inspection before use
   - Secure route selection
   - Counter-surveillance awareness
   - Emergency driving procedures

4. **Post-Assignment**
   - Debrief with team
   - Complete assignment report
   - Equipment check and return
   - Lessons learned documentation
          `
        }
      ]
    },
    {
      id: 'emergency',
      title: 'Emergency Procedures',
      icon: AlertTriangle,
      color: 'from-red-500 to-rose-500',
      procedures: [
        {
          title: 'Fire Emergency Response',
          description: 'Actions to take during fire emergencies',
          content: `
**Fire Emergency Protocol:**

1. **Discovery of Fire**
   - Activate nearest fire alarm
   - Call emergency services (911)
   - Notify supervisor immediately
   - Use radio code: "Code Red"

2. **Evacuation Procedures**
   - Direct occupants to nearest exit
   - Assist persons with disabilities
   - Ensure all areas are cleared
   - Account for all personnel at assembly point

3. **Fire Suppression**
   - Only attempt if fire is small and contained
   - Use appropriate fire extinguisher (PASS method)
   - Never put yourself in danger
   - Evacuate if fire spreads

4. **Post-Emergency**
   - Maintain perimeter security
   - Assist emergency responders
   - Document incident thoroughly
   - Complete incident report
          `
        },
        {
          title: 'Medical Emergency Response',
          description: 'First aid and medical emergency procedures',
          content: `
**Medical Emergency Protocol:**

1. **Initial Response**
   - Assess scene safety
   - Call for medical assistance
   - Use radio code: "Code Blue"
   - Begin first aid if trained

2. **First Aid Priorities**
   - Control severe bleeding
   - Maintain airway and breathing
   - Treat for shock
   - Do not move injured person unless necessary

3. **AED Use (if applicable)**
   - Retrieve AED immediately
   - Follow voice prompts
   - Continue CPR as directed
   - Document all actions taken

4. **Documentation**
   - Time of incident
   - Nature of injury/illness
   - First aid provided
   - EMS arrival and transfer
          `
        },
        {
          title: 'Active Threat Response',
          description: 'Procedures for active shooter or threat situations',
          content: `
**Active Threat Protocol:**

1. **Immediate Actions**
   - Use radio code: "Code Black"
   - Alert all personnel
   - Call 911 immediately
   - Activate lockdown procedures

2. **Run, Hide, Fight**
   - **Run:** Evacuate if safe route available
   - **Hide:** Lock and barricade if evacuation impossible
   - **Fight:** As last resort, defend yourself

3. **During Lockdown**
   - Secure all doors and windows
   - Turn off lights
   - Silence phones
   - Stay away from doors/windows

4. **Law Enforcement Arrival**
   - Follow all commands immediately
   - Keep hands visible
   - Provide information calmly
   - Assist with evacuation when cleared
          `
        },
        {
          title: 'Natural Disaster Response',
          description: 'Hurricane, earthquake, and severe weather procedures',
          content: `
**Natural Disaster Protocol:**

1. **Hurricane Preparation**
   - Monitor weather updates
   - Secure outdoor equipment
   - Review evacuation routes
   - Stock emergency supplies

2. **Earthquake Response**
   - Drop, Cover, and Hold On
   - Stay away from windows
   - After shaking stops, evacuate if safe
   - Check for injuries and hazards

3. **Severe Weather**
   - Move to interior rooms
   - Stay away from windows
   - Monitor weather radio
   - Wait for all-clear signal

4. **Post-Disaster**
   - Assess damage and hazards
   - Report to supervisor
   - Assist with recovery operations
   - Document all damage
          `
        }
      ]
    },
    {
      id: 'communication',
      title: 'Communication Protocols',
      icon: Radio,
      color: 'from-purple-500 to-pink-500',
      procedures: [
        {
          title: 'Radio Communication Standards',
          description: 'Proper radio usage and codes',
          content: `
**Radio Communication Guidelines:**

1. **Radio Etiquette**
   - Think before you speak
   - Keep transmissions brief and clear
   - Speak clearly and at normal pace
   - Wait for clear channel before transmitting

2. **Standard Format**
   - Identify yourself: "This is [call sign]"
   - State recipient: "Calling [call sign]"
   - Wait for acknowledgment
   - Deliver message concisely

3. **Common Radio Codes**
   - 10-4: Acknowledged/Understood
   - 10-20: Location
   - 10-33: Emergency traffic
   - Code Red: Fire emergency
   - Code Blue: Medical emergency
   - Code Black: Active threat
   - Code Yellow: Security breach

4. **Emergency Transmissions**
   - Use "Emergency" or "10-33" prefix
   - State nature of emergency
   - Provide location
   - Request specific assistance needed
          `
        },
        {
          title: 'Incident Reporting',
          description: 'How to properly document and report incidents',
          content: `
**Incident Reporting Standards:**

1. **Immediate Notification**
   - Notify supervisor via radio/phone
   - Provide brief situation overview
   - Request additional resources if needed
   - Secure the scene

2. **Written Report Requirements**
   - Complete within 2 hours of incident
   - Use clear, factual language
   - Include all relevant details
   - Attach photos/evidence if applicable

3. **Report Contents**
   - Date, time, and location
   - Personnel involved
   - Detailed description of events
   - Actions taken
   - Witness information
   - Follow-up required

4. **Confidentiality**
   - Share information on need-to-know basis
   - Do not discuss with unauthorized persons
   - Secure all documentation
   - Follow data protection protocols
          `
        }
      ]
    },
    {
      id: 'training',
      title: 'Training & Certification',
      icon: Book,
      color: 'from-green-500 to-emerald-500',
      procedures: [
        {
          title: 'Mandatory Training Requirements',
          description: 'Required training and recertification schedules',
          content: `
**Training Requirements:**

1. **Initial Training**
   - New hire orientation (8 hours)
   - Basic security procedures (16 hours)
   - First aid/CPR certification
   - Radio communication training

2. **Annual Recertification**
   - First aid/CPR renewal
   - Active shooter response training
   - Fire safety and evacuation
   - Client-specific training updates

3. **Specialized Training**
   - Executive protection course
   - Stop the Bleed certification
   - Defensive tactics
   - Advanced security operations

4. **Training Documentation**
   - Maintain personal training file
   - Submit certificates to HR
   - Track expiration dates
   - Schedule renewals in advance
          `
        },
        {
          title: 'Professional Development',
          description: 'Career advancement and skill development',
          content: `
**Professional Development Opportunities:**

1. **Career Paths**
   - Security Officer → Senior Officer
   - Senior Officer → Team Leader
   - Team Leader → Supervisor
   - Supervisor → Operations Manager

2. **Skill Development**
   - Leadership training
   - Advanced certifications
   - Specialized security skills
   - Technology and systems training

3. **Performance Reviews**
   - Quarterly evaluations
   - Goal setting and tracking
   - Feedback and coaching
   - Promotion opportunities

4. **Continuing Education**
   - Industry conferences
   - Online courses
   - Certification programs
   - Cross-training opportunities
          `
        }
      ]
    }
  ]

  const filteredCategories = categories.map(cat => ({
    ...cat,
    procedures: cat.procedures.filter(proc =>
      proc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proc.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.procedures.length > 0)

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (selectedCategory) {
    const category = categories.find(c => c.id === selectedCategory.id)
    const Icon = category.icon

    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Navigation />
        
        <div className="pt-32 pb-16 px-4 relative z-10">
          <div className="container mx-auto max-w-4xl">
            {/* Back Button */}
            <Button
              onClick={() => setSelectedCategory(null)}
              className="mb-6 bg-gray-800 hover:bg-gray-700 text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Categories
            </Button>

            {/* Category Header */}
            <div className="mb-8">
              <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${category.color} rounded-full mb-4`}>
                <Icon className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">{category.title}</span>
              </div>
            </div>

            {/* Procedures */}
            <div className="space-y-6">
              {selectedCategory.procedures.map((procedure, index) => (
                <div key={index} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl blur-xl opacity-20" />
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{procedure.title}</h3>
                    <p className="text-gray-400 mb-6">{procedure.description}</p>
                    <div className="prose prose-invert max-w-none">
                      <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                        {procedure.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
              Processes & Procedures
            </h1>
            <p className="text-gray-400 text-lg">
              Company protocols, guidelines, and standard operating procedures
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search procedures..."
                className="w-full pl-12 pr-4 py-4 bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCategories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className="group relative text-left"
                >
                  {/* Glowing Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                  
                  {/* Card */}
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 group-hover:scale-105 h-full">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {category.procedures.length} procedure{category.procedures.length !== 1 ? 's' : ''} available
                    </p>
                    
                    {/* Procedures List */}
                    <div className="space-y-2 mb-4">
                      {category.procedures.slice(0, 3).map((proc, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-400">{proc.title}</span>
                        </div>
                      ))}
                      {category.procedures.length > 3 && (
                        <div className="text-sm text-gray-500">
                          +{category.procedures.length - 3} more...
                        </div>
                      )}
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex items-center text-yellow-500 text-sm font-medium">
                      <span className="group-hover:translate-x-1 transition-transform">
                        View Procedures →
                      </span>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* No Results */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No procedures found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

