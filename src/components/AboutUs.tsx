
import { Eye, Target, Heart } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Eye,
      title: "Vision",
      description: "To be the leading architectural and construction company, creating innovative and sustainable structures that inspire communities."
    },
    {
      icon: Target,
      title: "Mission", 
      description: "Delivering exceptional design and construction services through creativity, quality craftsmanship, and unwavering commitment to client satisfaction."
    },
    {
      icon: Heart,
      title: "Core Values",
      description: "Excellence, Integrity, Innovation, and Client-Centricity drive every project we undertake."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About MJS Products Limited
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            MJS Products Limited is a premier design and construction company delivering quality, 
            creativity, and professionalism in every project. From architectural dreams to finished 
            masterpieces, we offer tailored solutions to suit your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center group hover-scale"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <value.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
