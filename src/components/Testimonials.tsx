
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Kamau",
      role: "Homeowner",
      content: "MJS Products Limited transformed our dream home into reality. Their attention to detail and professionalism exceeded our expectations. The project was completed on time and within budget.",
      mobileContent: "MJS transformed our dream home into reality. Professional and on-time delivery.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Wanjiku",
      role: "Business Owner",
      content: "The commercial building they designed and built for our business is outstanding. The modern architecture and functional design have impressed all our clients and visitors.",
      mobileContent: "Outstanding commercial building design. Modern architecture that impresses clients.",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Ochieng",
      role: "Property Developer",
      content: "Working with MJS has been a game-changer for our development projects. Their expertise in both design and construction makes them a one-stop solution for all our needs.",
      mobileContent: "Game-changer for our projects. One-stop solution for design and construction.",
      rating: 5
    },
    {
      id: 4,
      name: "Grace Muturi",
      role: "Architect",
      content: "As a fellow professional in the industry, I can confidently say that MJS Products Limited sets the standard for quality construction and innovative design in Kenya.",
      mobileContent: "MJS sets the standard for quality construction and innovative design.",
      rating: 5
    }
  ];

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-6">
            What Our Clients Say
          </h2>
          <div className="w-16 md:w-24 h-1 bg-blue-500 mx-auto mb-4 md:mb-8"></div>
          <p className="text-sm md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="hidden md:block">
              Don't just take our word for it - hear from our satisfied clients
            </span>
            <span className="md:hidden">
              Hear from our satisfied clients
            </span>
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="bg-gray-50 rounded-lg md:rounded-2xl p-4 md:p-8 lg:p-12 text-center">
                    <div className="flex justify-center mb-3 md:mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 md:w-6 md:h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-xs md:text-lg lg:text-xl text-gray-700 mb-4 md:mb-8 italic leading-relaxed">
                      <span className="hidden md:block">"{testimonial.content}"</span>
                      <span className="md:hidden">"{testimonial.mobileContent}"</span>
                    </blockquote>
                    <div>
                      <h4 className="text-sm md:text-xl font-bold text-gray-900 mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-500 font-medium text-xs md:text-base">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
