import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const OrderSuccess = () => {
  const location = useLocation();
  const { orderId, total } = location.state || {};

  if (!orderId) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Order information not found</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl text-green-600">✓</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="text-center mb-6">
            <p className="text-gray-600 mb-2">Your order has been confirmed</p>
            <p className="text-2xl font-bold text-green-600">Order ID: {orderId}</p>
          </div>

          <div className="border-t border-b py-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Total Amount:</span>
              <span className="text-xl font-bold">₹{total}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>Payment Method:</span>
              <span>Cash on Delivery</span>
            </div>
          </div>

          <div className="space-y-3 text-sm text-gray-600 text-left">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              <span>Order confirmation sent to your registered mobile number</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              <span>Expected delivery: 3-5 business days</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              <span>You can track your order using the Order ID</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/track-order"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Track Your Order
          </Link>
          <Link
            to="/products"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Continue Shopping
          </Link>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold mb-2">What's Next?</h3>
          <p className="text-sm text-gray-600">
            Our team will process your order and you'll receive updates via SMS. 
            For any queries, call us at <strong>+91 9876543210</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;