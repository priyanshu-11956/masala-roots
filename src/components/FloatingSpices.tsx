import React, { useEffect, useState } from 'react';

const FloatingSpices = () => {
  const [spices, setSpices] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    rotation: number;
    speed: number;
    emoji: string;
  }>>([]);

  const spiceEmojis = ['🌶️', '🧄', '🧅', '🫚', '🌿', '⭐', '🍃', '🔥'];

  useEffect(() => {
    const generateSpices = () => {
      const newSpices = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 20 + 10,
        rotation: Math.random() * 360,
        speed: Math.random() * 2 + 0.5,
        emoji: spiceEmojis[Math.floor(Math.random() * spiceEmojis.length)]
      }));
      setSpices(newSpices);
    };

    generateSpices();
    window.addEventListener('resize', generateSpices);

    const animateSpices = () => {
      setSpices(prevSpices =>
        prevSpices.map(spice => ({
          ...spice,
          y: spice.y > window.innerHeight + 50 ? -50 : spice.y + spice.speed,
          rotation: spice.rotation + 1
        }))
      );
    };

    const interval = setInterval(animateSpices, 50);

    return () => {
      window.removeEventListener('resize', generateSpices);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {spices.map(spice => (
        <div
          key={spice.id}
          className="absolute opacity-20 animate-pulse"
          style={{
            left: `${spice.x}px`,
            top: `${spice.y}px`,
            fontSize: `${spice.size}px`,
            transform: `rotate(${spice.rotation}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {spice.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingSpices;