import Navigation from '../components/Navigation';

import { Shield, Camera, Users, Plane, AlertCircle, Lock, Radio, Search } from 'lucide-react';

export default function ServicesPage() {
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  const conciergeServices = [
    "Secure Transportation & Airport VIP Fast-Track",
    "Meet & Greet / Personal Escort",
    "Expedited Immigration & Customs",
    "Priority Luggage Handling",
    "VIP Lounge Access",
    "Dining Reservations & Private Chefs",
    "Activities & Experiences",
    "Nature & Adventure Tours",
    "Vendor Coordination",
    "Secure Venue Selection & Event Support"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive security solutions tailored to your specific needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-yellow-600 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concierge Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-6 text-center">On-Island Concierge Services</h2>
            <p className="text-gray-600 mb-8 text-center">
              While ARX's core focus remains your protection, we elevate your entire Caribbean experience through bespoke concierge support.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {conciergeServices.map((service, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg">
                  <span className="text-yellow-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your World?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a customized security consultation
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300"
          >
            Request Consultation
          </a>
        </div>
      </section>


    </div>
  );
}

