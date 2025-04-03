import React from "react";
import hero from "../assets/hero.avif";

const Hero = () => {
  return (
    <section 
      className="relative flex items-center justify-center text-center text-white min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Optional Overlay (Remove if not needed) */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Hero Content (No Blur, No Border) */}
      <div className="relative z-10 max-w-3xl px-6 py-10">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
          Discover Your Next Adventure
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Explore the world with ease and comfort.
        </p>
        <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition transform hover:scale-110">
          Start Exploring
        </button>
      </div>
    </section>
  );
};

export default Hero;
