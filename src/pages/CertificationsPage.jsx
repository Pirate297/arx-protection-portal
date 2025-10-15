import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { Shield, Award, CheckCircle } from 'lucide-react';

export default function CertificationsPage() {
  const [doorsOpen, setDoorsOpen] = useState(false);

  useEffect(() => {
    // Open doors after a short delay
    const timer = setTimeout(() => {
      setDoorsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Castle Door Animation */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">Official Certifications</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ARX Protection maintains the highest standards of certification and compliance
            </p>
          </div>

          {/* Castle Door Animation */}
          <div className="relative max-w-4xl mx-auto h-96 flex items-center justify-center perspective-1000">
            {/* Left Door */}
            <div 
              className={`absolute left-0 w-1/2 h-full bg-gradient-to-r from-gray-800 to-gray-700 border-r-4 border-yellow-600 transition-all duration-1500 ease-out origin-left ${
                doorsOpen ? '-translate-x-full rotate-y-90' : ''
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transform: doorsOpen ? 'perspective(1000px) rotateY(-90deg)' : 'perspective(1000px) rotateY(0deg)',
                boxShadow: '0 0 50px rgba(0,0,0,0.5)'
              }}
            >
              <div className="h-full flex items-center justify-center">
                <Shield className="w-24 h-24 text-yellow-600" />
              </div>
            </div>

            {/* Right Door */}
            <div 
              className={`absolute right-0 w-1/2 h-full bg-gradient-to-l from-gray-800 to-gray-700 border-l-4 border-yellow-600 transition-all duration-1500 ease-out origin-right ${
                doorsOpen ? 'translate-x-full rotate-y-90' : ''
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transform: doorsOpen ? 'perspective(1000px) rotateY(90deg)' : 'perspective(1000px) rotateY(0deg)',
                boxShadow: '0 0 50px rgba(0,0,0,0.5)'
              }}
            >
              <div className="h-full flex items-center justify-center">
                <Award className="w-24 h-24 text-yellow-600" />
              </div>
            </div>

            {/* Content Behind Doors */}
            <div className={`transition-all duration-1000 ${doorsOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <div className="text-center">
                <h2 className="text-4xl font-bold text-yellow-600 mb-4">Certified Excellence</h2>
                <p className="text-xl text-gray-300">Government & Industry Recognition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NATO CAGE Number Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-12 h-12 text-yellow-600" />
                  <h2 className="text-4xl font-bold text-black">NATO CAGE Number</h2>
                </div>
                
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full">
                    Government Certification
                  </span>
                  <div className="bg-blue-900 text-white px-6 py-3 rounded-lg border-2 border-blue-700">
                    <span className="text-sm font-semibold">CAGE Code:</span>
                    <span className="text-2xl font-bold ml-2">#SLHT3</span>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-6">
                  ARX Protection is an <strong>authorized supplier</strong> for government and military contracts 
                  with full international procurement compliance through our NATO Commercial and Government Entity (CAGE) Code <strong>#SLHT3</strong>.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-black mb-1">Global Recognition</h3>
                      <p className="text-gray-600">Recognized by NATO member countries and international defense organizations</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-black mb-1">Government Contracts</h3>
                      <p className="text-gray-600">Qualified to bid on and fulfill government and military security contracts</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-black mb-1">Compliance Standards</h3>
                      <p className="text-gray-600">Meets stringent international procurement and security compliance requirements</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border-2 border-gray-200">
                <img 
                  src="/certifications/nato-cage-certificate.jpg" 
                  alt="NATO CAGE Certificate" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AHATA Membership Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
                  <img 
                    src="/certifications/ahata-logo.png" 
                    alt="AHATA Logo" 
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-12 h-12 text-yellow-600" />
                  <h2 className="text-4xl font-bold text-black">AHATA Member</h2>
                </div>
                
                <div className="mb-6">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full">
                    Industry Association
                  </span>
                </div>

                <p className="text-lg text-gray-700 mb-6">
                  As a proud member of the <strong>Aruba Hotel & Tourism Association (AHATA)</strong>, ARX Protection 
                  integrates world-class security excellence with Aruba's renowned hospitality standards.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-black mb-1">Hospitality Integration</h3>
                      <p className="text-gray-600">Deep understanding of luxury hospitality and tourism security requirements</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-black mb-1">Industry Excellence</h3>
                      <p className="text-gray-600">Bruce Henriquez honored with AHATA Excellence Award for outstanding service</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-black mb-1">Local Partnership</h3>
                      <p className="text-gray-600">Active participation in Aruba's tourism and hospitality community</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Affiliations Summary */}
      <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Additional Professional Affiliations</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all">
                <div className="bg-white p-4 rounded-lg mb-4">
                  <img src="/certifications/bepp-logo.png" alt="Board of Executive Protection Professionals" className="w-full h-auto" />
                </div>
                <h3 className="text-xl font-bold text-yellow-600 mb-2">Board of Executive Protection Professionals</h3>
                <p className="text-sm text-gray-300 mb-2">Board Member</p>
                <p className="text-xs text-gray-400">Leadership in professional executive protection standards</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all">
                <div className="bg-white p-4 rounded-lg mb-4">
                  <img src="/certifications/asis-logo.png" alt="ASIS International" className="w-full h-auto" />
                </div>
                <h3 className="text-xl font-bold text-yellow-600 mb-2">ASIS International</h3>
                <p className="text-sm text-gray-300 mb-2">Member</p>
                <p className="text-xs text-gray-400">World's largest security management organization</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all">
                <div className="bg-white p-4 rounded-lg mb-4">
                  <img src="/certifications/iappa-logo.jpg" alt="IAPPA" className="w-full h-auto" />
                </div>
                <h3 className="text-xl font-bold text-yellow-600 mb-2">IAPPA</h3>
                <p className="text-sm text-gray-300 mb-2">Member</p>
                <p className="text-xs text-gray-400">International Association of Personal Protection Agents</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

