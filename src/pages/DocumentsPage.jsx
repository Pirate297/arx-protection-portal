import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { 
  FileText, Download, Search, Folder, ArrowLeft,
  File, Shield, Clipboard, BookOpen, AlertCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

export default function DocumentsPage() {
  const [user, setUser] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
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

  const documents = [
    {
      id: 1,
      title: 'Employee Handbook 2025',
      description: 'Complete guide to company policies and procedures',
      category: 'policies',
      type: 'PDF',
      size: '2.4 MB',
      lastUpdated: '2025-01-01',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Incident Report Form',
      description: 'Standard form for documenting security incidents',
      category: 'forms',
      type: 'PDF',
      size: '156 KB',
      lastUpdated: '2024-12-15',
      icon: Clipboard,
      color: 'from-red-500 to-rose-500'
    },
    {
      id: 3,
      title: 'Daily Activity Report',
      description: 'Template for daily shift reports',
      category: 'forms',
      type: 'PDF',
      size: '124 KB',
      lastUpdated: '2024-12-15',
      icon: FileText,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Time Off Request Form',
      description: 'Submit vacation and time off requests',
      category: 'forms',
      type: 'PDF',
      size: '98 KB',
      lastUpdated: '2024-11-20',
      icon: Clipboard,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 5,
      title: 'Code of Conduct',
      description: 'Professional standards and ethical guidelines',
      category: 'policies',
      type: 'PDF',
      size: '1.2 MB',
      lastUpdated: '2025-01-01',
      icon: Shield,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 6,
      title: 'Safety Procedures Manual',
      description: 'Comprehensive safety and emergency procedures',
      category: 'training',
      type: 'PDF',
      size: '3.8 MB',
      lastUpdated: '2024-12-01',
      icon: AlertCircle,
      color: 'from-red-500 to-rose-500'
    },
    {
      id: 7,
      title: 'Equipment Checkout Form',
      description: 'Form for checking out company equipment',
      category: 'forms',
      type: 'PDF',
      size: '112 KB',
      lastUpdated: '2024-10-15',
      icon: Clipboard,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 8,
      title: 'Radio Communication Guide',
      description: 'Radio codes and communication protocols',
      category: 'training',
      type: 'PDF',
      size: '856 KB',
      lastUpdated: '2024-11-10',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 9,
      title: 'Uniform Standards Guide',
      description: 'Dress code and uniform requirements',
      category: 'policies',
      type: 'PDF',
      size: '1.5 MB',
      lastUpdated: '2024-12-01',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 10,
      title: 'Client Contact Directory',
      description: 'Contact information for all client sites',
      category: 'reference',
      type: 'PDF',
      size: '245 KB',
      lastUpdated: '2025-01-15',
      icon: FileText,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 11,
      title: 'Emergency Response Procedures',
      description: 'Quick reference guide for emergencies',
      category: 'training',
      type: 'PDF',
      size: '678 KB',
      lastUpdated: '2024-12-01',
      icon: AlertCircle,
      color: 'from-red-500 to-rose-500'
    },
    {
      id: 12,
      title: 'Performance Review Form',
      description: 'Employee evaluation and feedback form',
      category: 'forms',
      type: 'PDF',
      size: '189 KB',
      lastUpdated: '2024-11-01',
      icon: Clipboard,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 13,
      title: 'Training Completion Certificate',
      description: 'Template for training certifications',
      category: 'training',
      type: 'PDF',
      size: '234 KB',
      lastUpdated: '2024-10-20',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 14,
      title: 'Confidentiality Agreement',
      description: 'Non-disclosure and confidentiality policy',
      category: 'policies',
      type: 'PDF',
      size: '567 KB',
      lastUpdated: '2025-01-01',
      icon: Shield,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 15,
      title: 'Site Access Log Template',
      description: 'Visitor and access control log',
      category: 'forms',
      type: 'PDF',
      size: '145 KB',
      lastUpdated: '2024-12-15',
      icon: Clipboard,
      color: 'from-cyan-500 to-blue-500'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Documents', icon: Folder },
    { id: 'forms', label: 'Forms', icon: Clipboard },
    { id: 'policies', label: 'Policies', icon: Shield },
    { id: 'training', label: 'Training Materials', icon: BookOpen },
    { id: 'reference', label: 'Reference', icon: FileText }
  ]

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
              Documents & Resources
            </h1>
            <p className="text-gray-400 text-lg">
              Access forms, policies, training materials, and reference documents
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search documents..."
                className="w-full pl-12 pr-4 py-4 bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map(category => {
                const Icon = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`
                      flex items-center gap-2 px-4 py-3 rounded-xl font-medium whitespace-nowrap transition-all
                      ${selectedCategory === category.id
                        ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    {category.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map(doc => {
              const Icon = doc.icon
              return (
                <div key={doc.id} className="group relative">
                  {/* Glowing Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${doc.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                  
                  {/* Card */}
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 group-hover:scale-105 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${doc.color} rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 flex-1">
                      {doc.description}
                    </p>
                    
                    {/* Metadata */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>{doc.type} • {doc.size}</span>
                      <span>Updated {new Date(doc.lastUpdated).toLocaleDateString()}</span>
                    </div>
                    
                    {/* Download Button */}
                    <Button
                      className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* No Results */}
          {filteredDocuments.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No documents found matching your search.</p>
            </div>
          )}

          {/* Help Section */}
          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl blur-xl opacity-20" />
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Need a Document?</h3>
              <p className="text-gray-400 mb-4">
                Can't find what you're looking for? Contact your supervisor or HR department for assistance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gray-800 hover:bg-gray-700 text-white">
                  Contact HR
                </Button>
                <Button className="bg-gray-800 hover:bg-gray-700 text-white">
                  Request Document
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

