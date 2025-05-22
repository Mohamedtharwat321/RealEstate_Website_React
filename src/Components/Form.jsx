import React from "react";
import Head from "../utils/Head";
import { toast } from "react-toastify";
import { motion } from "motion/react";

const Form = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7f9c38b3-8748-4a9b-acc6-5a79843a9869");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        id="Contact"
        className="pt-10 pb-24 lg:px-32 w-full"
      >
        <Head
          title="Contact"
          tex="With Us"
          info="Ready to Make a Move? Let’s Build Your Future Together"
        />
        <form
          onSubmit={onSubmit}
          className="max-w-2xl mx-auto text-gray-600 pt-8 px-3"
        >
          <div className="flex flex-wrap mb-8">
            <div className="flex flex-col w-full md:w-1/2 mb-4">
              <label htmlFor="name" className="text-gray-700 font-medium">
                Your Name
              </label>
              <input
                placeholder="Your Name"
                className="border border-gray-300 rounded py-2 px-3 text-p2 mt-2"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>

            <div className="flex flex-col w-full md:w-1/2 md:pl-4">
              <label htmlFor="email" className="text-gray-700 font-medium">
                Your Email
              </label>
              <input
                placeholder="Your Email"
                className="border border-gray-300 rounded py-2 px-3 text-p2 mt-2"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="message" className="text-gray-700 font-medium">
              Message
            </label>
            <textarea
              required
              placeholder="Message"
              className="border border-gray-300 rounded py-3 px-4 text-p2 mt-2 resize-none h-48"
              id="message"
              name="text-area"
            ></textarea>
          </div>
          <div className="flex justify-center mt-8 w-full">
            <button className="bg-s2 text-white px-10 py-3 rounded font-medium hover:bg-s3">
              {result ? result : "Send Message"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Form;
