import { useState, useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import MissionVision from '../components/MissionVision';
import { Award, Users, Shield, Target, Globe, Briefcase, GraduationCap, CheckCircle, Building2, Zap, Lock, Eye, Heart, Star, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeValue, setActiveValue] = useState(null);
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
        "FEMA Certifications"
      ],
      languages: ["English", "Papiamento", "Dutch", "Spanish"],
      photo: "https://static.wixstatic.com/media/a40fbc_c5d0c0e4c5b34d1f9b8e8f0e0e0e0e0e~mv2.jpg",
      specialAchievement: "International Executive & Diplomatic Protection",
      link: "https://hihello.me/p/f5c16eb4-6a9d-4563-95a2-de56f289c66e"
    },
    {
      name: "Cedric Wever",
      role: "Co-Founder & Technical Director",
      credential: "CPO, Executive Protection Agent",
      experience: "25+ Years",
      description: "With 25 years of expertise in electrical and technical security, Cedric leads ARX's technical departments, specializing in alarm systems, surveillance, and counter-surveillance operations.",
      certifications: [
        "Executive Protection Agent",
        "Executive Protection Instructor",
        "First Aid/CPR",
        "Technical Security Systems"
      ],
      languages: ["English", "Papiamento", "Dutch", "Spanish"],
      photo: "https://static.wixstatic.com/media/a40fbc_8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e~mv2.jpg",
      link: "https://hihello.me/p/7f072a28-3135-4162-825b-42e37722e33a"
    },
    {
      name: "Millicent Alvarez",
      role: "Operations Director",
      credential: "Certified Hospitality Trainer",
      experience: "10+ Years",
      description: "With over a decade of hospitality industry expertise, Millicent excels in managing luxury operations, leading high-performing teams, and driving transformative quality improvements.",
      certifications: [
        "Rooms Division Certification",
        "Hospitality Trainer",
        "Operations Management"
      ],
      languages: ["English", "Papiamento", "Dutch", "Spanish"],
      photo: "https://static.wixstatic.com/media/a40fbc_9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e~mv2.jpg",
      link: "https://www.linkedin.com/in/millicentalvarez"
    },
    {
      name: "Bruce Henriquez",
      role: "Protection Supervisor",
      credential: "CPO, AHATA Excellence Award Winner",
      experience: "Since 2020",
      description: "As Protection Supervisor since ARX's inception, Bruce's dedication and leadership have been instrumental in upholding world-class protection service standards.",
      certifications: [
        "Certified Protection Officer",
        "First Aid/CPR",
        "Aruba Excellence Certification"
      ],
      languages: ["English", "Papiamento", "Dutch", "Spanish"],
      photo: "https://static.wixstatic.com/media/a40fbc_7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e~mv2.jpg",
      specialAchievement: "AHATA Excellence Award Winner",
      link: "https://hihello.me/p/bc58f447-7c78-419c-8eef-a37dc80d37b4"
    },
    {
      name: "Dijon Inesia",
      role: "Protection Supervisor",
      credential: "CPO, Protection Specialist",
      experience: "Since 2020",
      description: "Dedicated security professional committed to maintaining the highest standards of protection and service, ensuring operational excellence in all assignments.",
      certifications: [
        "Certified Protection Officer",
        "First Aid/CPR",
        "Aruba Excellence Certification"
      ],
      languages: ["English", "Papiamento", "Dutch", "Spanish"],
      photo: "https://static.wixstatic.com/media/a40fbc_6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e~mv2.jpg",
      link: "https://hihello.me/p/88e009be-5acc-422d-a982-06dbe81dccd4"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Honesty & Integrity",
      description: "We value above all else honesty, integrity, and unselfishness in every interaction and operation.",
      color: "from-red-400 to-pink-500",
      delay: 0
    },
    {
      icon: Users,
      title: "Professionalism",
      description: "We maintain the highest standards of professionalism and mutual respect with clients, staff, and partners.",
      color: "from-blue-400 to-indigo-500",
      delay: 0.1
    },
    {
      icon: Target,
      title: "Accountability",
      description: "We hold ourselves accountable by honoring our commitments, providing results, and striving for excellence.",
      color: "from-green-400 to-emerald-500",
      delay: 0.2
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "We invest in developing our most important assets - our staff - to achieve all goals and exceed expectations.",
      color: "from-yellow-400 to-orange-500",
      delay: 0.3
    }
  ];

  const expertise = [
    {
      icon: Award,
      title: "Aruba Excellence",
      description: "Exclusive credential showcasing mastery in hospitality and customer service",
      count: "100%",
      label: "Certified"
    },
    {
      icon: Heart,
      title: "CPR & First Aid",
      description: "Fully trained in life-saving techniques for emergency response",
      count: "100%",
      label: "Certified"
    },
    {
      icon: Shield,
      title: "Stop the Bleed",
      description: "Critical skills to manage severe bleeding until medical professionals arrive",
      count: "All",
      label: "Officers"
    },
    {
      icon: Lock,
      title: "Executive Protection",
      description: "Strategic insight and tactical skills for high-risk scenario protection",
      count: "Elite",
      label: "Training"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Navigation />
      
      {/* Hero Section with Parallax */}
      <section 
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(234, 179, 8, 0.2) 0%, transparent 50%)`
        }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMzQsIDE3OSwgOCwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" 
               style={{ animation: 'gridScroll 20s linear infinite' }} />
        </div>

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-500 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}

        <div className="relative z-10 text-center px-4">
          <h1 
            className="text-6xl md:text-8xl font-black mb-6"
            style={{
              background: 'linear-gradient(to right, #fbbf24, #f59e0b, #d97706)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'fadeInUp 1s ease-out'
            }}
          >
            About ARX Protection
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-light" style={{ animation: 'fadeInUp 1s ease-out 0.2s backwards' }}>
            Your safety deserves undivided attention
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Company Introduction with Glassmorphism */}
      <section id="intro" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div 
            className={`relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-3xl border-2 border-yellow-600/30 p-12 md:p-16 transition-all duration-1000 ${
              visibleSections.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              boxShadow: '0 20px 60px rgba(234, 179, 8, 0.2)'
            }}
          >
            {/* Animated Border Glow */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-50"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(234, 179, 8, 0.3) 50%, transparent 70%)',
                backgroundSize: '200% 200%',
                animation: 'borderGlow 3s ease infinite'
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-2xl opacity-50 animate-pulse" style={{ transform: 'scale(1.5)' }} />
                  <div className="relative w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Shield className="w-10 h-10 text-black" />
                  </div>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-center mb-8 text-white">
                Company Introduction
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                <p>
                  ARX Protection Aruba offers a complete range of protection services for the island of Aruba. All of our employees are 
                  trained to the highest of standards, including skills in residential and commercial security, defensive driving, close protection 
                  and surveillance system installation.
                </p>
                
                <p>
                  We pride ourselves on building long-standing, professional relationships with our clients, and providing polite and 
                  professional service at all times.
                </p>
                
                <p className="text-yellow-400 font-semibold text-2xl text-center pt-6">
                  Your safety deserves undivided attention. Trust ARX to fortify your world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Values Section with Interactive Cards */}
      <section id="values" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <h2 
            className={`text-5xl md:text-6xl font-black text-center mb-16 transition-all duration-1000 ${
              visibleSections.values ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
            style={{
              background: 'linear-gradient(to right, #fbbf24, #f59e0b, #d97706)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const ValueIcon = value.icon;
              const isActive = activeValue === index;
              
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveValue(index)}
                  onMouseLeave={() => setActiveValue(null)}
                  className={`relative group cursor-pointer transition-all duration-700 ${
                    visibleSections.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${value.delay}s` }}
                >
                  <div 
                    className={`relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border-2 p-8 transition-all duration-500 ${
                      isActive ? 'border-yellow-500 scale-105 shadow-2xl' : 'border-gray-700 hover:border-yellow-600/50'
                    }`}
                    style={{
                      boxShadow: isActive ? '0 20px 60px rgba(234, 179, 8, 0.4)' : 'none'
                    }}
                  >
                    {/* Icon */}
                    <div className="flex items-center mb-6">
                      <div 
                        className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center transform transition-all duration-500 ${
                          isActive ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                        }`}
                      >
                        <ValueIcon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white ml-4">{value.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {value.description}
                    </p>

                    {/* Animated Background */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section with 3D Cards */}
      <section id="team" className="py-24 px-4 bg-black/50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, rgba(234, 179, 8, 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 
              className={`text-5xl md:text-6xl font-black mb-4 transition-all duration-1000 ${
                visibleSections.team ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}
              style={{
                background: 'linear-gradient(to right, #fbbf24, #f59e0b, #d97706)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Meet Our Management Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our leadership team brings decades of combined experience in executive protection, 
              security operations, and client service excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className={`group perspective-1000 transition-all duration-700 ${
                  visibleSections.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl border-2 border-gray-700 p-6 hover:border-yellow-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30">
                  {/* Photo */}
                  <div className="w-28 h-28 mx-auto mb-4 overflow-hidden rounded-full border-4 border-yellow-600 group-hover:border-yellow-400 transition-all duration-500 group-hover:scale-110">
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-xl font-bold text-white text-center mb-1">{member.name}</h3>
                  <p className="text-yellow-500 text-center font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-center text-xs mb-3">{member.credential}</p>

                  {/* Experience Badge */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Briefcase className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-300">{member.experience}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs text-center mb-4 line-clamp-3">
                    {member.description}
                  </p>

                  {/* Special Achievement */}
                  {member.specialAchievement && (
                    <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 border border-gray-600 rounded-lg p-2 mb-4">
                      <div className="flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4 text-gray-400" />
                        <p className="text-xs text-gray-300 font-semibold text-center">{member.specialAchievement}</p>
                      </div>
                    </div>
                  )}

                  {/* Certifications */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2 text-center font-semibold">Key Certifications</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.certifications.slice(0, 3).map((cert, i) => (
                        <span key={i} className="text-xs bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded-full border border-yellow-600/30">
                          {cert.length > 20 ? cert.substring(0, 20) + '...' : cert}
                        </span>
                      ))}
                      {member.certifications.length > 3 && (
                        <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full border border-gray-600">
                          +{member.certifications.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2 text-center font-semibold">Languages</p>
                    <p className="text-xs text-gray-400 text-center">{member.languages.join(', ')}</p>
                  </div>

                  {/* Connect Button */}
                  {member.link && (
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold py-2 px-4 rounded-lg text-center text-sm transition-all duration-300 transform hover:scale-105"
                    >
                      Connect
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence & Expertise with Animated Counters */}
      <section id="expertise" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 
              className={`text-5xl md:text-6xl font-black mb-6 transition-all duration-1000 ${
                visibleSections.expertise ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}
              style={{
                background: 'linear-gradient(to right, #fbbf24, #f59e0b, #d97706)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Excellence Meets Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              At the heart of our commitment to providing superior protective services lies our dedication to rigorous training and certification.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => {
              const ItemIcon = item.icon;
              
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    visibleSections.expertise ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border-2 border-gray-700 p-8 hover:border-yellow-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                        <div className="relative w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                          <ItemIcon className="w-10 h-10 text-black" />
                        </div>
                      </div>
                    </div>

                    {/* Count */}
                    <div className="text-center mb-4">
                      <div className="text-4xl font-black text-yellow-400 mb-1">{item.count}</div>
                      <div className="text-sm text-gray-500 font-semibold">{item.label}</div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white text-center mb-4">{item.title}</h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm text-center leading-relaxed">
                      {item.description}
                    </p>

                    {/* Checkmark */}
                    <div className="flex justify-center mt-6">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Closing Statement */}
          <div 
            className={`mt-16 text-center transition-all duration-1000 delay-500 ${
              visibleSections.expertise ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At ARX Protective Services, we pride ourselves on a foundation of excellence and a commitment to safety that sets us apart. 
              Our certified officers are not just guards; they are <span className="text-yellow-400 font-bold">guardians</span>, meticulously prepared to protect and serve with distinction.
            </p>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
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
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes gridScroll {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        @keyframes borderGlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}

