import React, { useState } from "react";
import { motion } from "framer-motion";

const BuildSome = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "f32e8acf-76b4-496c-b158-59e16b773375");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(
        data.success
          ? "Thanks for reaching out! I’ll get back to you shortly."
          : "Something went wrong."
      );
      event.target.reset();
    } catch (error) {
      setResult("Submission failed. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      id="project"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col items-center gap-10 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Let’s turn ideas into reality
          </h2>
          <p className="text-gray-400 text-center max-w-2xl text-base md:text-lg leading-relaxed">
            Ready to start a project? Let’s discuss how we can bring your vision
            to life.
          </p>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 gap-8 place-items-center max-w-5xl mx-auto">
          <form onSubmit={onSubmit} className="w-full">
            {/* Name */}
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Your Name"
              required
              className="mb-4 w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
            />

            {/* Email */}
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Your Email"
              required
              className="mb-4 w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
            />

            {/* Project Type */}
            <label htmlFor="service" className="block text-gray-300 mb-2">
              Project Type
            </label>
            <select
              id="service"
              name="service"
              required
              className="w-full mb-4 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
            >
              <option value="" disabled selected>
                Select Service
              </option>
              <option value="Landing Page">Landing Page</option>
              <option value="Website">Website</option>
              <option value="Fix Bugs">Fix Bugs</option>
            </select>

            {/* Budget */}
            <label htmlFor="budget" className="block text-gray-300 mb-2">
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              required
              className="w-full mb-4 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
            >
              <option value="" disabled selected>
                Select Budget
              </option>
              <option value="Under $50">Under $50</option>
              <option value="$50-$100">$50-$100</option>
              <option value="$100-$200">$100-$200</option>
              <option value="$200-$500">$200-$500</option>
              <option value="$500+">$500+</option>
            </select>

            {/* Timeline */}
            <label htmlFor="timeline" className="block text-gray-300 mb-2">
              Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              required
              className="w-full mb-4 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
            >
              <option value="" disabled selected>
                Select Timeline
              </option>
              <option value="Within 1 Week">Within 1 Week</option>
              <option value="1-2 Week">1-2 Week</option>
              <option value="2-3 Week">2-3 Week</option>
              <option value="3-5 Week">3-5 Week</option>
            </select>

            {/* Message */}
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message and send"
              required
              className="mb-4 w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 h-40 outline-none resize-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="mb-4 w-full px-6 py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>

            {/* Result Message */}
            {result && (
              <p className="text-center text-green-500 font-medium mt-2">{result}</p>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default BuildSome;
