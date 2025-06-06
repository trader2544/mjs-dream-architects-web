
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
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Dynamic content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              {slides[currentSlide].title}
            </h2>
            <p className="text-lg md:text-xl text-blue-100">
              {slides[currentSlide].subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlideshow;
