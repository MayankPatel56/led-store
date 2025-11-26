import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import BuyButton from '../components/BuyButton';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [pinCode, setPinCode] = useState('');
  const [codAvailable, setCodAvailable] = useState(true);

  const product = productsData.products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Product Not Found</h1>
        <Link to="/products" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
          Back to Products
        </Link>
      </div>
    );
  }

  const checkCodAvailability = () => {
    // Simulate COD check
    const available = pinCode.length === 6 && /^\d+$/.test(pinCode);
    setCodAvailable(available);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden ${
                  selectedImage === index ? 'border-blue-600' : 'border-gray-300'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 text-lg">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-green-600">₹{product.price}</span>
              <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                {product.discount}% OFF
              </span>
            </div>
            <div className="text-green-600 font-semibold mt-1">
              You save ₹{product.originalPrice - product.price}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3">Key Features:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Service Highlights */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-green-600">
              <span className="mr-2">✓</span>
              Free Delivery
            </div>
            <div className="flex items-center text-green-600">
              <span className="mr-2">✓</span>
              7 Days Easy Return
            </div>
            <div className="flex items-center text-green-600">
              <span className="mr-2">✓</span>
              Cash on Delivery
            </div>
            <div className="flex items-center text-green-600">
              <span className="mr-2">✓</span>
              {product.warranty} Warranty
            </div>
          </div>

          {/* COD Availability Checker */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold mb-2">Check COD Availability</h4>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Enter PIN Code"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                maxLength={6}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
              />
              <button
                onClick={checkCodAvailability}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Check
              </button>
            </div>
            {pinCode && (
              <div className={`mt-2 text-sm ${
                codAvailable ? 'text-green-600' : 'text-red-600'
              }`}>
                {codAvailable ? 
                  `✅ Cash on Delivery available for ${pinCode}` : 
                  '❌ COD not available for this PIN code'
                }
              </div>
            )}
          </div>

          {/* Buy Buttons */}
          <div className="space-y-3">
            <BuyButton product={product} />
            <div className="text-center text-sm text-gray-500">
              Lowest Price Guaranteed • 100% Genuine Products
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Tabs */}
      <div className="mt-12">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button className="py-4 px-1 border-b-2 border-blue-600 font-semibold text-blue-600">
              Description
            </button>
            <button className="py-4 px-1 text-gray-500 hover:text-gray-700">
              Specifications
            </button>
            <button className="py-4 px-1 text-gray-500 hover:text-gray-700">
              Reviews ({product.reviews})
            </button>
          </nav>
        </div>

        <div className="py-6">
          <h3 className="font-semibold text-lg mb-4">Product Description</h3>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Energy Saving Comparison</h4>
              <div className="bg-green-50 p-4 rounded-lg">
                <p>This {product.wattage}W LED bulb replaces traditional {product.wattage * 5}W incandescent bulb</p>
                <p className="text-green-600 font-semibold mt-2">
                  Save up to 80% on electricity bills!
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Warranty Information</h4>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p><strong>{product.warranty} Warranty</strong></p>
                <p className="text-sm text-gray-600 mt-1">
                  Free replacement for any manufacturing defects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;