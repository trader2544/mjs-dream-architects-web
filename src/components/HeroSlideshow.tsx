
import { useState, useEffect } from 'react';

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Selected 3 cool construction images for hero section
  const slides = [
    {
      image: "/lovable-uploads/1b574229-f1af-4fef-a4c4-2adfababca1f.png",
      title: "Professional Construction in Progress",
      subtitle: "Expert building and construction management"
    },
    {
      image: "/lovable-uploads/5119285b-c467-4203-aa35-c554a2fd261b.png",
      title: "Foundation & Structural Excellence",
      subtitle: "Quality concrete work and structural engineering"
    },
    {
      image: "/lovable-uploads/b91e45cc-ae92-4b0b-bd6f-14378beb6acb.png",
      title: "Modern Building Construction",
      subtitle: "Contemporary residential and commercial projects"
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
