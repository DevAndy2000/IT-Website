import React, { useState } from 'react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-gray-900 overflow-x-hidden">
      {/* NAVIGATION BAR */}
      <header className="bg-[#F6F5F1] text-gray-900 py-3 sticky top-0 z-50 shadow-md">
        <nav className="flex justify-between items-center px-6 md:px-8 max-w-7xl mx-auto">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold hover:text-teal-400 transition-all">
              <img src="/assets/logo.png" alt="StaffinITy Solutions Logo" className="h-20 md:h-24" />
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
              {isMenuOpen ? '✖' : '☰'}
            </button>
          </div>
          <div className="hidden md:flex space-x-6 items-center text-lg font-medium">
            {['services', 'about', 'why-choose-us', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="py-2 px-5 bg-[#1D3557] text-white rounded-full shadow-md hover:bg-[#457B9D] transition-all duration-300 transform hover:scale-105"
              >
                {section.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-[#F6F5F1] flex flex-col items-center space-y-4 p-6">
          {['services', 'about', 'why-choose-us', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection(section);
                setIsMenuOpen(false);
              }}
              className="py-2 px-6 bg-[#1D3557] text-white rounded-full shadow-md hover:bg-[#457B9D] transition-all"
            >
              {section.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
            </button>
          ))}
        </div>
      )}

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
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Staffin<span className="text-teal-400">IT</span>y Solutions</h1>
          <p className="text-lg md:text-2xl max-w-2xl">Solutions That Work. Staff You Can Trust.</p>
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
            <div key={i} className="border rounded-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1 bg-gray-50">
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
            At StaffinITy Solutions LLC, we specialize in connecting top talent with exceptional opportunities...
          </p>
          <div className="grid gap-12 md:grid-cols-2">
            {[
              {
                heading: 'Vision',
                body: 'To be the leading partner in staffing and project solutions...',
              },
              {
                heading: 'Mission',
                body: 'Our mission is to connect organizations with exceptional talent...',
              },
            ].map((card, i) => (
              <div key={i} className="bg-white text-gray-900 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                <h3 className="text-3xl font-semibold text-teal-600 mb-4">{card.heading}</h3>
                <p className="text-lg leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="py-20 px-6 bg-white text-center pt-28">
        <h2 className="text-4xl font-bold mb-6 text-teal-600">Why Choose Us</h2>
        <div className="max-w-3xl mx-auto text-left">
          <ul className="space-y-4">
            {[
              'Tailored Solutions - We customize staffing and project strategies...',
              'Talent-First Approach - We connect you with skilled professionals...',
              'Speed and Agility - Our team moves fast to match the right talent...',
              'Commitment to Quality - We aim to exceed expectations...',
              'Trusted Partnerships - We build long-term relationships...',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-teal-600 mt-1">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-blue-50 py-20 px-4 text-gray-900 pt-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-4 text-teal-600">Contact Us</h2>
            <p className="text-md mb-6">
              Reach out via the details below, or use the form to connect directly.
            </p>
            <div className="space-y-4">
              <p><span className="font-semibold text-teal-600">📧 Email:</span> info@staffinitysolutions.com</p>
              <p><span className="font-semibold text-teal-600">📞 Phone:</span> +1 945-348-0140</p>
              <p><span className="font-semibold text-teal-600">📍 Address:</span> 5121 Collin McKinney Pkwy Ste 500 #1090, McKinney, TX 75070</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
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
              <textarea name="message" placeholder="Your Message" className="w-full p-3 border rounded h-32" required />
              <button type="submit" className="w-full bg-teal-600 text-white py-3 rounded hover:bg-teal-500 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center bg-gray-900 text-white py-6 mt-20">
        <p className="mt-4">&copy; 2025 StaffinITy Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
