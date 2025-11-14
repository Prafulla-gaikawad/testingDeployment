const Footer = () => {
  const mainMenu = [
    { label: 'होम', link: '#home' },
    { label: 'आमच्याबद्दल', link: '#about' },
    { label: 'फोटो गॅलरी', link: '#gallery' },
    { label: 'ब्लॉग', link: '#blog' },
    { label: 'संपर्क साधा', link: '#contact' },
  ];

  const otherMenu = [
    { label: 'पुरस्कार / यशोगाथा', link: '#awards' },
    { label: 'पर्यटन स्थळ', link: '#tourism' },
    { label: 'मंदिर', link: '#temple' },
    { label: 'आरोग्य दवाखाने', link: '#health' },
    { label: 'शाळा', link: '#school' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Village Info */}
          <div>
            <h3 className="text-2xl font-extrabold mb-6 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              शिंदे ग्रामपंचायत
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              एक समृद्ध व शांत गाव, जिथे शेती, परंपरा आणि एकतेला महत्त्व दिले जाते.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-all duration-300 font-medium group">
              <span>अधिक वाचा</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Main Menu */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">मुख्य मेनू</h3>
            <ul className="space-y-3">
              {mainMenu.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-300 hover:text-teal-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Menu */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">इतर मेनू</h3>
            <ul className="space-y-3">
              {otherMenu.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-300 hover:text-teal-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">आमच्याशी संपर्क साधा</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+91xxxxxxxxxx"
                  className="text-gray-300 hover:text-teal-400 transition-all duration-300 flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center group-hover:bg-teal-500/30 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span>+91 xxxxxxxxxx</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:xxx@gmail.com"
                  className="text-gray-300 hover:text-teal-400 transition-all duration-300 flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center group-hover:bg-teal-500/30 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span>xxx@gmail.com</span>
                </a>
              </li>
              <li className="text-gray-300 flex items-start gap-3">
                <svg className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>At/Post-शिंदे खु तालुका-चांदवड जिल्हा-नाशिक</span>
              </li>
              <li className="flex gap-3 mt-6">
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4 2.209 0 4 1.791 4 4 0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="Youtube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Important Websites Section */}
        <div className="border-t border-gray-700/50 pt-10 mt-10">
          <h3 className="text-xl font-bold mb-6 text-center text-white">महत्वाच्या वेबसाईट</h3>
          <div className="text-center text-gray-400">
            {/* Add important website links here */}
            <p>Important government and related websites will be listed here</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700/50 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            Copyright © 2025 <span className="text-teal-400 font-semibold">शिंदे ग्रामपंचायत</span>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

