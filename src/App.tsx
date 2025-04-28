import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // State to track scroll position and sticky header state
  const [scrollingUp, setScrollingUp] = useState(false);

  // Scroll detection logic
  useEffect(() => {
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll < lastScrollTop) {
        // Scrolling up
        setScrollingUp(true);
      } else {
        // Scrolling down
        setScrollingUp(false);
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });
  }, []);

  return (
    <div className="font-sans text-gray-900">
      {/* NAVIGATION BAR */}
      <header
        className={`bg-[#F6F5F1] text-gray-900 py-3 z-50 shadow-lg ${scrollingUp ? 'sticky top-0' : ''}`}
      >
        <nav className="flex justify-between items-center px-8 max-w-7xl mx-auto">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900 hover:text-teal-400 transition-all">
              {/* Updated logo path */}
              <img src="/assets/logo.png" alt="StaffinITy Solutions Logo" className="h-24" />
            </a>
          </div>
          <div className="space-x-8 flex items-center text-lg font-medium">
            <button
              onClick={() => scrollToSection('services')}
              className="py-2 px-6 bg-[#1D3557] text-white rounded-full shadow-md hover:bg-[#457B9D] focus:outline-none transition-all duration-300 transform hover:scale-105"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="py-2 px-6 bg-[#1D3557] text-white rounded-full shadow-md hover:bg-[#457B9D] focus:outline-none transition-all duration-300 transform hover:scale-105"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="py-2 px-6 bg-[#1D3557] text-white rounded-full shadow-md hover:bg-[#457B9D] focus:outline-none transition-all duration-300 transform hover:scale-105"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="py-2 px-6 bg-[#1D3557] text-white rounded-full shadow-md hover:bg-[#457B9D] focus:outline-none transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </nav>
      </header>

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
          {[{
            title: 'IT Consulting & Staffing',
            desc: 'Expert guidance and customized staffing solutions to help you build the right teams and achieve your business goals.',
            icon: '🧑‍💻',
          }, {
            title: 'IT Solutions & Project Management',
            desc: 'Comprehensive IT solutions and end-to-end project management to streamline operations, enhance efficiency, and drive success.',
            icon: '⚙️',
          }, {
            title: 'Custom IT Solutions',
            desc: 'Tailored technology strategies and support services, designed to meet your business needs and ensure long-term growth and scalability.',
            icon: '💡',
          }].map((s, i) => (
            <div
              key={i}
              className="border rounded-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1 bg-gray-50"
            >
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
            At StaffinITy Solutions LLC, we specialize in connecting top talent with exceptional opportunities. Our expertise spans staffing, project management, and strategic vendorship services across industries. With a passion for innovation and a commitment to excellence, we help businesses scale efficiently and confidently. Our team brings a people-first approach, ensuring tailored solutions for every client and candidate.
          </p>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Vision Card */}
            <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-3xl font-semibold text-teal-600 mb-4">Vision</h3>
              <p className="text-lg leading-relaxed">
                To be the leading partner in staffing and project solutions, empowering businesses and individuals to achieve their highest potential through innovation, trust, and excellence.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-3xl font-semibold text-teal-600 mb-4">Mission</h3>
              <p className="text-lg leading-relaxed">
                At StaffinITy Solutions LLC, our mission is to connect organizations with exceptional talent, deliver strategic project solutions, and build lasting partnerships. We are committed to driving growth, fostering innovation, and creating value for every client, candidate, and community we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="py-20 px-6 bg-white text-center pt-28">
        <h2 className="text-4xl font-bold mb-6 text-teal-600">Why Choose Us</h2>
        <div className="max-w-3xl mx-auto text-left">
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="mr-4 text-teal-600">✔</span> Tailored Solutions - We customize staffing and project strategies to fit your unique business needs.
            </li>
            <li className="flex items-center">
              <span className="mr-4 text-teal-600">✔</span> Talent-First Approach - We connect you with skilled, reliable, and future-ready professionals.
            </li>
            <li className="flex items-center">
              <span className="mr-4 text-teal-600">✔</span> Speed and Agility - Our team moves fast to match the right talent and deliver projects on time.
            </li>
            <li className="flex items-center">
              <span className="mr-4 text-teal-600">✔</span> Commitment to Quality - We don’t just meet expectations — we aim to exceed them with every partnership.
            </li>
            <li className="flex items-center">
              <span className="mr-4 text-teal-600">✔</span> Nationwide Reach - With expertise spanning various industries and locations, we have the network to help you scale anywhere.
            </li>
          </ul>
        </div>
      </section>

      {/* CONTACT US SECTION */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-teal-600 to-teal-800 text-white text-center pt-28">
        <h2 className="text-4xl font-bold mb-6 text-teal-100">Contact Us</h2>
        <p className="text-lg mb-12 text-teal-100">
          Have a question or ready to start working with us? Reach out to our team today.
        </p>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-lg" />
            <input type="email" placeholder="Your Email" className="w-full p-4 rounded-lg" />
            <textarea placeholder="Your Message" className="w-full p-4 rounded-lg h-32" />
            <button
              type="submit"
              className="w-full py-3 px-6 bg-teal-400 text-white font-bold rounded-lg hover:bg-teal-500 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center bg-gray-900 text-white py-6">
        <p className="mt-4">&copy; 2025 StaffinITy Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
