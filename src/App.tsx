import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth >= 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans text-gray-900 overflow-x-hidden">
      {/* NAVIGATION BAR */}
      <header
        className={`bg-[#F6F5F1] text-gray-900 py-2 md:py-3 fixed w-full top-0 z-40 shadow-lg transition-transform duration-300 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex justify-between items-center px-6 md:px-8 max-w-7xl mx-auto">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900 hover:text-teal-400 transition-all">
              <img src="/assets/logo.png" alt="StaffinITy Solutions Logo" className="h-16 md:h-20" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-lg font-medium">
            {['services', 'about', 'why-choose-us', 'contact'].map((section, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(section)}
                className="py-2 px-6 bg-[#1D3557] text-white rounded-full shadow-md hover:bg-[#457B9D] transition-all duration-300 transform hover:scale-105"
              >
                {section.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile Hamburger Button (Always Fixed) */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl p-2 bg-white rounded-full shadow-md transition-all"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F6F5F1] flex flex-col items-center space-y-4 p-6 pt-20 fixed top-0 left-0 right-0 z-40">
          {['services', 'about', 'why-choose-us', 'contact'].map((section, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSection(section)}
              className="py-2 px-6 bg-[#1D3557] text-white rounded-full shadow-md hover:bg-[#457B9D] transition-all duration-300"
            >
              {section.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
            </button>
          ))}
        </div>
      )}

      {/* HERO SECTION */}
      <div
        className="min-h-screen bg-cover bg-center relative text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
            Staffin<span className="text-teal-400">IT</span>y Solutions
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl animate-fade-in-up delay-150">
            Solutions That Work. Staff You Can Trust.
          </p>
        </div>
      </div>

      {/* SERVICES SECTION */}
      {/* ABOUT US SECTION */}
      {/* WHY CHOOSE US SECTION */}
      {/* CONTACT SECTION */}

      {/* FOOTER */}
      <footer className="text-center bg-gray-900 text-white py-6">
        <p className="mt-4">&copy; 2025 StaffinITy Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
