const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="text-white py-8 md:py-12 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
              <img src="/lovable-uploads/f8a3ef57-cdb8-4bde-826e-f6b0abc964cc.png" alt="MJS Products Limited" className="h-8 md:h-10 w-auto" />
              <div>
                <h3 className="text-lg md:text-xl font-bold">MJS Products Limited</h3>
                <p className="text-gray-400 text-xs md:text-sm">Craft & Create</p>
              </div>
            </div>
            <p className="text-gray-300 mb-3 md:mb-4 max-w-md text-sm md:text-base">
              Premier design and construction company delivering quality, creativity, 
              and professionalism in every project.
            </p>
            <div className="space-y-1 md:space-y-2 text-sm md:text-base">
              <p className="text-gray-300">
                <span className="font-semibold">Phone:</span> 0711236128, 0708727543, 0733847943
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Email:</span> dmjslimitedcompany@gmail.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-blue-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-blue-400 transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Our Services</h4>
            <ul className="space-y-1 md:space-y-2 text-gray-300 text-sm md:text-base">
              <li>Architectural Design</li>
              <li>Construction</li>
              <li>Interior Design</li>
              <li>Project Management</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-3 md:mb-0">
              <p className="text-gray-400 text-xs md:text-sm">
                © {currentYear} MJS Products Limited. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Powered by <a href="https://telvix.tech" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                  Telvix
                </a>
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://wa.me/qr/W7Y5C2TH34Q2B1" className="w-8 md:w-10 h-8 md:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <svg className="w-4 md:w-5 h-4 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;