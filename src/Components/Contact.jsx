import React from "react";
import { motion } from "framer-motion";
import { FaDribbble, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkedAlt, FaPhone, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auo px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In
          <span className="text-purple">Touch</span>
        </h2>
        <p
          className="text-gray-400 text-center max-w-2xl mx-auto mb-16 
"
        >
          Have a Project in mind or want to collaborate? Let's Talk
        </p>
        <div
          className="grid grid-cols-1 lg:grid-cols-2
gap-12 max-w-5xl mx-auto"
        >
          {/* contact form */}
          <div>
            <form className="space-y-6" action="">
              <div>
                <label htmlFor="name" className="block text-gray-300 b-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 b-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>
              <div>
                <label htmlFor="Message" className="block text-gray-300 b-2">
                  Your Message
                </label>
                <textarea
                  type="text"
                  className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple rounded-lg
font-medium hover:bg-purple-700 transition
duration-300 cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
          {/* contact information */}

          <div className="space-y-8">
            <div className="flex items-start">
              <div className=" text-purple text-2xl mr-4">
                <FaMapMarkedAlt />
              </div>
              <div>
                <h3 className="TEXT-LG font-semibold mb-2">
                  Loation <p className="text-gray-400">Pune</p>
                </h3>
              </div>
            </div>
            <div className="flex items-start">
              <div className=" text-purple text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="TEXT-LG font-semibold mb-2">
                  Email <p className="text-gray-400">sakshi.kharche@gmail.com</p>
                </h3>
              </div>
            </div>
            <div className="flex items-start">
              <div className=" text-purple text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="TEXT-LG font-semibold mb-2">
                  Phone <p className="text-gray-400">123456789</p>
                </h3>
              </div>
            </div>
          </div>
          <div className="pt-4">
<h3 className="text-lg font-semibold mb-4">Follow me</h3>
<div className="flex space-x-4">
    <a href="#" className="w-12 h-12 justify-center text-shadow-dark-20000 
    rounded-full bg-dark-300 flex items-center hover:bg-dark-200 hover:text-white
     transition duration-300">
        <FaGithub/>
    </a>
      <a href="#" className="w-12 h-12 justify-center text-blue-400 
    rounded-full bg-dark-300 flex items-center hover:bg-blue hover:text-white
     transition duration-300">
        <FaLinkedin/>
    </a>
      <a href="#" className="w-12 h-12 justify-center text-blue-400 
    rounded-full bg-dark-300 flex items-center hover:bg-blue hover:text-white
     transition duration-300">
        <FaTwitter/>
    </a>
      <a href="#" className="w-12 h-12 justify-center text-pink 
    rounded-full bg-dark-300 flex items-center hover:bg-pink hover:text-white
     transition duration-300">
        <FaDribbble/>
    </a>

</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
