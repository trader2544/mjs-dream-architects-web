import { Eye, Target, Heart } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
const AboutUs = () => {
  const values = [{
    icon: Eye,
    title: "Vision",
    description: "To be the leading architectural and construction company, creating innovative and sustainable structures that inspire communities.",
    mobileDescription: "Leading architectural company creating innovative structures."
  }, {
    icon: Target,
    title: "Mission",
    description: "Delivering exceptional design and construction services through creativity, quality craftsmanship, and unwavering commitment to client satisfaction.",
    mobileDescription: "Exceptional design & construction through quality craftsmanship."
  }, {
    icon: Heart,
    title: "Core Values",
    description: "Excellence, Integrity, Innovation, and Client-Centricity drive every project we undertake.",
    mobileDescription: "Excellence, Integrity, Innovation drive every project."
  }];
  return <section id="about" className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            About MJS Products Limited
          </h2>
          <div className="w-16 md:w-24 h-1 bg-blue-500 mx-auto mb-6 md:mb-8"></div>
          <p className="text-sm md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <span className="hidden md:block">
              MJS Products Limited is a premier design and construction company delivering quality, 
              creativity, and professionalism in every project. From architectural dreams to finished 
              masterpieces, we offer tailored solutions to suit your goals.
            </span>
            <span className="md:hidden">
              Premier design and construction company delivering quality and creativity in every project.
            </span>
          </p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, index) => <div key={index} className="text-center group hover-scale">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-colors bg-zinc-600">
                <value.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>)}
        </div>

        {/* Mobile Carousel - Slower Animation */}
        <div className="md:hidden">
          <Carousel opts={{
          align: "start",
          loop: true
        }} plugins={[Autoplay({
          delay: 4000,
          stopOnInteraction: false
        })]} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {values.map((value, index) => <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5">
                  <div className="text-center bg-white rounded-lg p-4 shadow-lg">
                    <div className="w-12 h-12 mx-auto mb-3 bg-blue-500 rounded-full flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {value.mobileDescription}
                    </p>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>;
};
export default AboutUs;