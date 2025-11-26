import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';
import ProductCard from '../components/ProductCard';
import { LedHeroSlider } from '../components/ui/led-hero-slider';

const Home = () => {
  const featuredProducts = productsData.products.slice(0, 4);
  const bestSelling = productsData.products.slice(0, 6);

  return (
    <div>
      {/* Hero Section with Image Slider */}
      <section className="relative bg-gray-900 text-white">
        <LedHeroSlider />
      </section>

      {/* Top Categories */}
      <section id="categories" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Top Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categoriesData.categories.map(category => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  💡
                </div>
                <h3 className="font-semibold text-lg">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Selling */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Best Selling Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestSelling.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Energy Saving Benefits */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Energy Saving Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                💰
              </div>
              <h3 className="text-xl font-semibold mb-2">Save up to 80% on Electricity</h3>
              <p className="text-gray-600">LED lights consume significantly less power than traditional bulbs</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                ⏳
              </div>
              <h3 className="text-xl font-semibold mb-2">Long Lifespan</h3>
              <p className="text-gray-600">Lasts 25 times longer than incandescent bulbs</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                🌱
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco Friendly</h3>
              <p className="text-gray-600">No toxic elements, 100% recyclable</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;