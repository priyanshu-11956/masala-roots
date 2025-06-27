import React, { useEffect, useRef, useState } from 'react';
import { Heart, Users, Leaf, Award } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish is prepared with passion and care, using family recipes passed down through generations."
    },
    {
      icon: Users,
      title: "Family Tradition",
      description: "Our restaurant has been serving authentic Indian cuisine for over 25 years, bringing families together."
    },
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description: "We source the finest spices and ingredients daily to ensure the highest quality and authentic flavors."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized by food critics and customers alike for our exceptional taste and service."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50 to-red-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Story</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the rich heritage and passion behind every dish we serve
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">
                A Journey Through <span className="text-red-600">Authentic Flavors</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 1998 by Chef Rajesh Kumar, Masala Roots began as a small family kitchen 
                with a big dream - to share the authentic tastes of India with the world. What started 
                as a humble beginning has grown into a beloved culinary destination.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our secret lies in the traditional cooking methods passed down through generations, 
                combined with the freshest ingredients and spices imported directly from India. 
                Every dish tells a story of our heritage and passion for authentic Indian cuisine.
              </p>
            </div>

            {/* Chef Quote */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "Food is not just about taste, it's about bringing people together and creating 
                memories that last a lifetime."
              </blockquote>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Chef Rajesh Kumar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">Chef Rajesh Kumar</p>
                  <p className="text-sm text-gray-600">Founder & Head Chef</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Traditional cooking"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                />
                <img
                  src="https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                  alt="Fresh spices"
                  className="w-full h-32 object-cover rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                  alt="Restaurant interior"
                  className="w-full h-32 object-cover rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                />
                <img
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Chef at work"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${600 + index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mb-6 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;