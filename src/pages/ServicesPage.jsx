import React, { useState, useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import { Shield, Camera, Users, Plane, AlertCircle, Lock, Radio, Search, CheckCircle, Star, Zap, Eye } from 'lucide-react';

export default function ServicesPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Shield,
      title: "Executive Protection Services",
      description: "Personal protection requires customized solutions for any duration, emphasizing a balance between safety measures tailored to identified risks and minimal disruption to daily life.",
      features: [
        "Risk Assessment & Planning",
        "Specific Threat Analysis",
        "Local Liaison Coordination",
        "Close Protection & Personal Detail",
        "Individual or Team Assignments",
        "Residential & Resort Security",
        "24/7 Protective Coverage"
      ],
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Users,
      title: "Event Security",
      description: "ARX prioritizes event security by creating tailored plans to proactively and reactively address challenges at major events and attractions.",
      features: [
        "Customized Security Plans",
        "Crowd & Traffic Management",
        "Emergency Services Coordination",
        "Visible Uniformed Personnel",
        "Undercover Officers",
        "Bag Searches & Access Control",
        "Risk Mitigation Strategies"
      ],
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Lock,
      title: "Executive Doormen",
      description: "Our elite doormen service combines unparalleled professionalism with a touch of luxury, ensuring your premises remain secure and exude an inviting atmosphere.",
      features: [
        "High-End Establishment Specialists",
        "Security & Customer Service",
        "Access Management",
        "Guest Assistance",
        "Discretion & Professionalism",
        "Prestige Brand Representation"
      ],
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Camera,
      title: "Commercial Security",
      description: "Highly trained access control personnel dedicated to ensuring safety and security for your building.",
      features: [
        "Access Control Personnel",
        "Authorized Entry Management",
        "Professional Vigilance",
        "Asset & People Protection",
        "Human-Centric Security",
        "Welcoming Environment"
      ],
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: AlertCircle,
      title: "Fast Response Team",
      description: "Rapid deployment security teams ready to respond to emergencies and security threats at a moment's notice.",
      features: [
        "24/7 Emergency Response",
        "Rapid Deployment",
        "Threat Assessment",
        "Crisis Management",
        "Coordinated Response"
      ],
      color: "from-red-400 to-rose-500"
    },
    {
      icon: Search,
      title: "Bug Sweeping Services",
      description: "Technical surveillance counter-measures to detect and eliminate electronic eavesdropping devices.",
      features: [
        "Electronic Surveillance Detection",
        "Counter-Surveillance Measures",
        "Privacy Protection",
        "Confidential Sweeps",
        "Technical Expertise"
      ],
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Camera,
      title: "Surveillance & Alarm Systems",
      description: "Professional installation and monitoring of advanced security systems.",
      features: [
        "AJAX Alarm Systems",
        "Surveillance Camera Installation",
        "Solar Security Cameras",
        "System Maintenance",
        "24/7 Monitoring Services"
      ],
      color: "from-teal-400 to-green-500"
    },
    {
      icon: Radio,
      title: "Physical Building Penetration Testing",
      description: "Comprehensive security assessments to identify vulnerabilities in your physical security infrastructure.",
      features: [
        "Security Vulnerability Assessment",
        "Access Point Testing",
        "Detailed Reporting",
        "Remediation Recommendations",
        "Follow-up Verification"
      ],
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Plane,
      title: "Aerial & Counter-Drone Services",
      description: "Advanced aerial surveillance and protection using cutting-edge drone technology.",
      features: [
        "Aerial Surveillance & Monitoring",
        "Event Coverage & Security",
        "Perimeter Patrol",
        "Emergency Response Support",
        "Search & Rescue Operations",
        "Real-Time Video Transmission",
        "Night Operations with Spotlight",
        "Public Address via Speaker",
        "RTK Precision Positioning",
        "Anti-Drone Services (Coming Q1 2026)"
      ],
      color: "from-indigo-400 to-purple-500"
    }
  ];

  const conciergeServices = [
    { icon: Shield, text: "Secure Transportation & Airport VIP Fast-Track" },
    { icon: Users, text: "Meet & Greet / Personal Escort" },
    { icon: Zap, text: "Expedited Immigration & Customs" },
    { icon: Star, text: "Priority Luggage Handling" },
    { icon: Eye, text: "VIP Lounge Access" },
    { icon: CheckCircle, text: "Dining Reservations & Private Chefs" },
    { icon: Star, text: "Activities & Experiences" },
    { icon: Plane, text: "Nature & Adventure Tours" },
    { icon: Users, text: "Vendor Coordination" },
    { icon: Shield, text: "Secure Venue Selection & Event Support" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section with Parallax */}
      <section 
        className="relative pt-32 pb-24 overflow-hidden"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(234, 179, 8, 0.15) 0%, rgba(0, 0, 0, 0) 50%)`,
        }}
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-services" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(234, 179, 8, 0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-services)" />
          </svg>
        </div>

        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent"
              style={{
                animation: 'fadeInUp 1s ease-out',
              }}
            >
              Our Services
            </h1>
            <p 
              className="text-xl md:text-2xl text-gray-300 mb-8"
              style={{
                animation: 'fadeInUp 1s ease-out 0.2s both',
              }}
            >
              Comprehensive security solutions tailored to your specific needs
            </p>
            
            {/* Scroll Indicator */}
            <div 
              className="inline-block mt-12"
              style={{
                animation: 'bounce 2s infinite',
              }}
            >
              <Shield className="w-12 h-12 text-yellow-500" />
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-24 relative">
        {/* Radial Dot Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(234, 179, 8, 0.5) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                id={`service-${index}`}
                className="group relative"
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
                style={{
                  animation: visibleSections[`service-${index}`] ? `fadeInUp 0.7s ease-out ${index * 0.1}s both` : 'none',
                }}
              >
                {/* Glass Card */}
                <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border-2 border-gray-700 rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/20">
                  
                  {/* Icon with Glow */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start group/item"
                        style={{
                          animation: activeService === index ? `slideIn 0.3s ease-out ${idx * 0.05}s both` : 'none',
                        }}
                      >
                        <CheckCircle className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                        <span className="text-gray-300 text-sm group-hover/item:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:via-yellow-500/10 group-hover:to-yellow-500/5 rounded-3xl transition-all duration-500 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-10px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </section>

      {/* Concierge Services Section */}
      <section id="concierge" className="py-24 relative overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, rgba(0, 0, 0, 0) 50%)`,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div 
              className="text-center mb-16"
              style={{
                animation: visibleSections['concierge'] ? 'fadeInUp 0.7s ease-out both' : 'none',
              }}
            >
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                On-Island Concierge Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                While ARX's core focus remains your protection, we elevate your entire Caribbean experience through bespoke concierge support.
              </p>
            </div>

            {/* Concierge Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {conciergeServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    animation: visibleSections['concierge'] ? `fadeInUp 0.7s ease-out ${index * 0.05}s both` : 'none',
                  }}
                >
                  <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border-2 border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20">
                    {/* Icon */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                        <div className="relative w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Text */}
                      <span className="text-gray-300 text-lg group-hover:text-white transition-colors duration-300 flex-1">
                        {service.text}
                      </span>
                      
                      {/* Checkmark */}
                      <CheckCircle className="h-6 w-6 text-blue-500 group-hover:scale-125 transition-transform duration-300" />
                    </div>

                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/10 group-hover:to-blue-500/5 rounded-2xl transition-all duration-500 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(234, 179, 8, 0.2) 0%, rgba(0, 0, 0, 0) 50%)`,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-2xl border-2 border-yellow-500/50 rounded-3xl p-12 shadow-2xl shadow-yellow-500/20">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 rounded-3xl opacity-20 blur-xl animate-pulse" />
              
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Ready to Secure Your World?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how ARX Protection can provide tailored security solutions for your specific needs.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-bold px-8 py-4 rounded-xl hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50"
                >
                  <Shield className="h-5 w-5" />
                  Request Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

