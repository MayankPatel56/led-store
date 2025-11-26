import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const BuyButton = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    addToCart(product);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsAdding(false);
  };

  const handleBuyNow = async () => {
    await handleAddToCart();
    navigate('/cart');
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={handleAddToCart}
        disabled={isAdding || !product.inStock}
        className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
          isAdding
            ? 'bg-gray-400 cursor-not-allowed'
            : product.inStock
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        {isAdding ? 'Adding...' : product.inStock ? 'Add to Cart' : 'Out of Stock'}
      </button>
      
      <button
        onClick={handleBuyNow}
        disabled={isAdding || !product.inStock}
        className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
          isAdding
            ? 'bg-gray-400 cursor-not-allowed'
            : product.inStock
            ? 'bg-orange-600 hover:bg-orange-700 text-white'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Buy Now
      </button>
    </div>
  );
};

export default BuyButton;