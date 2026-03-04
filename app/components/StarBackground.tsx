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

interface ShootingStar {
  top: number;
  left: number;
  delay: number;
}
const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 60 }).map(() => ({
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: Math.random() * 3 + 2,
      opacity: Math.random() * 0.8 + 0.2,
    }));

    const generatedShootingStars = Array.from({ length: 3 }).map(() => ({
      top: Math.random() * 50,
      left: Math.random() * 100,
      delay: Math.random() * 20,
    }));
    setStars(generatedStars);
    setShootingStars(generatedShootingStars);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-cosmic-black" />
      <div className="stars-container opacity-50">
        {stars.map((star, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full bg-white bg-white animate-pulse "
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

      <div className="absolute inset-0">
        {shootingStars.map((star, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-0.5 h-24 bg-linear-to-t from-transparent via-white to-transparent rotate-45 transform -translate-y-full rotate-45 animate-shooting-star "
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StarBackground;
