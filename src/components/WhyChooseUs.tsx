
import { Award, Clock, Users, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "10+ Years Industry Experience",
      description: "Proven track record of delivering exceptional projects across residential and commercial sectors."
    },
    {
      icon: Clock,
      title: "Timely Project Delivery",
      description: "We understand the importance of deadlines and consistently deliver projects on time and within budget."
    },
    {
      icon: Users,
      title: "Client-Centered Approach",
      description: "Your vision is our priority. We work closely with you throughout every phase of the project."
    },
    {
      icon: Shield,
      title: "Qualified Engineers & Designers",
      description: "Our team consists of certified professionals with extensive expertise in modern construction techniques."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose MJS Products Limited?
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Trust, professionalism, and excellence in every project we undertake
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center group hover-scale"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <reason.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
