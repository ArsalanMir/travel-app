import React from "react";
import Hero from "../components/Hero";
import DestinationShowcase from "../components/DestinationShowcase";
import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main className="space-y-12"> {/* Reduced spacing */}
      <Hero />

      {/* Destination Showcase Section */}
      <motion.section
        className="bg-gray-900 py-14 text-white" 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <DestinationShowcase />
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="bg-gray-100 py-14"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Testimonials />
      </motion.section>

      {/* Call-to-Action (CTA) Section */}
      <motion.section
        className="bg-gradient-to-r from-gray-800 to-black text-white py-12 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold">Start Your Journey Today!</h2>
        <p className="mt-3 text-lg text-gray-300">
          Explore stunning destinations with our expert guides.
        </p>
        <button className="mt-5 bg-yellow-500 text-black px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition">
          Book Now
        </button>
      </motion.section>
    </main>
  );
};

export default Home;
