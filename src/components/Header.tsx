
import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Increased size */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/f8a3ef57-cdb8-4bde-826e-f6b0abc964cc.png" 
              alt="MJS Products Limited" 
              className="h-10 md:h-14 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className={cn(
                "text-lg md:text-xl font-bold",
                isScrolled ? "text-gray-900" : "text-white"
              )}>
                MJS Products Limited
              </h1>
              <p className={cn(
                "text-xs md:text-sm",
                isScrolled ? "text-gray-600" : "text-blue-100"
              )}>
                Craft & Create
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-500",
                isScrolled ? "text-gray-900" : "text-white"
              )}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-500",
                isScrolled ? "text-gray-900" : "text-white"
              )}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-500",
                isScrolled ? "text-gray-900" : "text-white"
              )}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-500",
                isScrolled ? "text-gray-900" : "text-white"
              )}
            >
              Contact
            </button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('tel:0711236128')}
              className="bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isScrolled 
                ? "text-gray-900 hover:bg-gray-100" 
                : "text-white hover:bg-white/10"
            )}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Contact
              </button>
              <Button 
                onClick={() => window.open('tel:0711236128')}
                className="mx-4 bg-blue-500 hover:bg-blue-600"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
