import { assets } from "../assets/assets";
import { motion } from "motion/react";
import Head from "../utils/Head";

const About = () => {
  return (
    <div className="overflow-hidden">
      <motion.section
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        id="About"
        className="px-6 md:px-20 lg:px-32 pb-20 overflow-hidden"
      >
        <Head
          title={"About"}
          tex={"Our Brand"}
          info={"Passionate About Properties, Dedicated to Your Vision"}
        />
        <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:gap-20">
          <img
            src={assets.brand_img}
            alt="brand image"
            className="w-full sm:w-1/2 max-w-lg"
          />
          <div>
            <div className="grid grid-cols-2 items-center  gap-y-6 my-8">
              <div>
                <p className="text-4xl font-semibold text-p3">10+</p>
                <span className="text-p2">Years of Excellence</span>
              </div>
              <div>
                <p className="text-4xl font-semibold text-p3">12+</p>
                <span className="text-p2">Projects Completed</span>
              </div>
              <div>
                <p className="text-4xl font-semibold text-p3">20+</p>
                <span className="text-p2">Mn. Sq. Ft. Delivered</span>
              </div>
              <div>
                <p className="text-4xl font-semibold text-p3">25+</p>
                <span className="text-p2">Ongoing Projects</span>
              </div>
            </div>
            <p className="text-gray-600 max-w-md mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="bg-s2 text-white font-medium rounded px-7 py-2 hover:bg-s3">
              Learn more
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
