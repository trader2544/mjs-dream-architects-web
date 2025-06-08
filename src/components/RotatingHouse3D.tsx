
import { useEffect, useRef } from 'react';

const RotatingHouse3D = () => {
  const houseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const house = houseRef.current;
    if (!house) return;

    // Add continuous rotation
    const animate = () => {
      if (house) {
        const currentRotation = house.style.transform;
        const match = currentRotation.match(/rotateY\(([^)]+)\)/);
        const currentDegrees = match ? parseFloat(match[1]) : 0;
        house.style.transform = `rotateY(${currentDegrees + 0.5}deg) rotateX(-10deg)`;
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto perspective-1000">
      <div
        ref={houseRef}
        className="relative w-full h-full transform-style-preserve-3d transition-transform duration-100"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateY(0deg) rotateX(-10deg)'
        }}
      >
        {/* House Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg transform-style-preserve-3d">
          {/* Front Face */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg border-2 border-white/30 transform translateZ-8">
            {/* Door */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-4 md:w-4 md:h-5 bg-amber-600 rounded-t-sm"></div>
            {/* Windows */}
            <div className="absolute top-2 left-1 w-2 h-2 md:w-3 md:h-3 bg-yellow-300 rounded-sm opacity-80"></div>
            <div className="absolute top-2 right-1 w-2 h-2 md:w-3 md:h-3 bg-yellow-300 rounded-sm opacity-80"></div>
          </div>
          
          {/* Right Face */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg transform rotateY-90 translateZ-8 border-2 border-white/20">
            <div className="absolute top-2 left-1 w-2 h-2 md:w-3 md:h-3 bg-yellow-300 rounded-sm opacity-60"></div>
          </div>
          
          {/* Left Face */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg transform rotateY-90 translateZ-0 border-2 border-white/20">
            <div className="absolute top-2 right-1 w-2 h-2 md:w-3 md:h-3 bg-yellow-300 rounded-sm opacity-60"></div>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg transform rotateY-180 translateZ-8 border-2 border-white/10"></div>
        </div>

        {/* Roof */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-6 md:border-l-10 md:border-r-10 md:border-b-8 border-l-transparent border-r-transparent border-b-red-600 transform-style-preserve-3d">
          {/* Roof shadow effect */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-7 border-r-7 border-b-5 md:border-l-9 md:border-r-9 md:border-b-7 border-l-transparent border-r-transparent border-b-red-700 opacity-60"></div>
        </div>

        {/* Chimney */}
        <div className="absolute -top-4 right-2 w-1.5 h-3 md:w-2 md:h-4 bg-gradient-to-r from-gray-600 to-gray-800 rounded-t-sm transform translateZ-4"></div>
        
        {/* Smoke particles */}
        <div className="absolute -top-1 right-2 w-1 h-1 bg-gray-300 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute -top-2 right-2.5 w-0.5 h-0.5 bg-gray-400 rounded-full opacity-40 animate-pulse"></div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .translateZ-8 {
          transform: translateZ(8px);
        }
        .translateZ-4 {
          transform: translateZ(4px);
        }
        .translateZ-0 {
          transform: translateZ(0px);
        }
        .rotateY-90 {
          transform: rotateY(90deg);
        }
        .rotateY-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default RotatingHouse3D;
