import React, { useEffect, useState } from "react";
import Head from "../utils/head";
import { assets, projectsData } from "../assets/assets";
import { motion } from "motion/react";


const Slider = () => {
  const [currentidx, setCurrentIdx] = useState(0);
  const [numShow, setNumShow] = useState(1);

  const moveNext = () => {
    setCurrentIdx((prev) => (prev + 1) % projectsData.length);
  };
  const moveBack = () => {
    setCurrentIdx((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };
  useEffect(() => {
    const updateCardToshow = () => {
      if (window.innerWidth >= 1024) {
        setNumShow(projectsData.length);
      } else setNumShow(1);
    };
    updateCardToshow();
    window.addEventListener("resize", updateCardToshow);
    return () => window.removeEventListener("resize", updateCardToshow);
  }, []);
  return (
    <div className="overflow-hidden">
      <motion.section 
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="Projects" className="px-6 md:px-20 lg:px-32 pt-4 pb-20">
        <Head
          title={"Projects"}
          tex={"Completed"}
          info={"Crafting Spaces, Building Legacies—Explore Our Portfolio"}
        />
        <div className="flex items-center gap-2 justify-end mb-8">
          <img
            onClick={moveBack}
            className="bg-gray-300 p-2 w-7 cursor-pointer"
            src={assets.left_arrow}
            alt="left arrow"
          />
          <img
            onClick={moveNext}
            className="bg-gray-300 p-2 w-7 cursor-pointer"
            src={assets.right_arrow}
            alt="right arrow"
          />
        </div>
      
        <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentidx * 100) / numShow}%)`,
            }}
          >
            {projectsData.map((project, index) => (
              <div key={index} className="relative w-full flex-shrink-0 sm:w-1/4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto mb-12"
                />
                <div className="absolute left-0 right-0 bottom-0 flex justify-center">
                  <div className="bg-white py-2 px-4 shadow-md inline-block w-[90%]">
                    <p className="font-semibold text-xl text-p3">
                      {project.title}
                    </p>
                    <span className="text-p2 text-sm">
                      {project.price} | {project.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Slider;
