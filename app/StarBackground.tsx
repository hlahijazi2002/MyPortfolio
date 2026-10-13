"use client";
import { useState, useEffect } from "react";

interface Star {
  size: number;
  top: number;
  left: number;
  animationDelay: number;
  animationDuration: number;
  opacity: number;
}

const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 60 }).map(() => ({
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: Math.random() * 3 + 2,
      opacity: Math.random() * 0.8 + 0.2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-cosmic-black" />
      <div className="stars-container opacity-50">
        {stars.map((star, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StarBackground;
