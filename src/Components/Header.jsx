import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/src/assets/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto  text-s1"
      >
        <h2 className="font-bold text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl my-8">
          Explore homes that fit your dreams
        </h2>
        <div className="flex items-center justify-center gap-4 font-semibold">
          <button className="bg-transparent border-[1px] border-white py-3 px-6 rounded-md md:px-8 hover:text-p1 hover:bg-s1">
            Projects
          </button>
          <button className="bg-s3 py-3 px-6 rounded-md md:px-8 hover:bg-s3/90">
            Contact Us
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
