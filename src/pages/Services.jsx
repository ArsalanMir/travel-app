import React from "react";
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
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
          Our Services
        </motion.h2>
        <motion.p
          className="mt-2 text-lg text-gray-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We offer amazing travel experiences
        </motion.p>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-primary text-5xl">{service.icon}</div>
              <h3 className="text-2xl font-semibold mt-4 text-text">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.button
          className="mt-10 bg-primary text-black px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
          whileHover={{ scale: 1.05 }}
        >
          Explore More
        </motion.button>
      </div>
    </section>
  );
};

// Updated services data with React Icons
const services = [
  {
    icon: <FaPlane />,
    title: "Flight Booking",
    description: "Book flights at the best prices.",
  },
  {
    icon: <FaHotel />,
    title: "Hotel Reservations",
    description: "Stay at top-rated hotels worldwide.",
  },
  {
    icon: <FaCar />,
    title: "Car Rentals",
    description: "Rent a car for easy travel.",
  },
];

export default Services;
