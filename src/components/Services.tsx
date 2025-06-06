
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('design');

  const serviceCategories = {
    design: {
      title: "Design Services",
      services: [
        "Architectural Design",
        "Structural Design", 
        "Interior Design",
        "Landscape Design",
        "3D Renderings & Visualization",
        "Project Planning & Feasibility Studies"
      ]
    },
    construction: {
      title: "Construction Services",
      services: [
        "Residential & Commercial Building Construction",
        "Renovations & Remodeling",
        "Project Management",
        "Site Supervision",
        "Finishing Works (tiling, painting, ceilings)"
      ]
    },
    additional: {
      title: "Additional Services",
      services: [
        "Cost Estimation & Budgeting",
        "Permit & Approval Assistance",
        "Material Sourcing",
        "Sustainable/Green Building Solutions"
      ]
    }
  };

  return (
    <section id="services" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Our Services
          </h2>
          <div className="w-16 md:w-24 h-1 bg-blue-500 mx-auto mb-6 md:mb-8"></div>
          <p className="text-sm md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="hidden md:block">
              Comprehensive design and construction solutions tailored to your vision
            </span>
            <span className="md:hidden">
              Complete design & construction solutions
            </span>
          </p>
        </div>

        {/* Service Category Tabs */}
        <div className="flex flex-col sm:flex-row justify-center mb-8 md:mb-12 gap-2 md:gap-4">
          {Object.entries(serviceCategories).map(([key, category]) => (
            <Button
              key={key}
              variant={activeCategory === key ? "default" : "outline"}
              size={window.innerWidth < 768 ? "sm" : "lg"}
              onClick={() => setActiveCategory(key)}
              className={`px-3 md:px-6 py-2 md:py-3 text-xs md:text-base font-semibold ${
                activeCategory === key 
                  ? "bg-blue-500 hover:bg-blue-600" 
                  : "border-blue-500 text-blue-500 hover:bg-blue-50"
              }`}
            >
              {category.title}
            </Button>
          ))}
        </div>

        {/* Active Service Category */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-8 lg:p-12">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
              {serviceCategories[activeCategory as keyof typeof serviceCategories].title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              {serviceCategories[activeCategory as keyof typeof serviceCategories].services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-500 rounded-full mr-3 md:mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium text-xs md:text-base">{service}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-6 md:mt-8">
              <Button 
                variant="outline"
                size={window.innerWidth < 768 ? "sm" : "default"}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text-xs md:text-base"
              >
                Get a Quote for These Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
