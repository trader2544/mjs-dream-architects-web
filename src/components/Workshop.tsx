import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Hammer, Wrench, TreePine, Shield, Star, Phone } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const Workshop = () => {
  const [activeService, setActiveService] = useState('timber');

  const workshopServices = {
    timber: {
      title: "Premium Timber Works",
      icon: TreePine,
      color: "from-amber-600 to-amber-700",
      services: [
        { name: "Custom Doors & Windows", desc: "Handcrafted wooden doors and window frames" },
        { name: "Kitchen Cabinets", desc: "Bespoke kitchen cabinetry and storage solutions" },
        { name: "Furniture Making", desc: "Custom tables, chairs, and wooden furniture" },
        { name: "Flooring & Decking", desc: "Quality wooden flooring and outdoor decking" },
        { name: "Wooden Structures", desc: "Pergolas, gazebos, and outdoor structures" }
      ]
    },
    metal: {
      title: "Expert Metal Works",
      icon: Wrench,
      color: "from-gray-600 to-gray-700",
      services: [
        { name: "Security Doors & Gates", desc: "Strong metal security solutions for homes and offices" },
        { name: "Window Grilles", desc: "Decorative and security window grilles" },
        { name: "Staircases & Railings", desc: "Metal staircases and safety railings" },
        { name: "Welding Services", desc: "Professional welding and metal repair work" },
        { name: "Custom Metal Fabrication", desc: "Bespoke metalwork for any project" }
      ]
    }
  };

  return (
    <section id="workshop" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedCard animation="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl mb-6">
            <Hammer className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Workshop Services
          </h2>
          <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Expert craftsmanship in timber and metal works - from custom doors to security solutions
          </p>
        </AnimatedCard>

        {/* Service Type Navigation */}
        <AnimatedCard animation="scale-in" delay={200} className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.entries(workshopServices).map(([key, service]) => {
            const IconComponent = service.icon;
            return (
              <Button
                key={key}
                variant={activeService === key ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveService(key)}
                className={`group px-6 py-4 text-base font-semibold rounded-2xl transition-all duration-300 hover-lift ${
                  activeService === key 
                    ? `bg-gradient-to-r ${service.color} text-white shadow-xl` 
                    : "border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                }`}
              >
                <IconComponent className="w-5 h-5 mr-2" />
                {service.title}
              </Button>
            );
          })}
        </AnimatedCard>

        {/* Active Service Display */}
        <AnimatedCard animation="fade-up" delay={400} className="max-w-6xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 md:p-12 border border-slate-200 shadow-2xl relative">
            <div className="text-center mb-10">
              {(() => {
                const IconComponent = workshopServices[activeService as keyof typeof workshopServices].icon;
                return <IconComponent className="w-12 h-12 mx-auto mb-4 text-slate-600" />;
              })()}
              <h3 className="text-2xl md:text-4xl font-bold gradient-text mb-4">
                {workshopServices[activeService as keyof typeof workshopServices].title}
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-700 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
              {workshopServices[activeService as keyof typeof workshopServices].services.map((service, index) => (
                <AnimatedCard 
                  key={index} 
                  animation="slide-left" 
                  delay={index * 100}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-4 md:p-6 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover-lift shadow-lg hover:shadow-xl">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full mt-1 md:mt-2"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm md:text-lg font-bold text-slate-800 mb-1 md:mb-2 group-hover:text-slate-900 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-xs md:text-base text-slate-600 leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            {/* Call to Action - Same as other sections */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="text-slate-600 font-medium">Quality Craftsmanship Guaranteed</span>
                <Star className="w-5 h-5 text-yellow-500 ml-2" />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Request Workshop Quote
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.open('tel:0711236128')}
                  className="border-amber-600/20 text-amber-700 hover:bg-amber-50 font-semibold px-8 py-4 rounded-2xl hover-scale"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Workshop
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.open('https://wa.me/qr/W7Y5C2TH34Q2B1')}
                  className="border-amber-600/20 text-amber-700 hover:bg-amber-50 font-semibold px-8 py-4 rounded-2xl hover-scale animate-pulse-slow"
                >
                  WhatsApp Workshop
                </Button>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default Workshop;
