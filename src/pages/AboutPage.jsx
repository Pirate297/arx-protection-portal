import Navigation from '../components/Navigation';
import MissionVision from '../components/MissionVision';

import { Award, Users, Shield, Target, Globe, Briefcase, GraduationCap, CheckCircle, Building2 } from 'lucide-react';

export default function AboutPage() {
  const team = [
    {
      name: "Alexander Tsu",
      role: "Founder & CEO",
      credential: "CPO, Executive Protection Instructor",
      experience: "7+ Years",
      description: "Elite executive protection specialist with extensive experience protecting Fortune 500 CEOs, heads of state, and high-profile dignitaries worldwide.",
      certifications: [
        "Executive Protection Operations (SIG Sauer)",
        "ASIS Essentials of Executive Protection", 
        "Law Enforcement Instructor (IAPPA)",
        "TCCC - Tactical Combat Casualty Care (NAEMT)",
        "Stop the Bleed Instructor (ACS & DoD)",
        "Drone Pilot Certified (UAV Coach)",
        "AJAX Intrusion Specialist",
        "Train the Trainer (Chameleon Associates)",
        "EMS Vehicle Operator Safety",
        "TCCC CLS (EBSSA)",
        "Board of Executive Professionals",
        "Multiple FEMA Certifications"
      ],
      languages: ["English", "Papiamento", "Dutch", "Spanish"],
      specialAchievement: "International Executive & Diplomatic Protection",
      photo: "/team/alexander.jpeg",
      contactUrl: "https://hihello.me/p/f5c16eb4-6a9d-4563-95a2-de56f289c66e"
    },
    {
      name: "Cedric Wever",
      role: "Co-Founder & Technical Director",
      credential: "CPO, Executive Protection Agent",
      experience: "25+ Years",
      description: "With 25 years of expertise in electrical and technical security, Cedric leads ARX's technical departments, specializing in alarm systems, surveillance, and counter-surveillance operations.",
      certifications: ["Executive Protection Agent (US & Colombia)", "Executive Protection Instructor", "First Aid/CPR", "STOP Instructor"],
      languages: ["English", "Papiamento", "Dutch", "Spanish"],
      photo: "/team/cedric.jpeg",
      contactUrl: "https://hihello.me/p/7f072a28-3135-4162-825b-42e37722e33a"
    },
    {
      name: "Millicent Alvarez",
      role: "Operations Director",
      credential: "Certified Hospitality Trainer",
      experience: "10+ Years",
      description: "With over a decade of hospitality industry expertise, Millicent excels in managing luxury operations, leading high-performing teams, and driving transformative quality improvements.",
      certifications: ["Rooms Division Certification", "Hospitality Trainer", "Operations Management"],
      languages: ["English", "Papiamento", "Dutch", "Spanish"],
      photo: "/team/millicent.jpeg",
      contactUrl: "https://www.linkedin.com/in/millicentalvarez"
    },
    {
      name: "Bruce Henriquez",
      role: "Protection Supervisor",
      credential: "CPO, AHATA Excellence Award Winner",
      experience: "Since 2020",
      description: "As Protection Supervisor since ARX's inception, Bruce's dedication and leadership have been instrumental in upholding world-class protection service standards.",
      certifications: ["Certified Protection Officer", "First Aid/CPR", "Aruba Excellence Certification"],
      achievement: "AHATA Excellence Award Winner",
      languages: ["English", "Papiamento", "Dutch", "Spanish"],
      photo: "/team/bruce.jpeg",
      contactUrl: "https://hihello.me/p/bc58f447-7c78-419c-8eef-a37dc80d37b4"
    },
    {
      name: "Dijon Inesia",
      role: "Protection Supervisor",
      credential: "CPO, Protection Specialist",
      experience: "Since 2020",
      description: "Dedicated security professional committed to maintaining the highest standards of protection and service, ensuring operational excellence in all assignments.",
      certifications: ["Certified Protection Officer", "First Aid/CPR", "Aruba Excellence Certification"],
      languages: ["English", "Papiamento", "Dutch", "Spanish"],
      photo: "/team/dijon.jpeg",
      contactUrl: "https://hihello.me/p/88e009be-5acc-422d-a982-06dbe81dccd4"
    }
  ];

  const affiliations = [
    {
      name: "NATO CAGE Number",
      description: "Authorized supplier for government and military contracts with international procurement compliance",
      icon: Shield,
      type: "Government Certification"
    },
    {
      name: "Board of Executive Protection Professionals",
      description: "Board Member - Leadership in professional executive protection standards and development",
      icon: Users,
      type: "Board Membership"
    },
    {
      name: "ASIS International",
      description: "Member - World's largest organization for security management professionals",
      icon: Building2,
      type: "Professional Association"
    },
    {
      name: "IAPPA",
      description: "Member - International Association of Personal Protection Agents",
      icon: Shield,
      type: "Professional Association"
    },
    {
      name: "AHATA",
      description: "Member - Aruba Hotel & Tourism Association, integrating security excellence with hospitality standards",
      icon: Building2,
      type: "Industry Association"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">About ARX Protection</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Your safety deserves undivided attention
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8">Company Introduction</h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                ARX Protection Aruba offers a complete range of protection services for the island of Aruba. 
                All of our employees are trained to the highest of standards, including skills in residential 
                and commercial security, defensive driving, close protection and surveillance system installation.
              </p>
              
              <p>
                We pride ourselves on building long-standing, professional relationships with our clients, and 
                providing polite and professional service at all times.
              </p>
              
              <p>
                Our mission is to provide protection and security to our clients through a bespoke service 
                tailored to their specific needs. Ultimately, the safety and security of the client's staff, 
                premises, assets and the general public is our highest priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8">Our Values</h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                As a company and as individuals we value above all else <strong>honesty, integrity, 
                unselfishness, professionalism and mutual respect</strong>. We hold ourselves accountable 
                to our clients, staff and partners by honoring our commitments, providing results and 
                continually striving to provide the highest quality services.
              </p>
              
              <p>
                We are committed to the ongoing improvement of the services we provide to our clients. 
                By investing in and developing our most important assets, our staff, we aim to achieve 
                all our goals and exceed our clients' expectations.
              </p>
              
              <p>
                Through our commitment to high standards it is our vision to earn the trust of our clients 
                by delivering the best quality services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-4">Meet Our Management Team</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our leadership team brings decades of combined experience in executive protection, 
            security operations, and client service excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-yellow-600 hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="w-28 h-28 mx-auto mb-3 overflow-hidden rounded-full border-4 border-yellow-600">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                </div>
                
                <h3 className="text-lg font-bold text-black text-center mb-1">{member.name}</h3>
                <p className="text-yellow-600 text-center font-semibold text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-center text-xs mb-3">{member.credential}</p>
                
                <div className="flex items-center justify-center gap-1 mb-3">
                  <Briefcase className="w-3 h-3 text-yellow-600" />
                  <span className="text-xs text-gray-600">{member.experience}</span>
                </div>
                
                <p className="text-gray-600 text-xs text-center mb-3 flex-grow">{member.description}</p>
                
                {member.specialAchievement && (
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-300 rounded-md p-2 mb-3">
                    <div className="flex items-center justify-center gap-1">
                      <Shield className="w-3 h-3 text-gray-600" />
                      <p className="text-xs text-gray-700 font-semibold text-center">{member.specialAchievement}</p>
                    </div>
                  </div>
                )}
                
                {member.achievement && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-md p-2 mb-3">
                    <div className="flex items-center justify-center gap-1">
                      <Award className="w-3 h-3 text-yellow-600" />
                      <p className="text-xs text-yellow-700 font-semibold text-center">{member.achievement}</p>
                    </div>
                  </div>
                )}
                
                <div className="mb-3">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <GraduationCap className="w-3 h-3 text-gray-600" />
                    <p className="text-xs font-semibold text-gray-700">Key Certifications</p>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.certifications.slice(0, 3).map((cert, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-[10px] px-2 py-0.5 rounded-full">
                        {cert.length > 25 ? cert.substring(0, 22) + '...' : cert}
                      </span>
                    ))}
                  </div>
                  {member.certifications.length > 3 && (
                    <p className="text-[10px] text-gray-500 text-center mt-1">+{member.certifications.length - 3} more</p>
                  )}
                </div>
                
                <div className="mb-3">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Globe className="w-3 h-3 text-gray-600" />
                    <p className="text-xs font-semibold text-gray-700">Languages</p>
                  </div>
                  <p className="text-xs text-gray-600 text-center">{member.languages.join(', ')}</p>
                </div>
                
                <a 
                  href={member.contactUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-lg text-center transition-colors duration-300 text-sm"
                >
                  Connect
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Excellence Meets Expertise</h2>
            
            <div className="text-left space-y-6 text-gray-300">
              <p>
                At the heart of our commitment to providing superior protective services lies our dedication 
                to rigorous training and certification. Our officers distinguish themselves through a suite of 
                prestigious certifications, ensuring unparalleled proficiency and readiness in every aspect of 
                their duties.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-yellow-600 mb-3">Aruba Excellence Certification</h3>
                  <p className="text-sm">
                    This exclusive credential showcases our officers' mastery in hospitality and customer service, 
                    ensuring every interaction is marked by professionalism and warmth.
                  </p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-yellow-600 mb-3">CPR and First Aid Certified</h3>
                  <p className="text-sm">
                    Our team is fully trained in life-saving techniques, standing ready to respond with competence 
                    and care in any emergency.
                  </p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-yellow-600 mb-3">Stop the Bleed Certification</h3>
                  <p className="text-sm">
                    Our officers are equipped with critical skills to manage severe bleeding, preserving life until 
                    medical professionals arrive.
                  </p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-yellow-600 mb-3">Executive Protection Certification</h3>
                  <p className="text-sm">
                    Specialized training in executive protection equips our officers with the strategic insight and 
                    tactical skills necessary to safeguard individuals in high-risk scenarios.
                  </p>
                </div>
              </div>
              
              <p className="mt-8 text-center text-lg">
                At ARX Protective Services, we pride ourselves on a foundation of excellence and a commitment to 
                safety that sets us apart. Our certified officers are not just guards; they are <strong className="text-yellow-600">guardians</strong>, 
                meticulously prepared to protect and serve with distinction.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

