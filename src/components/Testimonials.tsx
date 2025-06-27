import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Food Blogger",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Absolutely incredible! The flavors are authentic and the service is outstanding. The butter chicken is the best I've ever had outside of India. Masala Roots has become my go-to place for Indian cuisine.",
      location: "New York, NY"
    },
    {
      name: "Michael Chen",
      role: "Restaurant Critic",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "A hidden gem that delivers exceptional Indian cuisine with remarkable consistency. The spice levels are perfect, and every dish tells a story of tradition and passion. Highly recommended!",
      location: "Los Angeles, CA"
    },
    {
      name: "Priya Patel",
      role: "Local Resident",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "As someone who grew up eating authentic Indian food, I can say that Masala Roots truly captures the essence of home cooking. The dal makhani reminds me of my grandmother's recipe.",
      location: "Chicago, IL"
    },
    {
      name: "David Rodriguez",
      role: "Business Owner",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "We've been ordering from Masala Roots for our office events for over two years. The quality never disappoints, and the team always goes above and beyond to accommodate our needs.",
      location: "Miami, FL"
    },
    {
      name: "Emily Thompson",
      role: "Food Enthusiast",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "The ambiance is warm and welcoming, and the food is simply divine. Every visit feels like a culinary journey through India. The staff is knowledgeable and always ready to help with recommendations.",
      location: "Seattle, WA"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-900 to-orange-900 text-white relative overflow-hidden" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-orange-300">Customers Say</span>
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Main Testimonial */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-orange-300 opacity-50">
              <Quote className="w-12 h-12" />
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-6 right-6 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Testimonial Content */}
            <div className="text-center mt-8">
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Text */}
              <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 font-light">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-orange-300"
                />
                <div className="text-left">
                  <h4 className="text-xl font-bold text-orange-300">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-orange-200">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-sm text-orange-200/80">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-orange-300 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { number: "2,500+", label: "Happy Customers" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "25+", label: "Years of Excellence" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-300 mb-2">
                {stat.number}
              </div>
              <div className="text-orange-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Happy Customers?</h3>
          <p className="text-orange-200 mb-6">Experience the flavors that have earned us thousands of 5-star reviews</p>
          <button className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;