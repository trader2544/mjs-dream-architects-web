import { Award, Clock, Users, Shield } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
const WhyChooseUs = () => {
  const reasons = [{
    icon: Award,
    title: "10+ Years Industry Experience",
    description: "Proven track record of delivering exceptional projects across residential and commercial sectors.",
    mobileTitle: "10+ Years Experience",
    mobileDescription: "Proven track record in construction."
  }, {
    icon: Clock,
    title: "Timely Project Delivery",
    description: "We understand the importance of deadlines and consistently deliver projects on time and within budget.",
    mobileTitle: "On-Time Delivery",
    mobileDescription: "Projects delivered on time & budget."
  }, {
    icon: Users,
    title: "Client-Centered Approach",
    description: "Your vision is our priority. We work closely with you throughout every phase of the project.",
    mobileTitle: "Client-Focused",
    mobileDescription: "Your vision is our priority."
  }, {
    icon: Shield,
    title: "Qualified Engineers & Designers",
    description: "Our team consists of certified professionals with extensive expertise in modern construction techniques.",
    mobileTitle: "Qualified Team",
    mobileDescription: "Certified professionals & experts."
  }];
  return <section className="py-8 md:py-16 lg:py-24 bg-zinc-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 md:mb-6">
            Why Choose MJS Products Limited?
          </h2>
          <div className="w-16 md:w-24 h-1 bg-white mx-auto mb-4 md:mb-8"></div>
          <p className="text-sm md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
            <span className="hidden md:block">
              Trust, professionalism, and excellence in every project we undertake
            </span>
            <span className="md:hidden">
              Trust & excellence in every project
            </span>
          </p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => <div key={index} className="text-center group hover-scale">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <reason.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {reason.description}
              </p>
            </div>)}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel opts={{
          align: "start",
          loop: true
        }} plugins={[Autoplay({
          delay: 3000
        })]} className="w-full">
            <CarouselContent className="-ml-1 md:-ml-4">
              {reasons.map((reason, index) => <CarouselItem key={index} className="pl-1 md:pl-4 basis-4/5">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <div className="w-10 h-10 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                      <reason.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">
                      {reason.mobileTitle}
                    </h3>
                    <p className="text-blue-100 text-xs leading-relaxed">
                      {reason.mobileDescription}
                    </p>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>;
};
export default WhyChooseUs;