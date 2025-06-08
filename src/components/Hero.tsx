
import { ArrowDown, Building2, Hammer, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSlideshow from './HeroSlideshow';
import RotatingHouse3D from './RotatingHouse3D';
import AnimatedCard from './AnimatedCard';

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
        className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Slideshow Background */}
        <HeroSlideshow />
        
        {/* Desktop Content */}
        <div className="hidden md:block relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Glassmorphism card */}
          <AnimatedCard animation="scale-in" className="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
            <AnimatedCard animation="fade-up" delay={200} className="mb-6">
              <RotatingHouse3D />
            </AnimatedCard>
            
            <AnimatedCard animation="fade-up" delay={400}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                Design. Build. Inspire.
              </h1>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-up" delay={600}>
              <p className="text-base md:text-lg lg:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Transforming Kenya's architectural landscape with expert craftsmanship and innovative design solutions.
              </p>
            </AnimatedCard>

            {/* Service highlights with modern icons */}
            <AnimatedCard animation="slide-left" delay={800} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm">
              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl p-3 hover-scale transition-all duration-300 hover:bg-white/20">
                <Building2 className="w-5 h-5" />
                <span>Architecture & Design</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl p-3 hover-scale transition-all duration-300 hover:bg-white/20">
                <Hammer className="w-5 h-5" />
                <span>Construction Services</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl p-3 hover-scale transition-all duration-300 hover:bg-white/20">
                <Users className="w-5 h-5" />
                <span>Project Management</span>
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-up" delay={1000} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-semibold px-8 py-3 text-lg w-full sm:w-auto transition-all hover-scale"
              >
                Request a Quote
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.open('tel:0711236128')}
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold px-8 py-3 text-lg w-full sm:w-auto hover-scale"
              >
                Call Now
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.open('https://wa.me/qr/W7Y5C2TH34Q2B1')}
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold px-8 py-3 text-lg w-full sm:w-auto hover-scale animate-pulse"
              >
                WhatsApp Us
              </Button>
            </AnimatedCard>
          </AnimatedCard>
          
          <div className="animate-bounce mt-8">
            <ArrowDown className="w-8 h-8 mx-auto text-white/80" />
          </div>
        </div>

        {/* Mobile Content - Enhanced with animations */}
        <div className="md:hidden relative z-10 text-center text-white px-3 w-full flex flex-col justify-center min-h-[70vh]">
          {/* Mobile Hero Card */}
          <AnimatedCard animation="scale-in" className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-4 shadow-2xl mx-2">
            <AnimatedCard animation="fade-up" delay={200} className="mb-3">
              <RotatingHouse3D />
            </AnimatedCard>
            
            <AnimatedCard animation="fade-up" delay={400}>
              <h1 className="text-lg font-bold mb-3">
                Design. Build. Inspire.
              </h1>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-up" delay={600}>
              <p className="text-sm mb-4 text-white/90">
                Kenya's premier construction & design experts
              </p>
            </AnimatedCard>

            {/* Mobile Service Pills */}
            <AnimatedCard animation="slide-left" delay={800} className="flex flex-wrap justify-center gap-2 mb-4 text-xs">
              <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 hover-scale transition-all duration-300">
                <Building2 className="w-3 h-3" />
                <span>Design</span>
              </div>
              <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 hover-scale transition-all duration-300">
                <Hammer className="w-3 h-3" />
                <span>Build</span>
              </div>
              <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 hover-scale transition-all duration-300">
                <Users className="w-3 h-3" />
                <span>Manage</span>
              </div>
            </AnimatedCard>
            
            {/* Mobile Action Buttons */}
            <AnimatedCard animation="fade-up" delay={1000} className="space-y-3">
              <Button 
                size="sm"
                onClick={scrollToContact}
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-semibold w-full text-sm py-2.5 h-auto hover-scale"
              >
                Get Quote
              </Button>
              
              <div className="flex gap-2">
                <Button 
                  size="sm"
                  variant="outline"
                  onClick={() => window.open('tel:0711236128')}
                  className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold flex-1 text-sm py-2 h-auto hover-scale"
                >
                  Call
                </Button>
                
                <Button 
                  size="sm"
                  variant="outline"
                  onClick={() => window.open('https://wa.me/qr/W7Y5C2TH34Q2B1')}
                  className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold flex-1 text-sm py-2 h-auto hover-scale animate-pulse"
                >
                  WhatsApp
                </Button>
              </div>
            </AnimatedCard>
          </AnimatedCard>
          
          <div className="animate-bounce mt-4">
            <ArrowDown className="w-5 h-5 mx-auto text-white/80" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
