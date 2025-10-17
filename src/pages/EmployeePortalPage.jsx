import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { Lock, User, Eye, EyeOff, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

export default function EmployeePortalPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Call authentication API
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()

      if (response.ok) {
        // Store token and user info
        localStorage.setItem('arxToken', data.token)
        localStorage.setItem('arxUser', JSON.stringify(data.user))
        
        // Redirect based on role
        if (data.user.role === 'admin' || data.user.role === 'manager' || data.user.role === 'supervisor') {
          navigate('/employee-portal/admin')
        } else {
          navigate('/employee-portal/dashboard')
        }
      } else {
        setError(data.message || 'Invalid credentials')
      }
    } catch (err) {
      setError('Connection error. Please try again.')
    } finally {
      setLoading(false)
    }
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
        <div className="container mx-auto max-w-md">
          {/* Login Card */}
          <div className="relative">
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-2xl blur-xl opacity-50 animate-pulse" />
            
            {/* Main Card */}
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 shadow-2xl">
              {/* Logo/Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full blur-xl opacity-50 animate-pulse" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Employee Portal
              </h1>
              <p className="text-gray-400 text-center mb-8">
                Secure access for ARX Protection team members
              </p>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
                  <p className="text-red-400 text-sm text-center">{error}</p>
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-6">
                {/* Username Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      placeholder="Enter your username"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-yellow-600 bg-gray-800 border-gray-600 rounded focus:ring-yellow-500 focus:ring-2"
                    />
                    <span className="ml-2 text-sm text-gray-400">Remember me</span>
                  </label>
                  <button
                    type="button"
                    className="text-sm text-yellow-500 hover:text-yellow-400 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Logging in...
                    </div>
                  ) : (
                    'Login to Portal'
                  )}
                </Button>
              </form>

              {/* Help Text */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Need access? Contact your supervisor or{' '}
                  <a href="mailto:info@arxglobalprotection.com" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                    IT support
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              🔒 Secure connection • Your data is encrypted and protected
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

