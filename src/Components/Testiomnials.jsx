import Head from "../utils/Head";
import { testimonialsData } from "../assets/assets";
import { motion } from "motion/react";

const Testiomnials = () => {
  return (
    <div className="overflow-hidden">
      <motion.section
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        id="Testimonials"
        className="container mx-auto py-10 lg:px-32 w-full "
      >
        <Head
          title="Customer"
          tex="Testimonials"
          info="Real Stories from Those Who Found Home with Us"
        />

        <div className="flex flex-wrap justify-center gap-8">
          {testimonialsData.map((test, idx) => (
            <div
              key={idx}
              className="group bg-white shadow-md max-w-[340px] text-center px-8 py-12 cursor-pointer hover:bg-s3"
            >
              <img
                src={test.image}
                alt={test.alt}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h4 className="text-gray-700 font-semibold text-xl group-hover:text-white">
                {test.name}
              </h4>
              <p className="text-p2 text-sm group-hover:text-slate-100">
                {test.title}
              </p>
              <div className="flex justify-center gap-1">
                {Array.from({ length: test.rating }, (item, idx) => (
                  <span key={idx} className="text-xl text-orange-500">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-p3 group-hover:text-white">
                From the very first meeting, they understood my vision and
                helped me find the perfect property. Their attention to detail
                and commitment to client satisfaction is unmatched.
              </p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Testiomnials;
