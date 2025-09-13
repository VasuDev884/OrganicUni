// src/HeroSection.js
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="max-h-screen flex flex-col bg-green-50 relative"> 
      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-16 gap-10 flex-1">
        {/* Left Message */}
        <div className="max-w-xl md:max-w-lg lg:ml-8 flex flex-col gap-5">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-2 leading-tight"
          >
            <span className="text-green-700">It's all</span> <br />
            organic here
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600"
          >
            An organic product is made from materials produced by organic agriculture
          </motion.p>
          {/* Buttons */}
          <div className="flex gap-5 mt-6 items-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
              className="bg-black text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
            >
              Explore Now
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
              href="#"
              className="flex items-center gap-2 text-gray-700 px-4 py-3 rounded-lg"
            >
              <span className="bg-green-200 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path d="M15 12l-6 4V8z" fill="currentColor" /> </svg>
              </span>
              See Video
            </motion.a>
          </div>
        </div>

        {/* Product Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25 }}
          className="relative flex items-center justify-center w-full md:w-1/2 h-[320px] md:h-[400px]"
        >
          {/* Main organic product image */}
          <img
            src="/images/organic-product.png"
            alt="Organic Product"
            className="w-full h-full md:h-[350px] md:w-[300px] object-contain drop-shadow-xl rounded-3xl"
          />
          {/* Animated leaves/accent shapes */}
          <motion.img
            src="/images/leaf1.png"
            alt=""
            className="absolute left-10 top-0 w-12 h-12"
            initial={{ rotate: -12, y: -60, opacity: 0 }}
            animate={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.5 }}
          />
          <motion.img
            src="/images/leaf2.png"
            alt=""
            className="absolute right-10 top-24 w-10 h-10"
            initial={{ rotate: 20, x: 40, opacity: 0 }}
            animate={{ rotate: 0, x: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.7 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
