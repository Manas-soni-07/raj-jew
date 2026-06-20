import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-#6B7280-500 text-xl mb-3">
            Luxury Jewellery Collection
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Discover <br />
            Timeless Elegance
          </h1>

          <p className="mt-6 text-#F9F9F9-300 max-w-lg">
            Explore our premium collection of gold, diamond and bridal jewellery
            crafted with perfection.
          </p>

         <motion.button

          whileHover={{ scale: 1.05 }}

          whileTap={{ scale: 0.95 }}

          className="
          mt-8
          bg-[#C9A227]
          text-white
          px-8
          py-4
          rounded-full
          "

        >

          Shop Now

        </motion.button>

        </div>
        
      </motion.div>
    </section>
  );
};

export default Hero;
