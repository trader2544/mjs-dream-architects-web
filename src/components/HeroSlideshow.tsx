
import { useState, useEffect } from 'react';

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/lovable-uploads/fcebccef-525e-4ce2-bbdb-49720f902800.png",
      title: "Modern Architecture & Design",
      subtitle: "Creating innovative mixed-use developments"
    },
    {
      image: "/lovable-uploads/81dd85bb-7936-4957-9e55-d20fcb4f5b00.png",
      title: "Professional Construction",
      subtitle: "Expert building and renovation services"
    },
    {
      image: "/lovable-uploads/605637a4-ad12-446d-af84-46dea7a5aa8d.png",
      title: "Site Development",
      subtitle: "Complete construction management solutions"
    },
    {
      image: "/lovable-uploads/5b8a02e3-5430-44a8-9298-ec2f00d4bafc.png",
      title: "Structural Excellence",
      subtitle: "Quality craftsmanship in every project"
    },
    {
      image: "/lovable-uploads/c94479b7-9f84-4a04-949a-8ee71447ac77.png",
      title: "Residential Projects",
      subtitle: "Beautiful homes and living spaces"
    },
    {
      image: "/lovable-uploads/8c4db243-a866-4b77-bfc3-c662a266ec22.png",
      title: "Mixed-Use Development",
      subtitle: "Commercial and residential integration"
    },
    {
      image: "/lovable-uploads/a8e3283e-9353-4f15-b901-abf3940097be.png",
      title: "Petrol Station Complex",
      subtitle: "Modern commercial fuel facilities"
    },
    {
      image: "/lovable-uploads/e7ff85cb-1db2-4325-b934-086ca9e6901d.png",
      title: "Site Planning & Development",
      subtitle: "Strategic layout and infrastructure"
    },
    {
      image: "/lovable-uploads/9e02b8c3-9236-4930-8c0d-0fd109c19f24.png",
      title: "Apartment Complex",
      subtitle: "Multi-story residential buildings"
    },
    {
      image: "/lovable-uploads/94c2f93e-86a9-4a00-a4f7-5926497937d1.png",
      title: "Contemporary Homes",
      subtitle: "Modern residential architecture"
    },
    {
      image: "/lovable-uploads/ba64e3c1-a653-45ac-8922-efd3a2f99177.png",
      title: "Traditional Elegance",
      subtitle: "Classic home design with modern comfort"
    },
    {
      image: "/lovable-uploads/eee12261-a15a-4a00-8437-1219e3f86b04.png",
      title: "Stone & Brick Craftsmanship",
      subtitle: "Timeless materials and expert construction"
    },
    {
      image: "/lovable-uploads/1917d49d-cc64-43ce-8604-554dfecd427f.png",
      title: "Innovative Roofing",
      subtitle: "Modern architectural solutions"
    },
    {
      image: "/lovable-uploads/e029aea3-0c06-492a-91aa-f29a119520f5.png",
      title: "Contemporary Design",
      subtitle: "Unique circular and modern concepts"
    },
    {
      image: "/lovable-uploads/75e4c7a6-d29f-426a-9b9e-2790ae4ec3a0.png",
      title: "Interior Planning",
      subtitle: "Comprehensive space design and layout"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover md:object-cover object-center"
            style={{
              // Mobile-specific sizing
              transform: window.innerWidth < 768 ? 'scale(1.1)' : 'scale(1)',
              objectPosition: window.innerWidth < 768 ? 'center center' : 'center center'
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-2 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Dynamic content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 md:mb-4">
              {slides[currentSlide].title}
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-blue-100">
              {slides[currentSlide].subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlideshow;
