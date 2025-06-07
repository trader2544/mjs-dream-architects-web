
import { useState, useEffect } from 'react';

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Updated slides array with all construction images including new uploads
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
    },
    {
      image: "/lovable-uploads/88851f8a-eb45-4d62-a570-97c323c43a3f.png",
      title: "Multi-Story Residential Complex",
      subtitle: "Modern apartment buildings with premium finishes"
    },
    {
      image: "/lovable-uploads/8ea65503-6f15-4d14-936e-78fc4e23a60d.png",
      title: "Luxury Home Design",
      subtitle: "Custom residential homes with elegant architecture"
    },
    {
      image: "/lovable-uploads/3f5faf90-8bf3-4f8e-9a18-7ade7e454029.png",
      title: "Commercial Development",
      subtitle: "Large-scale commercial and mixed-use projects"
    },
    {
      image: "/lovable-uploads/41aab59f-7645-4fbb-be84-f7fc0a3356b2.png",
      title: "High-Rise Construction",
      subtitle: "Contemporary high-rise buildings and towers"
    },
    {
      image: "/lovable-uploads/4550a284-8db8-4e22-8220-b06f4e0c3c0f.png",
      title: "Modern Apartment Complex",
      subtitle: "Stylish residential developments with modern amenities"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Slightly faster transition for more images

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover transition-transform duration-1000"
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
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Dynamic content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 md:mb-4 transition-all duration-500">
              {slides[currentSlide].title}
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-blue-100 transition-all duration-500">
              {slides[currentSlide].subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlideshow;
