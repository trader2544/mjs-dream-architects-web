
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <img 
            src="/lovable-uploads/f8a3ef57-cdb8-4bde-826e-f6b0abc964cc.png" 
            alt="MJS Products Limited" 
            className="h-20 md:h-24 w-auto mx-auto mb-4"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Design. Build. Inspire.
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto animate-fade-in">
          Transforming your dreams into timeless structures.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 text-lg w-full sm:w-auto"
          >
            Request a Quote
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            onClick={() => window.open('tel:0711236128')}
            className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 text-lg w-full sm:w-auto"
          >
            Call Now
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            onClick={() => window.open('https://wa.me/qr/W7Y5C2TH34Q2B1')}
            className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 text-lg w-full sm:w-auto hover-scale"
          >
            WhatsApp Us
          </Button>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
