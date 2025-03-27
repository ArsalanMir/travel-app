import React from "react";
import { motion } from "framer-motion";
import about from '../assets/about.avif'

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="mt-2 text-lg text-gray-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover our story and what makes us unique.
        </motion.p>

        {/* Content */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-10">
          {/* Left - Image */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={about}
              alt="About Us"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            className="w-full md:w-1/2 text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-semibold text-primary">
              Your Perfect Travel Partner
            </h3>
            <p className="text-gray-700 mt-4 leading-relaxed">
              We are dedicated to providing top-notch travel experiences to
              customers worldwide. With years of experience in the travel
              industry, we ensure that your trips are smooth, fun, and
              memorable.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Our team of experts secures the best deals on flights, hotels, and
              guided tours, making your journeys stress-free and affordable.
            </p>
            <button className="mt-6 bg-primary text-black px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
