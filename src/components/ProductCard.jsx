import React from 'react';
import { Link } from 'react-router-dom';
import BuyButton from './BuyButton';

const ProductCard = ({ product }) => {
  const savings = product.originalPrice - product.price;
  
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-w-1 aspect-h-1 bg-gray-200">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center mb-2">
          <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
          <span className="ml-2 text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
          <span className="ml-2 text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
            {product.discount}% OFF
          </span>
        </div>
        
        <div className="text-sm text-green-600 mb-2">
          You save ₹{savings}
        </div>
        
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400">
            {'★'.repeat(Math.floor(product.rating))}
            {'☆'.repeat(5 - Math.floor(product.rating))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            ({product.reviews} reviews)
          </span>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Free Delivery
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Cash on Delivery
          </div>
        </div>
        
        <div className="mt-4">
          <BuyButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;