import React from "react";
import { motion } from "framer-motion";
import bali from '../assets/bali.avif';
import paris from '../assets/paris.avif';
import maldives from '../assets/maldives.avif';
import greece from '../assets/greece.jpg';

const destinations = [
  { name: "Bali, Indonesia", image: bali },
  { name: "Paris, France", image: paris },
  { name: "Santorini, Greece", image: greece },
  { name: "Maldives", image: maldives },
];

const DestinationShowcase = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-text">Popular Destinations</h2>
        <p className="mt-2 text-lg text-gray-500">Explore the most beautiful places in the world</p>

        {/* Destination Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {destinations.map((dest, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold">{dest.name}</h3>
              </div>
            </div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="mt-8 bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition"
        >
          View More
        </motion.button>
      </div>
    </section>
  );
};

export default DestinationShowcase;
