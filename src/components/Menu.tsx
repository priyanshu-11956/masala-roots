import React, { useState, useEffect, useRef } from 'react';
import { Star, Flame, Leaf } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'mains', name: 'Main Course', icon: '🍛' },
    { id: 'breads', name: 'Breads', icon: '🫓' },
    { id: 'desserts', name: 'Desserts', icon: '🍮' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' }
  ];

  const menuItems = {
    appetizers: [
      {
        name: "Samosa Chaat",
        description: "Crispy samosas topped with yogurt, chutneys, and fresh herbs",
        price: "$8.99",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        spicy: 2,
        vegetarian: true,
        popular: true
      },
      {
        name: "Tandoori Chicken Wings",
        description: "Marinated chicken wings cooked in traditional tandoor oven",
        price: "$12.99",
        image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        spicy: 3,
        vegetarian: false,
        popular: false
      },
      {
        name: "Paneer Tikka",
        description: "Grilled cottage cheese cubes with bell peppers and onions",
        price: "$10.99",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        spicy: 2,
        vegetarian: true,
        popular: true
      }
    ],
    mains: [
      {
        name: "Butter Chicken",
        description: "Tender chicken in rich tomato and cream sauce",
        price: "$16.99",
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        spicy: 2,
        vegetarian: false,
        popular: true
      },
      {
        name: "Lamb Biryani",
        description: "Fragrant basmati rice with tender lamb and aromatic spices",
        price: "$19.99",
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        spicy: 3,
        vegetarian: false,
        popular: true
      },
      {
        name: "Dal Makhani",
        description: "Creamy black lentils slow-cooked with butter and spices",
        price: "$13.99",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        spicy: 1,
        vegetarian: true,
        popular: false
      }
    ],
    breads: [
      {
        name: "Garlic Naan",
        description: "Fresh baked bread with garlic and herbs",
        price: "$4.99",
        image: "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        spicy: 0,
        vegetarian: true,
        popular: true
      },
      {
        name: "Stuffed Kulcha",
        description: "Bread stuffed with spiced potatoes and onions",
        price: "$6.99",
        image: "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        spicy: 1,
        vegetarian: true,
        popular: false
      }
    ],
    desserts: [
      {
        name: "Gulab Jamun",
        description: "Sweet milk dumplings in rose-flavored syrup",
        price: "$6.99",
        image: "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        spicy: 0,
        vegetarian: true,
        popular: true
      },
      {
        name: "Kulfi",
        description: "Traditional Indian ice cream with cardamom and pistachios",
        price: "$5.99",
        image: "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        spicy: 0,
        vegetarian: true,
        popular: false
      }
    ],
    beverages: [
      {
        name: "Mango Lassi",
        description: "Creamy yogurt drink with fresh mango",
        price: "$4.99",
        image: "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        spicy: 0,
        vegetarian: true,
        popular: true
      },
      {
        name: "Masala Chai",
        description: "Traditional spiced tea with milk",
        price: "$3.99",
        image: "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        spicy: 1,
        vegetarian: true,
        popular: false
      }
    ]
  };

  const renderSpiceLevel = (level: number) => {
    return Array.from({ length: 3 }, (_, i) => (
      <Flame
        key={i}
        className={`w-4 h-4 ${
          i < level ? 'text-red-500' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="menu" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Menu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our carefully crafted dishes made with authentic spices and traditional recipes
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-500 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  {item.popular && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>Popular</span>
                    </span>
                  )}
                  {item.vegetarian && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Leaf className="w-3 h-3" />
                      <span>Veg</span>
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full font-bold">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <div className="flex space-x-1">
                    {renderSpiceLevel(item.spicy)}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-600 mb-6">
              Our chefs can customize any dish to your preferences. Just ask!
            </p>
            <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Contact Chef
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;