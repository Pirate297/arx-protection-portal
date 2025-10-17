import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { 
  Radio, Shirt, ArrowLeft, Shield, AlertCircle, Phone
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

export default function CodesPage() {
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState('uniform')
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

  const uniformStandards = {
    general: [
      'All uniforms must be clean, pressed, and in good repair',
      'Name tags must be worn on the right chest at all times',
      'Company patches must be properly affixed to both shoulders',
      'Black tactical boots with proper ankle support required',
      'Belt must be black leather or nylon tactical belt',
      'No visible tattoos or non-regulation jewelry',
      'Hair must be neat and professional in appearance',
      'Facial hair must be neatly trimmed and professional'
    ],
    standard: [
      'Black tactical polo shirt with ARX logo',
      'Black tactical pants with cargo pockets',
      'Black tactical boots',
      'Black tactical belt',
      'ARX baseball cap (optional for outdoor assignments)',
      'Black jacket with ARX patches (cold weather)'
    ],
    executive: [
      'Black suit or blazer',
      'White dress shirt',
      'Black tie',
      'Black dress shoes (polished)',
      'Concealed equipment vest',
      'Earpiece and radio (discrete)'
    ],
    equipment: [
      'Two-way radio with earpiece',
      'Flashlight (Streamlight or equivalent)',
      'Notebook and pen',
      'Company ID badge',
      'First aid kit (individual)',
      'Mobile phone (company issued)',
      'Body armor (when required)',
      'Duty belt with equipment'
    ]
  }

  const radioCodes = [
    { code: '10-1', meaning: 'Receiving poorly / Signal weak' },
    { code: '10-2', meaning: 'Receiving well / Signal good' },
    { code: '10-4', meaning: 'Acknowledged / Understood' },
    { code: '10-5', meaning: 'Relay message' },
    { code: '10-6', meaning: 'Busy / Stand by' },
    { code: '10-7', meaning: 'Out of service' },
    { code: '10-8', meaning: 'In service / Available' },
    { code: '10-9', meaning: 'Repeat last message' },
    { code: '10-10', meaning: 'Negative / No' },
    { code: '10-12', meaning: 'Visitors/Guests present' },
    { code: '10-20', meaning: 'Location / What is your location?' },
    { code: '10-21', meaning: 'Call by telephone' },
    { code: '10-23', meaning: 'Arrived at scene' },
    { code: '10-33', meaning: 'Emergency traffic / Priority' },
    { code: '10-36', meaning: 'Correct time' },
    { code: '10-41', meaning: 'Beginning tour of duty' },
    { code: '10-42', meaning: 'Ending tour of duty' },
    { code: '10-50', meaning: 'Vehicle accident' },
    { code: '10-52', meaning: 'Ambulance needed' },
    { code: '10-66', meaning: 'Suspicious person' },
    { code: '10-71', meaning: 'Shooting' },
    { code: '10-78', meaning: 'Officer needs assistance' },
    { code: '10-97', meaning: 'Arrived at scene' },
    { code: '10-98', meaning: 'Assignment completed' }
  ]

  const colorCodes = [
    { 
      code: 'Code Red', 
      meaning: 'Fire Emergency', 
      action: 'Activate fire alarm, evacuate building, call 911',
      color: 'from-red-500 to-rose-500'
    },
    { 
      code: 'Code Blue', 
      meaning: 'Medical Emergency', 
      action: 'Call for medical assistance, begin first aid if trained',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      code: 'Code Black', 
      meaning: 'Active Threat / Shooter', 
      action: 'Lockdown procedures, call 911, Run-Hide-Fight protocol',
      color: 'from-gray-800 to-gray-900'
    },
    { 
      code: 'Code Yellow', 
      meaning: 'Security Breach', 
      action: 'Secure area, locate breach, notify supervisor',
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      code: 'Code Green', 
      meaning: 'All Clear / Normal Operations', 
      action: 'Resume normal operations, stand down from alert',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      code: 'Code White', 
      meaning: 'Violent Person / Combative Subject', 
      action: 'Request backup, maintain safe distance, call police if needed',
      color: 'from-gray-400 to-gray-500'
    },
    { 
      code: 'Code Silver', 
      meaning: 'Weapon / Armed Person', 
      action: 'Secure area, evacuate if safe, call police immediately',
      color: 'from-gray-300 to-gray-400'
    },
    { 
      code: 'Code Purple', 
      meaning: 'Bomb Threat', 
      action: 'Evacuate building, call police, do not touch suspicious items',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const radioEtiquette = [
    'Always identify yourself before transmitting',
    'Keep transmissions brief and to the point',
    'Speak clearly and at a normal pace',
    'Wait for acknowledgment before continuing',
    'Use proper codes and avoid slang',
    'Listen before transmitting to avoid interference',
    'Use "Emergency" or "10-33" for urgent situations',
    'Maintain professional language at all times',
    'Do not discuss sensitive information over radio',
    'Test radio at beginning of shift'
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
              Uniform & Radio Codes
            </h1>
            <p className="text-gray-400 text-lg">
              Dress code standards and communication protocols
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-8 flex gap-4 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveTab('uniform')}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all
                ${activeTab === 'uniform'
                  ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }
              `}
            >
              <Shirt className="w-5 h-5" />
              Uniform Standards
            </button>
            <button
              onClick={() => setActiveTab('radio')}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all
                ${activeTab === 'radio'
                  ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }
              `}
            >
              <Radio className="w-5 h-5" />
              Radio Codes
            </button>
            <button
              onClick={() => setActiveTab('emergency')}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all
                ${activeTab === 'emergency'
                  ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }
              `}
            >
              <AlertCircle className="w-5 h-5" />
              Emergency Codes
            </button>
          </div>

          {/* Uniform Standards Tab */}
          {activeTab === 'uniform' && (
            <div className="space-y-6">
              {/* General Standards */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl blur-xl opacity-20" />
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">General Standards</h2>
                  </div>
                  <ul className="space-y-3">
                    {uniformStandards.general.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Standard Uniform */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-xl opacity-20" />
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Standard Uniform</h3>
                    <ul className="space-y-2">
                      {uniformStandards.standard.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Executive Protection */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl blur-xl opacity-20" />
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Executive Protection</h3>
                    <ul className="space-y-2">
                      {uniformStandards.executive.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Required Equipment */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl blur-xl opacity-20" />
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Required Equipment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {uniformStandards.equipment.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Radio Codes Tab */}
          {activeTab === 'radio' && (
            <div className="space-y-6">
              {/* Radio Etiquette */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl blur-xl opacity-20" />
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-xl flex items-center justify-center">
                      <Radio className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Radio Etiquette</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {radioEtiquette.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 10-Codes */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-xl opacity-20" />
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">10-Codes</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {radioCodes.map((item, index) => (
                      <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-yellow-400 font-bold text-lg">{item.code}</span>
                        </div>
                        <p className="text-gray-300">{item.meaning}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Emergency Codes Tab */}
          {activeTab === 'emergency' && (
            <div className="space-y-6">
              {colorCodes.map((item, index) => (
                <div key={index} className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-30`} />
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <AlertCircle className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{item.code}</h3>
                        <p className="text-xl text-gray-300 mb-4">{item.meaning}</p>
                        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                          <p className="text-sm font-semibold text-yellow-400 mb-2">IMMEDIATE ACTION:</p>
                          <p className="text-gray-300">{item.action}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

