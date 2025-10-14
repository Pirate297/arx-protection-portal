import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Shield, Lock, Camera, Users, Award, CheckCircle, Phone, Mail, MapPin, ChevronRight } from 'lucide-react'
import './App.css'

function App() {
  const [activeService, setActiveService] = useState(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Shield className="h-10 w-10 text-gold" />
              <div>
                <h1 className="text-2xl font-bold text-white">ARX Protection</h1>
                <p className="text-xs text-gold">Elite Security Services</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-gold transition-colors">Home</a>
              <a href="#services" className="text-white hover:text-gold transition-colors">Services</a>
              <a href="#about" className="text-white hover:text-gold transition-colors">About</a>
              <a href="#contact" className="text-white hover:text-gold transition-colors">Contact</a>
            </div>
            <Button className="bg-gold text-black hover:bg-gold/90">
              Get Consultation
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Your Protection in an <span className="text-gold">Imperfect World</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Elite security and protective services for Aruba and the Caribbean. Trusted by luxury brands and government entities since 2020.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold text-black hover:bg-gold/90 text-lg px-8 py-6">
                Request Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 text-lg px-8 py-6">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center text-gray-600 text-sm uppercase tracking-wider mb-8">Trusted By Leading Organizations</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {['Louis Vuitton', 'Gucci', 'Tiffany & Co.', 'Government of Aruba', 'Fortune 500'].map((client) => (
              <div key={client} className="text-center">
                <p className="text-lg font-semibold text-gray-700">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined security solutions across three comprehensive service pillars
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1: Protection Services */}
            <Card className="border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-gold" />
                </div>
                <CardTitle className="text-2xl">Protection Services</CardTitle>
                <CardDescription className="text-base">
                  Professional security personnel and rapid response
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Executive & VIP Protection',
                    'Close Protection Services',
                    'Fast Response Teams',
                    'Event Security & Crowd Control',
                    'Commercial Security Officers'
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-black text-white hover:bg-gray-800">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Service 2: Security Technology */}
            <Card className="border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Camera className="h-8 w-8 text-gold" />
                </div>
                <CardTitle className="text-2xl">Security Technology</CardTitle>
                <CardDescription className="text-base">
                  Advanced systems and ongoing monitoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Ajax Alarm Systems',
                    'Surveillance Camera Installation',
                    'Solar Security Cameras',
                    'System Maintenance & Monitoring',
                    'Physical Security Testing'
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-black text-white hover:bg-gray-800">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Service 3: Specialized Services */}
            <Card className="border-2 border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-gold" />
                </div>
                <CardTitle className="text-2xl">Specialized Services</CardTitle>
                <CardDescription className="text-base">
                  High-value solutions and professional development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Armored Transport',
                    'Executive Chauffeuring',
                    'Tour Management',
                    'Security Training & Certifications'
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-black text-white hover:bg-gray-800">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">About ARX Protection</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2020, ARX Global Protection is an independent private security and training company that strives to uphold the highest industry standards in each of the areas in which we operate.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From close protection to executive chauffeuring to tour management, we pride ourselves in providing a unique and unrivalled service displaying the utmost professionalism and discretion.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-gold mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black">Fortune 500 Experience</h4>
                    <p className="text-sm text-gray-600">Corporate security expertise</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-gold mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black">Expert Team</h4>
                    <p className="text-sm text-gray-600">25+ years combined experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-gold">Our Mission</h3>
              <p className="text-lg mb-6">
                In an ever-changing security landscape, we provide stability, expertise, and unwavering commitment to our clients' safety.
              </p>
              <p className="text-lg">
                Your safety deserves undivided attention. Trust ARX Protective Services to fortify your world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Ready to elevate your security? Contact us for a personalized consultation.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Request a Consultation</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Full Name" className="w-full" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email Address" className="w-full" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Phone Number" className="w-full" />
                  </div>
                  <div>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>Service Interest</option>
                      <option>Protection Services</option>
                      <option>Security Technology</option>
                      <option>Specialized Services</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <Textarea placeholder="Tell us about your security needs..." className="w-full min-h-32" />
                  </div>
                  <Button className="w-full bg-gold text-black hover:bg-gold/90 text-lg py-6">
                    Request Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Phone</h4>
                      <p className="text-gray-600">+297 560 2299</p>
                      <p className="text-sm text-gray-500 mt-1">24/7 Emergency Response Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email</h4>
                      <p className="text-gray-600">info@arxglobalprotection.com</p>
                      <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Office Location</h4>
                      <p className="text-gray-600">Cumana 78R, Unit 2</p>
                      <p className="text-gray-600">Oranjestad, Aruba</p>
                      <p className="text-sm text-gray-500 mt-1">Monday - Friday, 9:00 AM - 5:00 PM AST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-gold" />
                <span className="text-xl font-bold">ARX Protection</span>
              </div>
              <p className="text-gray-400 text-sm">
                Elite security and protective services for Aruba and the Caribbean since 2020.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-gray-400 hover:text-gold transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-gold transition-colors">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-gold transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gold">Services</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">Protection Services</li>
                <li className="text-gray-400">Security Technology</li>
                <li className="text-gray-400">Specialized Services</li>
                <li className="text-gray-400">Security Training</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gold">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+297 560 2299</li>
                <li>info@arxglobalprotection.com</li>
                <li>Cumana 78R, Unit 2</li>
                <li>Oranjestad, Aruba</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 ARX Global Protection LLC. All rights reserved.
            </p>
            <p className="text-gold text-sm mt-2">Your Protection in an Imperfect World</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

