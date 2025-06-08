import { ArrowDown, Building2, Hammer, Users, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSlideshow from './HeroSlideshow';
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
        <div className="hidden md:block relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          {/* Premium Glassmorphism card */}
          <AnimatedCard animation="scale-in" className="glass-effect-dark rounded-3xl border border-white/10 p-10 md:p-16 shadow-2xl relative">
            <AnimatedCard animation="fade-up" delay={200} className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-600/20 to-slate-700/20 rounded-3xl mb-6 backdrop-blur-sm border border-white/10">
                <Building2 className="w-10 h-10 text-slate-300" />
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-up" delay={400}>
              <div className="flex items-center justify-center mb-6">
                <Crown className="w-8 h-8 text-yellow-400 mr-3" />
                <span className="text-yellow-400 font-semibold text-lg tracking-wider uppercase">Premium Excellence</span>
                <Crown className="w-8 h-8 text-yellow-400 ml-3" />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="block gradient-text">Craft.</span>
                <span className="block text-white/90">&</span>
                <span className="block text-slate-300">Create.</span>
              </h1>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-up" delay={600}>
              <p className="text-lg md:text-xl mb-10 text-white/80 max-w-3xl mx-auto leading-relaxed">
                Kenya's most distinguished architectural and construction firm, delivering unparalleled luxury and precision for discerning clientele.
              </p>
            </AnimatedCard>

            {/* Premium service highlights */}
            <AnimatedCard animation="slide-left" delay={800} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="flex items-center justify-center space-x-3 glass-effect-dark rounded-2xl p-4 hover-scale transition-all duration-300 border border-white/5">
                <Building2 className="w-6 h-6 text-slate-300" />
                <span className="text-white/90 font-medium">Luxury Design</span>
              </div>
              <div className="flex items-center justify-center space-x-3 glass-effect-dark rounded-2xl p-4 hover-scale transition-all duration-300 border border-white/5">
                <Hammer className="w-6 h-6 text-slate-300" />
                <span className="text-white/90 font-medium">Premium Construction</span>
              </div>
              <div className="flex items-center justify-center space-x-3 glass-effect-dark rounded-2xl p-4 hover-scale transition-all duration-300 border border-white/5">
                <Users className="w-6 h-6 text-slate-300" />
                <span className="text-white/90 font-medium">Elite Management</span>
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-up" delay={1000} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="steel-gradient text-white border-0 hover:from-slate-700 hover:to-slate-800 font-semibold px-10 py-4 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all hover-lift"
              >
                Schedule Elite Consultation
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.open('tel:0711236128')}
                className="border-white/20 glass-effect-dark text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg rounded-2xl hover-scale"
              >
                Direct Line
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.open('https://wa.me/qr/W7Y5C2TH34Q2B1')}
                className="border-white/20 glass-effect-dark text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg rounded-2xl hover-scale animate-pulse-slow"
              >
                WhatsApp Connect
              </Button>
            </AnimatedCard>
          </AnimatedCard>
          
          <div className="animate-bounce-gentle mt-10">
            <ArrowDown className="w-8 h-8 mx-auto text-white/60" />
          </div>
        </div>

        {/* Mobile Content - Enhanced with sophisticated styling */}
        <div className="md:hidden relative z-10 text-center text-white px-3 w-full flex flex-col justify-center min-h-[70vh]">
          {/* Mobile Premium Card */}
          <AnimatedCard animation="scale-in" className="glass-effect-dark rounded-2xl border border-white/10 p-6 shadow-2xl mx-2 relative">
            <AnimatedCard animation="fade-up" delay={200} className="mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-600/20 to-slate-700/20 rounded-2xl mb-4 backdrop-blur-sm border border-white/10">
                <Building2 className="w-8 h-8 text-slate-300" />
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-up" delay={400}>
              <div className="flex items-center justify-center mb-3">
                <Crown className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-medium text-sm tracking-wide uppercase">Premium</span>
                <Crown className="w-5 h-5 text-yellow-400 ml-2" />
              </div>
              <h1 className="text-xl font-bold mb-4 leading-tight">
                <span className="block gradient-text">Craft.</span>
                <span className="block text-white/90">& Create.</span>
              </h1>
            </AnimatedCard>
            
            <AnimatedCard animation="fade-up" delay={600}>
              <p className="text-sm mb-6 text-white/80 leading-relaxed">
                Kenya's premier luxury construction & architectural excellence
              </p>
            </AnimatedCard>

            {/* Mobile Service Pills */}
            <AnimatedCard animation="slide-left" delay={800} className="flex flex-wrap justify-center gap-2 mb-6">
              <div className="flex items-center space-x-2 glass-effect-dark rounded-full px-4 py-2 hover-scale transition-all duration-300 border border-white/5">
                <Building2 className="w-4 h-4 text-slate-300" />
                <span className="text-xs text-white/90">Design</span>
              </div>
              <div className="flex items-center space-x-2 glass-effect-dark rounded-full px-4 py-2 hover-scale transition-all duration-300 border border-white/5">
                <Hammer className="w-4 h-4 text-slate-300" />
                <span className="text-xs text-white/90">Build</span>
              </div>
              <div className="flex items-center space-x-2 glass-effect-dark rounded-full px-4 py-2 hover-scale transition-all duration-300 border border-white/5">
                <Users className="w-4 h-4 text-slate-300" />
                <span className="text-xs text-white/90">Manage</span>
              </div>
            </AnimatedCard>
            
            {/* Mobile Action Buttons */}
            <AnimatedCard animation="fade-up" delay={1000} className="space-y-3">
              <Button 
                size="sm"
                onClick={scrollToContact}
                className="steel-gradient text-white border-0 hover:from-slate-700 hover:to-slate-800 font-semibold w-full text-sm py-3 rounded-xl shadow-lg hover-scale"
              >
                Elite Consultation
              </Button>
              
              <div className="flex gap-2">
                <Button 
                  size="sm"
                  variant="outline"
                  onClick={() => window.open('tel:0711236128')}
                  className="border-white/20 glass-effect-dark text-white hover:bg-white/10 font-semibold flex-1 text-sm py-2.5 rounded-xl hover-scale"
                >
                  Call
                </Button>
                
                <Button 
                  size="sm"
                  variant="outline"
                  onClick={() => window.open('https://wa.me/qr/W7Y5C2TH34Q2B1')}
                  className="border-white/20 glass-effect-dark text-white hover:bg-white/10 font-semibold flex-1 text-sm py-2.5 rounded-xl hover-scale animate-pulse-slow"
                >
                  WhatsApp
                </Button>
              </div>
            </AnimatedCard>
          </AnimatedCard>
          
          <div className="animate-bounce-gentle mt-6">
            <ArrowDown className="w-6 h-6 mx-auto text-white/60" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
