
import { ArrowDown, Building2, Hammer, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSlideshow from './HeroSlideshow';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section 
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Slideshow Background */}
        <HeroSlideshow />
        
        {/* Desktop Content */}
        <div className="hidden md:block relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Glassmorphism card */}
          <div className="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/f8a3ef57-cdb8-4bde-826e-f6b0abc964cc.png" 
                alt="MJS Products Limited - Professional Construction & Design Services" 
                className="h-16 md:h-20 w-auto mx-auto mb-6"
              />
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Design. Build. Inspire.
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in">
              Transforming your dreams into timeless structures with expert craftsmanship and innovative design.
            </p>

            {/* Service highlights with modern icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm">
              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl p-3">
                <Building2 className="w-5 h-5" />
                <span>Architecture & Design</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl p-3">
                <Hammer className="w-5 h-5" />
                <span>Construction Services</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl p-3">
                <Users className="w-5 h-5" />
                <span>Project Management</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-semibold px-8 py-3 text-lg w-full sm:w-auto transition-all"
              >
                Request a Quote
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.open('tel:0711236128')}
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold px-8 py-3 text-lg w-full sm:w-auto"
              >
                Call Now
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.open('https://wa.me/qr/W7Y5C2TH34Q2B1')}
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold px-8 py-3 text-lg w-full sm:w-auto hover-scale"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
          
          <div className="animate-bounce mt-8">
            <ArrowDown className="w-8 h-8 mx-auto text-white/80" />
          </div>
        </div>

        {/* Mobile Content */}
        <div className="md:hidden relative z-10 text-center text-white px-4 w-full">
          {/* Mobile Hero Card */}
          <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-6 shadow-2xl mx-4">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/f8a3ef57-cdb8-4bde-826e-f6b0abc964cc.png" 
                alt="MJS Products Limited" 
                className="h-12 w-auto mx-auto mb-4"
              />
            </div>
            
            <h1 className="text-2xl font-bold mb-4 animate-fade-in">
              Design. Build. Inspire.
            </h1>
            
            <p className="text-sm mb-6 text-white/90 animate-fade-in">
              Transforming dreams into timeless structures with expert craftsmanship.
            </p>

            {/* Mobile Service Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-6 text-xs">
              <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2">
                <Building2 className="w-3 h-3" />
                <span>Architecture</span>
              </div>
              <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2">
                <Hammer className="w-3 h-3" />
                <span>Construction</span>
              </div>
              <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2">
                <Users className="w-3 h-3" />
                <span>Management</span>
              </div>
            </div>
            
            {/* Mobile Action Buttons */}
            <div className="space-y-3 animate-fade-in">
              <Button 
                size="sm"
                onClick={scrollToContact}
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-semibold w-full"
              >
                Request a Quote
              </Button>
              
              <div className="flex gap-2">
                <Button 
                  size="sm"
                  variant="outline"
                  onClick={() => window.open('tel:0711236128')}
                  className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold flex-1"
                >
                  Call Now
                </Button>
                
                <Button 
                  size="sm"
                  variant="outline"
                  onClick={() => window.open('https://wa.me/qr/W7Y5C2TH34Q2B1')}
                  className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold flex-1"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
          
          <div className="animate-bounce mt-6">
            <ArrowDown className="w-6 h-6 mx-auto text-white/80" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
