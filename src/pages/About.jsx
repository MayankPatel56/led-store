import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About LEDup Store</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Illuminating Lives with Energy-Efficient LED Solutions Since 2020
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-6">
                Founded in 2020, LEDup Store began with a simple mission: to make energy-efficient 
                LED lighting accessible and affordable for everyone in India. We believe that 
                sustainable living shouldn't be a luxury.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                What started as a small online store has grown into one of India's leading LED 
                lighting destinations, serving over 50,000 happy customers across the country.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50,000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">95%</div>
                  <div className="text-gray-600">Energy Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">25+</div>
                  <div className="text-gray-600">Cities Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">24/7</div>
                  <div className="text-gray-600">Customer Support</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25856cd63?w=600" 
                alt="LED Lighting" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Why Choose LED?</h3>
              <p className="text-gray-600">
                LED lights consume 80% less energy and last 25 times longer than traditional bulbs, 
                making them the smart choice for your home and business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide high-quality, energy-efficient LED lighting solutions that help 
                Indian households and businesses reduce their electricity bills while 
                contributing to a greener environment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become India's most trusted LED lighting brand, known for innovation, 
                quality, and exceptional customer service while promoting sustainable 
                living practices nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose LEDup Store?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Premium Quality</h4>
              <p className="text-gray-600">
                All our LED products undergo rigorous quality testing and come with 
                manufacturer warranties for your peace of mind.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Best Prices</h4>
              <p className="text-gray-600">
                We offer competitive prices with regular discounts and offers, making 
                quality LED lighting affordable for everyone.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Free Shipping</h4>
              <p className="text-gray-600">
                Enjoy free delivery across India with cash on delivery option 
                available for all orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <h4 className="text-xl font-semibold">Rajesh Kumar</h4>
              <p className="text-blue-600 mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                With 15+ years in electrical engineering, Rajesh is passionate about 
                sustainable energy solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👩‍💼</span>
              </div>
              <h4 className="text-xl font-semibold">Priya Sharma</h4>
              <p className="text-blue-600 mb-2">Head of Operations</p>
              <p className="text-gray-600 text-sm">
                Priya ensures smooth operations and exceptional customer service 
                across all touchpoints.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍🔧</span>
              </div>
              <h4 className="text-xl font-semibold">Amit Patel</h4>
              <p className="text-blue-600 mb-2">Technical Director</p>
              <p className="text-gray-600 text-sm">
                Amit leads our product development and quality assurance teams 
                with technical expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;