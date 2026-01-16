import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaDribbble,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
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
      setResult(data.success ? "Thanks for reaching out! I’ll get back to you shortly." : "Something went wrong.");
      event.target.reset();
    } catch (error) {
      setResult("Submission failed. Please try again.");
    }
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple">Touch</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let’s talk.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>

            {result && <p className="text-center text-sm mt-2">{result}</p>}
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <InfoItem icon={<FaMapMarkedAlt />} title="Location" value="Pune" />
            <InfoItem icon={<FaEnvelope />} title="Email" value="sakshi.kharche4@gmail.com" />
            <InfoItem icon={<FaPhone />} title="Phone" value="+91 96XXXXXX87" />

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow me</h3>
              <div className="flex space-x-4">
                <SocialLink href="https://github.com/sakshikharche4" icon={<FaGithub />} />
                <SocialLink href="https://www.linkedin.com/in/sakshik2711" icon={<FaLinkedin />} />
                <SocialLink href="https://x.com/SakshiKhar6639" icon={<FaTwitter />} />
                <SocialLink
                  href="https://sakshi-kharche-portfolio.netlify.app/"
                  icon={<FaDribbble />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const InfoItem = ({ icon, title, value }) => (
  <div className="flex items-start">
    <div className="text-purple text-2xl mr-4">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-400">{value}</p>
    </div>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center hover:bg-dark-200 hover:text-white transition duration-300"
  >
    {icon}
  </a>
);

export default Contact;
