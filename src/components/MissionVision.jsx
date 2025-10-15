import { useState, useEffect, useRef } from 'react';
import { Shield, Target, Eye, Zap, Lock, Globe } from 'lucide-react';

export default function MissionVision() {
  const [activeSection, setActiveSection] = useState('mission');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  const missionData = {
    title: "Our Mission",
    tagline: "Your Protection in an Imperfect World",
    description: "In an ever-changing security landscape, we provide stability, expertise, and unwavering commitment to our clients' safety. We believe that your safety deserves undivided attention, and we fortify your world with professional security solutions tailored to your specific needs.",
    icon: Target,
    color: "from-yellow-400 via-yellow-500 to-yellow-600",
    particles: [
      { icon: Shield, delay: 0 },
      { icon: Lock, delay: 0.2 },
      { icon: Zap, delay: 0.4 },
    ]
  };

  const visionData = {
    title: "Our Vision",
    tagline: "Excellence Through Trust",
    description: "Through our commitment to high standards it is our vision to earn the trust of our clients by delivering the best quality services. We aim to be the Caribbean's most trusted security partner, setting the benchmark for excellence in executive protection and security solutions.",
    icon: Eye,
    color: "from-blue-400 via-blue-500 to-blue-600",
    particles: [
      { icon: Globe, delay: 0 },
      { icon: Target, delay: 0.2 },
      { icon: Shield, delay: 0.4 },
    ]
  };

  const activeData = activeSection === 'mission' ? missionData : visionData;
  const ActiveIcon = activeData.icon;

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-black"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(234, 179, 8, 0.15) 0%, transparent 50%)`
      }}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(234, 179, 8, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(234, 179, 8, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-16">
          <div className="relative inline-flex bg-gray-900/50 backdrop-blur-sm rounded-full p-2 border border-yellow-600/30">
            {/* Sliding Background */}
            <div 
              className={`absolute top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] bg-gradient-to-r ${activeData.color} rounded-full transition-all duration-500 ease-out`}
              style={{
                left: activeSection === 'mission' ? '8px' : 'calc(50% + 0px)',
                boxShadow: '0 0 30px rgba(234, 179, 8, 0.5)'
              }}
            />
            
            <button
              onClick={() => setActiveSection('mission')}
              className={`relative z-10 px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                activeSection === 'mission' ? 'text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Target className="inline-block w-5 h-5 mr-2 -mt-1" />
              Mission
            </button>
            
            <button
              onClick={() => setActiveSection('vision')}
              className={`relative z-10 px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                activeSection === 'vision' ? 'text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Eye className="inline-block w-5 h-5 mr-2 -mt-1" />
              Vision
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Content Card */}
            <div 
              className={`relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl border-2 overflow-hidden transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                borderColor: activeSection === 'mission' ? 'rgb(234, 179, 8)' : 'rgb(59, 130, 246)',
                boxShadow: `0 20px 60px ${activeSection === 'mission' ? 'rgba(234, 179, 8, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`
              }}
            >
              {/* Animated Border Glow */}
              <div 
                className="absolute inset-0 opacity-50"
                style={{
                  background: `linear-gradient(45deg, transparent 30%, ${activeSection === 'mission' ? 'rgba(234, 179, 8, 0.3)' : 'rgba(59, 130, 246, 0.3)'} 50%, transparent 70%)`,
                  backgroundSize: '200% 200%',
                  animation: 'borderGlow 3s ease infinite'
                }}
              />

              <div className="relative p-12 md:p-16">
                {/* Icon with Pulse Effect */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div 
                      className={`absolute inset-0 bg-gradient-to-r ${activeData.color} rounded-full blur-2xl opacity-50 animate-pulse`}
                      style={{ transform: 'scale(1.5)' }}
                    />
                    <div className={`relative w-24 h-24 bg-gradient-to-r ${activeData.color} rounded-full flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-12`}>
                      <ActiveIcon className="w-12 h-12 text-black" />
                    </div>
                  </div>
                </div>

                {/* Title with Gradient Text */}
                <h2 
                  className={`text-5xl md:text-6xl font-black text-center mb-4 transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                  }`}
                  style={{
                    background: `linear-gradient(to right, ${activeSection === 'mission' ? '#fbbf24, #f59e0b, #d97706' : '#60a5fa, #3b82f6, #2563eb'})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {activeData.title}
                </h2>

                {/* Tagline */}
                <p 
                  className={`text-2xl md:text-3xl text-white font-bold text-center mb-8 transition-all duration-500 delay-100 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                  }`}
                >
                  {activeData.tagline}
                </p>

                {/* Description */}
                <p 
                  className={`text-lg md:text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed transition-all duration-500 delay-200 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                  }`}
                >
                  {activeData.description}
                </p>

                {/* Floating Icons */}
                <div className="flex justify-center gap-8 mt-12">
                  {activeData.particles.map((particle, index) => {
                    const ParticleIcon = particle.icon;
                    return (
                      <div
                        key={index}
                        className={`w-16 h-16 bg-gradient-to-r ${activeData.color} rounded-full flex items-center justify-center transform transition-all duration-500 hover:scale-125 hover:-translate-y-2`}
                        style={{
                          animation: `floatIcon 3s ease-in-out infinite`,
                          animationDelay: `${particle.delay}s`,
                          opacity: isInView ? 1 : 0,
                          transitionDelay: `${300 + index * 100}ms`
                        }}
                      >
                        <ParticleIcon className="w-8 h-8 text-black" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 3D Perspective Lines */}
            <div className="absolute -inset-4 -z-10 opacity-30">
              <div 
                className="absolute inset-0 border-2 rounded-3xl"
                style={{
                  borderColor: activeSection === 'mission' ? 'rgb(234, 179, 8)' : 'rgb(59, 130, 246)',
                  transform: 'perspective(1000px) rotateX(2deg) translateZ(-20px)',
                  transition: 'all 0.5s ease'
                }}
              />
              <div 
                className="absolute inset-0 border-2 rounded-3xl"
                style={{
                  borderColor: activeSection === 'mission' ? 'rgb(234, 179, 8)' : 'rgb(59, 130, 246)',
                  transform: 'perspective(1000px) rotateX(4deg) translateZ(-40px)',
                  transition: 'all 0.5s ease'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
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

        @keyframes floatIcon {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
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
      `}</style>
    </section>
  );
}

