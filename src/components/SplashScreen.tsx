import React, { useEffect, useState } from 'react';
import { ChefHat, Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showSpices, setShowSpices] = useState(false);

  useEffect(() => {
    // Animation sequence
    const timer1 = setTimeout(() => setShowLogo(true), 300);
    const timer2 = setTimeout(() => setShowText(true), 800);
    const timer3 = setTimeout(() => setShowSpices(true), 1200);

    // Progress bar animation
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(onComplete, 500); // Small delay before hiding splash
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(progressTimer);
    };
  }, [onComplete]);

  const spiceEmojis = ['🌶️', '🧄', '🧅', '🫚', '🌿', '⭐', '🍃', '🔥'];

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-red-900 via-orange-900 to-red-800 flex items-center justify-center overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full animate-spin-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-white/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 border border-white/30 rounded-full animate-ping"></div>
      </div>

      {/* Floating Spices */}
      {showSpices && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 15}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 3}s`
              }}
            >
              {spiceEmojis[Math.floor(Math.random() * spiceEmojis.length)]}
            </div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="text-center text-white z-10">
        {/* Logo Animation */}
        <div className={`mb-8 transition-all duration-1000 ${
          showLogo ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-10'
        }`}>
          <div className="relative inline-block">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto shadow-2xl animate-pulse-glow">
              <ChefHat className="w-12 h-12 text-white" />
            </div>
            {/* Sparkle Effects */}
            <div className="absolute -top-2 -right-2 animate-bounce">
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </div>
            <div className="absolute -bottom-2 -left-2 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </div>
          </div>
        </div>

        {/* Brand Name Animation */}
        <div className={`mb-8 transition-all duration-1000 delay-300 ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
            Masala Roots
          </h1>
          <p className="text-xl text-orange-200 font-light tracking-wide">
            Authentic Indian Cuisine
          </p>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400"></div>
          </div>
        </div>

        {/* Loading Animation */}
        <div className={`transition-all duration-1000 delay-500 ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-4">
            <p className="text-orange-200 text-sm mb-2">Preparing your culinary journey...</p>
          </div>
          
          {/* Progress Bar */}
          <div className="w-64 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-400 to-red-400 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* Progress Percentage */}
          <div className="mt-2 text-orange-300 text-sm font-medium">
            {progress}%
          </div>
        </div>

        {/* Tagline */}
        <div className={`mt-8 transition-all duration-1000 delay-700 ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-orange-200/80 text-sm italic">
            "Where tradition meets taste"
          </p>
        </div>
      </div>

      {/* Gradient Overlay Animation */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent animate-pulse"></div>
    </div>
  );
};

export default SplashScreen;