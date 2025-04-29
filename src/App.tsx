import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-900 overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F6F5F1] shadow-md' : 'bg-[#F6F5F1]'}`}>
        <nav className="flex justify-between items-center px-6 md:px-8 max-w-7xl mx-auto py-3">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              <img src="/assets/logo.png" alt="StaffinITy Solutions Logo" className="h-16 md:h-20" />
            </a>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl">
              {isMenuOpen ? '✖' : '☰'}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center text-lg font-medium">
            {['services', 'about', 'why-choose-us', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="py-2 px-5 bg-[#1D3557] text-white rounded-full hover:bg-[#457B9D] transition transform hover:scale-105"
              >
                {id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center bg-[#F6F5F1] p-4 space-y-4 transition-all">
            {['services', 'about', 'why-choose-us', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="w-full text-center py-2 px-6 bg-[#1D3557] text-white rounded-full hover:bg-[#457B9D]"
              >
                {id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Spacer for sticky header */}
      <div className="h-[100px] md:h-[120px]"></div>

      {/* HERO SECTION */}
      <div
        className="min-h-screen bg-cover bg-center relative text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
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
      <section id="services" className="py-20 px-6 bg-white text-center pt-28">
        <h2 className="text-4xl font-bold mb-12 text-teal-600">Our Solutions</h2>
        <div className="grid gap-12 md:grid-cols-3">
          {[
            { title: 'IT Consulting & Staffing', desc: 'Expert guidance and customized staffing solutions to help you build the right teams and achieve your business goals.', icon: '🧑‍💻' },
            { title: 'IT Solutions & Project Management', desc: 'Comprehensive IT solutions and end-to-end project management to streamline operations, enhance efficiency, and drive success.', icon: '⚙️' },
            { title: 'Custom IT Solutions', desc: 'Tailored technology strategies and support services, designed to meet your business needs and ensure long-term growth and scalability.', icon: '💡' },
          ].map((s, i) => (
            <div key={i} className="border rounded-lg p-8 hover:shadow-xl transition transform hover:-translate-y-1 bg-gray-50">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-20 px-6 bg-gradient-to-r from-teal-600 to-teal-800 text-white text-center pt-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-teal-100">About Us</h2>
          <p className="text-lg md:text-xl mb-16 text-teal-100">
            At StaffinITy Solutions LLC, we specialize in connecting top talent with exceptional opportunities. Our expertise spans staffing, project management, and strategic vendorship services across industries.
          </p>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl hover:scale-105 transition">
              <h3 className="text-3xl font-semibold text-teal-600 mb-4">Vision</h3>
              <p>To be the leading partner in staffing and project solutions, empowering businesses and individuals to achieve their highest potential through innovation, trust, and excellence.</p>
            </div>
            <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl hover:scale-105 transition">
              <h3 className="text-3xl font-semibold text-teal-600 mb-4">Mission</h3>
              <p>Connecting organizations with exceptional talent, delivering strategic solutions, and building lasting partnerships to foster growth, innovation, and value for all stakeholders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="py-20 px-6 bg-white text-center pt-28">
        <h2 className="text-4xl font-bold mb-6 text-teal-600">Why Choose Us</h2>
        <div className="max-w-3xl mx-auto text-left">
          <ul className="space-y-4">
            {[
              'Tailored Solutions - We customize staffing and project strategies to fit your unique business needs.',
              'Talent-First Approach - We connect you with skilled, reliable, and future-ready professionals.',
              'Speed and Agility - We move fast to match the right talent and deliver projects on time.',
              'Commitment to Quality - We aim to exceed expectations with every partnership.',
              'Trusted Partnerships - Building long-term relationships based on trust and results.',
            ].map((point, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-teal-600 mr-3 mt-1">✔</span> {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-blue-50 py-20 px-6 pt-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-teal-600">Contact Us</h2>
            <p className="text-lg mb-8">Have any questions? Reach out or fill out the form below!</p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-teal-600">📧</span>
                <span>info@staffinitysolutions.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-teal-600">📞</span>
                <span>+1 945-348-0140</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-teal-600">📍</span>
                <span>5121 Collin McKinney Pkwy Ste 500 #1090, McKinney, TX 75070</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
            <form
              action="https://formspree.io/f/mpwdwpno"
              method="POST"
              className="space-y-4"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <input type="text" name="firstName" placeholder="First Name" className="w-full p-3 border rounded" required />
                <input type="text" name="lastName" placeholder="Last Name" className="w-full p-3 border rounded" required />
              </div>
              <input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded" required />
              <input type="tel" name="phone" placeholder="Phone (optional)" className="w-full p-3 border rounded" />
              <textarea name="message" placeholder="Your Message" className="w-full p-3 border rounded h-32" required></textarea>
              <button type="submit" className="w-full bg-teal-600 text-white py-3 rounded hover:bg-teal-500 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center bg-gray-900 text-white py-6">
        <p>&copy; 2025 StaffinITy Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
