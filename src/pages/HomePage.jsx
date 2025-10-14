import { Button } from '@/components/ui/button.jsx'
import { Shield, Lock, Camera, Plane } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{backgroundImage: "url('/photos/WhatsAppImage2025-09-22at12.25.23.jpeg')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/85 to-black/90"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6">
            <p className="text-gold text-sm font-semibold">Elite Security Services Since 2020</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Protection in an<br />
            <span className="text-gold">Imperfect World</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ARX Protection provides elite security and protective services across Aruba and the Caribbean with unmatched professionalism and discretion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gold text-black hover:bg-gold/90 text-lg px-8 py-6">
                Request Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive security solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/services" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gold">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <Shield className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Protection Services</h3>
                <p className="text-gray-600 mb-4">Executive protection, VIP security, and rapid response teams</p>
                <p className="text-gold font-semibold">Learn More →</p>
              </div>
            </Link>

            <Link to="/services" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gold">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <Camera className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Security Technology</h3>
                <p className="text-gray-600 mb-4">AJAX alarm systems, surveillance cameras, and monitoring</p>
                <p className="text-gold font-semibold">Learn More →</p>
              </div>
            </Link>

            <Link to="/services" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gold">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <Lock className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Specialized Services</h3>
                <p className="text-gray-600 mb-4">Executive chauffeuring, tour management, and training</p>
                <p className="text-gold font-semibold">Learn More →</p>
              </div>
            </Link>

            <Link to="/services" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gold">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <Plane className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Aerial & Counter-Drone</h3>
                <p className="text-gray-600 mb-4">Advanced drone surveillance and anti-drone protection</p>
                <p className="text-gold font-semibold">Learn More →</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Clients & Partners */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-black mb-2">Trusted By Leading Organizations</h3>
            <p className="text-gray-600">Providing elite security services to prestigious clients across Aruba and the Caribbean</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <img src="/clients/louis-vuitton.png" alt="Louis Vuitton" className="h-16 object-contain" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <img src="/clients/gucci.png" alt="Gucci" className="h-16 object-contain" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <img src="/clients/tiffany-co.png" alt="Tiffany & Co." className="h-16 object-contain" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <img src="/clients/government-aruba.png" alt="Government of Aruba" className="h-20 object-contain" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <img src="/clients/aruba-ports-authority.png" alt="Aruba Ports Authority" className="h-16 object-contain" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <img src="/clients/rolex.png" alt="Rolex" className="h-16 object-contain" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <img src="/clients/david-yurman.png" alt="David Yurman" className="h-16 object-contain" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <img src="/clients/gandelman.webp" alt="Gandelman Jewelers" className="h-16 object-contain" />
            </div>
          </div>
          
          <div className="text-center mt-16 mb-8">
            <h3 className="text-2xl font-bold text-black mb-2">Official Partners</h3>
          </div>
          <div className="flex justify-center">
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <img src="/photos/ARXAJAX.png" alt="AJAX Systems - Official Partner" className="h-20 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Secure Your World?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a personalized security consultation
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gold text-black hover:bg-gold/90 text-lg px-8 py-6">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

