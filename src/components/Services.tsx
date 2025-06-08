
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Building2, Hammer, Lightbulb, Users, Award, Shield } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('design');

  const serviceCategories = {
    design: {
      title: "Architectural Excellence",
      icon: Building2,
      color: "from-slate-600 to-slate-700",
      services: [
        { name: "Luxury Residential Design", desc: "Bespoke architectural solutions for discerning clients" },
        { name: "Commercial Architecture", desc: "Modern office complexes and retail spaces" },
        { name: "Interior Design & Styling", desc: "Premium interior concepts with international standards" },
        { name: "Landscape Architecture", desc: "Sophisticated outdoor living environments" },
        { name: "3D Visualization & Renderings", desc: "Photorealistic presentations of your vision" },
        { name: "Urban Planning", desc: "Large-scale development and master planning" }
      ]
    },
    construction: {
      title: "Premium Construction",
      icon: Hammer,
      color: "from-slate-500 to-slate-600",
      services: [
        { name: "Luxury Home Construction", desc: "High-end residential builds with premium finishes" },
        { name: "Commercial Development", desc: "Office towers, shopping centers, and mixed-use projects" },
        { name: "Renovation & Restoration", desc: "Heritage preservation and modern upgrades" },
        { name: "Project Management", desc: "End-to-end construction oversight and coordination" },
        { name: "Quality Assurance", desc: "Rigorous quality control and international standards" }
      ]
    },
    consulting: {
      title: "Strategic Consulting",
      icon: Lightbulb,
      color: "from-slate-400 to-slate-500",
      services: [
        { name: "Investment Advisory", desc: "Real estate development feasibility and ROI analysis" },
        { name: "Regulatory Compliance", desc: "NEMA approvals, permits, and legal compliance" },
        { name: "Sustainable Building", desc: "Green building certification and eco-friendly solutions" },
        { name: "Cost Optimization", desc: "Value engineering and budget optimization strategies" }
      ]
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <AnimatedCard animation="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Distinguished Services
          </h2>
          <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-slate-600 to-slate-700 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Exceptional architectural and construction services crafted for Kenya's most prestigious projects
          </p>
        </AnimatedCard>

        {/* Service Category Navigation */}
        <AnimatedCard animation="scale-in" delay={200} className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.entries(serviceCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={key}
                variant={activeCategory === key ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveCategory(key)}
                className={`group px-6 py-4 text-base font-semibold rounded-2xl transition-all duration-300 hover-lift ${
                  activeCategory === key 
                    ? `bg-gradient-to-r ${category.color} text-white shadow-xl` 
                    : "border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                }`}
              >
                <IconComponent className="w-5 h-5 mr-2" />
                {category.title}
              </Button>
            );
          })}
        </AnimatedCard>

        {/* Active Service Category Display */}
        <AnimatedCard animation="fade-up" delay={400} className="max-w-6xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 md:p-12 border border-slate-200 shadow-2xl">
            <div className="text-center mb-10">
              {(() => {
                const IconComponent = serviceCategories[activeCategory as keyof typeof serviceCategories].icon;
                return <IconComponent className="w-12 h-12 mx-auto mb-4 text-slate-600" />;
              })()}
              <h3 className="text-2xl md:text-4xl font-bold gradient-text mb-4">
                {serviceCategories[activeCategory as keyof typeof serviceCategories].title}
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-slate-600 to-slate-700 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {serviceCategories[activeCategory as keyof typeof serviceCategories].services.map((service, index) => (
                <AnimatedCard 
                  key={index} 
                  animation="slide-left" 
                  delay={index * 100}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover-lift shadow-lg hover:shadow-xl">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-3 h-3 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full mt-2"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift"
              >
                <Shield className="w-5 h-5 mr-2" />
                Request Premium Consultation
              </Button>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default Services;
