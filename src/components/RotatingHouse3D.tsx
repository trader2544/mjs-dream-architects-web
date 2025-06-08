
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
        house.style.transform = `rotateY(${currentDegrees + 0.3}deg) rotateX(-15deg)`;
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto perspective-1000">
      <div
        ref={houseRef}
        className="relative w-full h-full transform-style-preserve-3d transition-transform duration-200"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateY(0deg) rotateX(-15deg)'
        }}
      >
        {/* Modern House Base */}
        <div className="absolute inset-0 transform-style-preserve-3d">
          {/* Front Wall */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 rounded-lg border border-slate-200"
            style={{ transform: 'translateZ(10px)' }}
          >
            {/* Main Door */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-6 md:w-5 md:h-7 bg-gradient-to-b from-amber-700 to-amber-800 rounded-t-md border border-amber-600">
              <div className="absolute top-2 right-0.5 w-0.5 h-0.5 bg-yellow-300 rounded-full"></div>
            </div>
            {/* Windows */}
            <div className="absolute top-2 left-2 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded border border-slate-300">
              <div className="absolute inset-0.5 border border-slate-200 rounded-sm"></div>
            </div>
            <div className="absolute top-2 right-2 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded border border-slate-300">
              <div className="absolute inset-0.5 border border-slate-200 rounded-sm"></div>
            </div>
          </div>
          
          {/* Right Wall */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-slate-400 to-slate-500 rounded-lg border border-slate-300"
            style={{ transform: 'rotateY(90deg) translateZ(10px)' }}
          >
            <div className="absolute top-3 left-2 w-2.5 h-2.5 md:w-3 md:h-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded border border-slate-300">
              <div className="absolute inset-0.5 border border-slate-200 rounded-sm"></div>
            </div>
          </div>
          
          {/* Left Wall */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg border border-slate-200"
            style={{ transform: 'rotateY(-90deg) translateZ(10px)' }}
          >
            <div className="absolute top-3 right-2 w-2.5 h-2.5 md:w-3 md:h-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded border border-slate-300">
              <div className="absolute inset-0.5 border border-slate-200 rounded-sm"></div>
            </div>
          </div>
          
          {/* Back Wall */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-slate-500 to-slate-600 rounded-lg border border-slate-400"
            style={{ transform: 'rotateY(180deg) translateZ(10px)' }}
          >
          </div>
        </div>

        {/* Modern Flat Roof */}
        <div 
          className="absolute -top-2 left-0 right-0 h-4 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg border border-slate-500"
          style={{ transform: 'rotateX(90deg) translateZ(10px)' }}
        >
          {/* Roof Details */}
          <div className="absolute inset-1 border border-slate-500 rounded"></div>
        </div>

        {/* Modern Chimney */}
        <div 
          className="absolute -top-1 right-3 w-2 h-4 md:w-2.5 md:h-5 bg-gradient-to-r from-slate-700 to-slate-800 rounded-sm border border-slate-600"
          style={{ transform: 'translateZ(12px)' }}
        >
        </div>
        
        {/* Elegant smoke particles */}
        <div className="absolute -top-0 right-3.5 w-1 h-1 bg-slate-300 rounded-full opacity-70 animate-float"></div>
        <div className="absolute top-1 right-4 w-0.5 h-0.5 bg-slate-400 rounded-full opacity-50 animate-pulse-slow"></div>
      </div>
    </div>
  );
};

export default RotatingHouse3D;
