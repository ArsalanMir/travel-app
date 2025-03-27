import React from "react";
import { motion } from "framer-motion";
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.avif';

const blogPosts = [
  {
    title: "10 Must-Visit Destinations in 2025",
    description: "Discover the top travel destinations you can't miss this year.",
    image: blog1,
  },
  {
    title: "How to Travel on a Budget",
    description: "Save money while exploring the world with these budget tips.",
    image: blog2,
  },
  {
    title: "Best Beaches for a Relaxing Vacation",
    description: "Relax and unwind at these breathtaking beach destinations.",
    image: blog3,
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-gray-50 mt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-text">Travel Tips & Articles</h2>
        <p className="mt-2 text-lg text-gray-600">
          Get the best insights and tips for your journeys
        </p>

        {/* Blog Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-2xl font-semibold text-text">{post.title}</h3>
                <p className="mt-2 text-gray-600">{post.description}</p>
                <button className="mt-4 bg-primary text-black px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default BlogSection;
