import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./images-slider";

export function LedHeroSlider() {
  const images = [
    "/images/image_0.jpg",
    "/images/image_3.jpg", 
    "/images/spidermon.jpg",
    "/images/4bfb9caf42909ca7f014978738ad32d0.jpg",
  ];

  return (
    <ImagesSlider className="h-[60vh] md:h-[70vh]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center text-center px-4"
      >
        <motion.h1 className="font-bold text-3xl md:text-6xl text-white mb-4">
          Illuminate Your World with
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Premium LED Lights
          </span>
        </motion.h1>
        
        <motion.p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          Discover energy-efficient LED lighting solutions that transform your space 
          while saving up to 80% on electricity bills
        </motion.p>
        
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button 
            onClick={() => window.location.href = '/products'}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors duration-300"
          >
            Shop LED Products
          </button>
          <button 
            onClick={() => {
              const categoriesSection = document.getElementById('categories');
              if (categoriesSection) {
                categoriesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-full font-semibold transition-colors duration-300"
          >
            Learn More
          </button>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.8,
          }}
          className="mt-8 flex items-center space-x-4 text-sm text-gray-300"
        >
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Free Delivery
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Cash on Delivery
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            2-Year Warranty
          </div>
        </motion.div>
      </motion.div>
    </ImagesSlider>
  );
}