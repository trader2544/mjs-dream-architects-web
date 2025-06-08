
import { useState, useEffect } from 'react';

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Enhanced slides array with new premium images
  const slides = [
    {
      image: "/lovable-uploads/88851f8a-eb45-4d62-a570-97c323c43a3f.png",
      title: "Multi-Story Residential Complex",
      subtitle: "Modern apartment buildings with premium finishes across Kenya"
    },
    {
      image: "/lovable-uploads/8ea65503-6f15-4d14-936e-78fc4e23a60d.png",
      title: "Luxury Home Design",
      subtitle: "Custom residential homes with elegant Kenyan architecture"
    },
    {
      image: "/lovable-uploads/bc74222d-4ccb-4617-b0c2-12376dae3787.png",
      title: "Premium Modern Villa",
      subtitle: "Sophisticated two-story homes with contemporary Kenyan design"
    },
    {
      image: "/lovable-uploads/25cddd06-9f33-42bf-8fb8-f565617b93c3.png",
      title: "Resort-Style Living",
      subtitle: "Luxury residential complexes with world-class amenities"
    },
    {
      image: "/lovable-uploads/031ffd53-1274-4b16-8781-1e6b5c28e068.png",
      title: "Tropical Paradise Homes",
      subtitle: "Beautiful red-tiled homes perfect for Kenya's climate"
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
    }, 5000); // Slower transition for better viewing

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover transition-transform duration-1500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          
          {/* Enhanced overlay with Kenya-inspired elements */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
          
          {/* Floating animation elements */}
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-16 w-1 h-1 bg-red-400 rounded-full animate-bounce-gentle opacity-50"></div>
          <div className="absolute bottom-1/4 left-20 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse-slow opacity-40"></div>
        </div>
      ))}
      
      {/* Enhanced slide indicators with Kenya flag colors */}
      <div className="absolute bottom-2 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-500 hover-scale ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 scale-110 animate-glow' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Dynamic content overlay with enhanced animations */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${
            currentSlide % 2 === 0 ? 'animate-slide-up' : 'animate-fade-in'
          }`}>
            <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 md:mb-4 gradient-text">
              {slides[currentSlide].title}
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-blue-100 shimmer">
              {slides[currentSlide].subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements inspired by Kenyan culture */}
      <div className="absolute top-4 right-4 w-8 h-8 border-2 border-yellow-400 rounded-full animate-pulse-slow opacity-30"></div>
      <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-red-400 rotate-45 animate-bounce-gentle opacity-25"></div>
    </div>
  );
};

export default HeroSlideshow;
