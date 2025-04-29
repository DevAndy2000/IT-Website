import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // close menu after click on mobile
    }
  };

  return (
    <div className="font-sans text-gray-900 overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'} backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/assets/logo.png" alt="StaffinITy Solutions" className="h-16 md:h-20" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <NavButton label="Services" onClick={() => scrollToSection('services')} />
            <NavButton label="About Us" onClick={() => scrollToSection('about')} />
            <NavButton label="Why Choose Us" onClick={() => scrollToSection('why-choose-us')} />
            <NavButton label="Contact Us" onClick={() => scrollToSection('contact')} />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl text-teal-600 focus:outline-none">
              {isMenuOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg flex flex-col items-center space-y-4 py-6">
            <NavButton label="Services" onClick={() => scrollToSection('services')} />
            <NavButton label="About Us" onClick={() => scrollToSection('about')} />
            <NavButton label="Why Choose Us" onClick={() => scrollToSection('why-choose-us')} />
            <NavButton label="Contact Us" onClick={() => scrollToSection('contact')} />
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24 md:pt-32">

        {/* Hero Section */}
        <section className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-60" />
          <div className="relative z-10 p-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Staffin<span className="text-teal-400">IT</span>y Solutions</h1>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto">Solutions That Work. Staff You Can Trust.</p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-12 text-teal-600">Our Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'IT Consulting & Staffing', desc: 'Expert guidance and customized staffing solutions.', icon: '🧑‍💻' },
                { title: 'IT Solutions & Project Management', desc: 'Comprehensive IT solutions and project management.', icon: '⚙️' },
                { title: 'Custom IT Solutions', desc: 'Tailored strategies and support services.', icon: '💡' },
              ].map((service, index) => (
                <div key={index} className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white text-center">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8">About Us</h2>
            <p className="text-lg mb-12">At StaffinITy Solutions LLC, we specialize in connecting top talent with exceptional opportunities. Our expertise spans staffing, project management, and strategic vendorship services across industries.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card title="Vision" content="To be the leading partner in staffing and project solutions, empowering businesses and individuals to achieve their highest potential." />
              <Card title="Mission" content="Connect organizations with exceptional talent, deliver strategic project solutions, and build lasting partnerships based on trust." />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-choose-us" className="py-20 bg-white">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-10 text-teal-600">Why Choose Us</h2>
            <ul className="text-left space-y-4">
              {[
                'Tailored Solutions - customized strategies for your business needs.',
                'Talent-First Approach - connect with skilled, reliable professionals.',
                'Speed and Agility - fast matching and project delivery.',
                'Commitment to Quality - exceeding expectations consistently.',
                'Trusted Partnerships - building long-term relationships based on trust.'
              ].map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-teal-500 mr-3 mt-1">✔</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">
            {/* Contact Info */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h2 className="text-3xl font-bold text-teal-600 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-8">Have questions? Reach out to us using the details below or fill the form.</p>
              <div className="space-y-4 text-gray-700">
                <div><strong>Email:</strong> info@staffinitysolutions.com</div>
                <div><strong>Phone:</strong> +1 945-348-0140</div>
                <div><strong>Address:</strong> 5121 Collin McKinney Pkwy Ste 500 #1090, McKinney, TX 75070</div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-teal-600">Get In Touch</h3>
              <form action="https://formspree.io/f/mpwdwpno" method="POST" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" name="firstName" placeholder="First Name" required className="input" />
                  <input type="text" name="lastName" placeholder="Last Name" required className="input" />
                </div>
                <input type="email" name="email" placeholder="Email" required className="input" />
                <input type="tel" name="phone" placeholder="Phone (optional)" className="input" />
                <textarea name="message" placeholder="Your Message" required className="input h-32" />
                <button type="submit" className="w-full py-3 bg-teal-600 text-white font-bold rounded hover:bg-teal-500 transition">Send Message</button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-6">
          <p>&copy; 2025 StaffinITy Solutions. All rights reserved.</p>
        </footer>

      </main>
    </div>
  );
};

const NavButton = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <button onClick={onClick} className="text-lg font-semibold text-gray-700 hover:text-teal-600 transition">{label}</button>
);

const Card = ({ title, content }: { title: string; content: string }) => (
  <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition">
    <h3 className="text-2xl font-bold text-teal-600 mb-4">{title}</h3>
    <p className="text-gray-600">{content}</p>
  </div>
);

export default App;
