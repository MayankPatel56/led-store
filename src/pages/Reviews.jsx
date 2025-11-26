import React, { useState } from 'react';

const Reviews = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Sample reviews data
  const reviews = [
    {
      id: 1,
      customer: 'Amit Sharma',
      location: 'Mumbai',
      rating: 5,
      product: 'Smart LED Bulb 9W',
      comment: 'Excellent product! The colors are vibrant and the app control works perfectly. Saved 80% on my electricity bill!',
      date: '2024-01-15',
      verified: true,
      images: ['https://images.unsplash.com/photo-1558618666-fcd25856cd63?w=300']
    },
    {
      id: 2,
      customer: 'Priya Patel',
      location: 'Delhi',
      rating: 4,
      product: 'LED Strip Lights 5M',
      comment: 'Beautiful lighting for my bedroom. Easy installation and the remote control is very convenient.',
      date: '2024-01-10',
      verified: true,
      images: []
    },
    {
      id: 3,
      customer: 'Rahul Verma',
      location: 'Bangalore',
      rating: 5,
      product: 'LED Panel Light 18W',
      comment: 'Perfect for my office. Bright yet comfortable lighting. Installation was straightforward.',
      date: '2024-01-08',
      verified: true,
      images: []
    },
    {
      id: 4,
      customer: 'Sneha Reddy',
      location: 'Hyderabad',
      rating: 5,
      product: 'Smart LED Bulb 9W',
      comment: 'Love the voice control feature with Alexa. The warm white light is perfect for my living room.',
      date: '2024-01-05',
      verified: true,
      images: ['https://images.unsplash.com/photo-1572021335466-f4a4f55d8b33?w=300']
    },
    {
      id: 5,
      customer: 'Vikram Singh',
      location: 'Pune',
      rating: 4,
      product: 'LED Tube Light 20W',
      comment: 'Great replacement for old fluorescent tubes. Much brighter and energy efficient.',
      date: '2024-01-03',
      verified: true,
      images: []
    },
    {
      id: 6,
      customer: 'Neha Gupta',
      location: 'Chennai',
      rating: 5,
      product: 'LED Strip Lights 5M',
      comment: 'Used these for my kitchen cabinets. The waterproof feature is great and the colors are amazing!',
      date: '2023-12-28',
      verified: true,
      images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300']
    }
  ];

  const productReviews = {
    'Smart LED Bulb 9W': reviews.filter(r => r.product === 'Smart LED Bulb 9W'),
    'LED Strip Lights 5M': reviews.filter(r => r.product === 'LED Strip Lights 5M'),
    'LED Panel Light 18W': reviews.filter(r => r.product === 'LED Panel Light 18W'),
    'LED Tube Light 20W': reviews.filter(r => r.product === 'LED Tube Light 20W')
  };

  const displayedReviews = activeTab === 'all' ? reviews : productReviews[activeTab] || [];

  const renderStars = (rating) => {
    return (
      <div className="flex text-yellow-400">
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Customer Reviews</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            See what our 50,000+ customers are saying about our LED products
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">4.8/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">5000+</div>
              <div className="text-gray-600">Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">98%</div>
              <div className="text-gray-600">Recommend</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              All Reviews
            </button>
            {Object.keys(productReviews).map(product => (
              <button
                key={product}
                onClick={() => setActiveTab(product)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  activeTab === product
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {product}
              </button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedReviews.map(review => (
              <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
                {/* Customer Info */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">
                      {review.customer.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{review.customer}</h4>
                    <p className="text-gray-600 text-sm">{review.location}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  {renderStars(review.rating)}
                  <span className="ml-2 text-sm text-gray-600">{review.date}</span>
                </div>

                {/* Product */}
                <p className="text-blue-600 font-semibold mb-3">{review.product}</p>

                {/* Comment */}
                <p className="text-gray-700 mb-4">{review.comment}</p>

                {/* Images */}
                {review.images.length > 0 && (
                  <div className="flex gap-2 mb-4">
                    {review.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt="Review"
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}

                {/* Verified Badge */}
                {review.verified && (
                  <div className="flex items-center text-green-600 text-sm">
                    <span className="mr-1">✓</span>
                    Verified Purchase
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* No Reviews Message */}
          {displayedReviews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No reviews found for this product.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Share Your Experience</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Bought our LED products? Help other customers by sharing your review and photos!
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Write a Review
          </button>
        </div>
      </section>
    </div>
  );
};

export default Reviews;