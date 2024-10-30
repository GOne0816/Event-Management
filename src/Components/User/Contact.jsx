import React, { useState } from "react";
import Info from "./info";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setResult("Sending...");
    setSubmitted(false);
    setShowNotification(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "7a14e447-b3d7-46d0-adc5-ba2480e01589");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setIsSending(false);

    if (data.success) {
      setResult("Your message was sent successfully!");
      setSubmitted(true);
      event.target.reset();
    } else {
      setResult("There was an error submitting the form.");
    }

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="border-b border-neutral-900 py-10 relative">
      {/* Top-right animated notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className={`fixed top-5 right-5 ${
              submitted ? "" : ""
            } text-white py-2 px-4 rounded shadow-lg`}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <span
              className={`${
                submitted ? "font-semibold text-green-500" : ""
              }`}
            >
              {isSending ? (
                <motion.span
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.1 }}
                  transition={{
                    yoyo: Infinity,
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                >
                  Sending...
                </motion.span>
              ) : (
                result
              )}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.h1
        className="text-4xl text-center pb-10"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        
      > <motion.span  initial={{ rotate: 0 }}
      whileHover={{ rotate: [360,0] }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ display: "inline-block", cursor: "pointer" }} >
        Contact </motion.span> <span className="text-neutral-500">Me</span>
      </motion.h1>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center lg:mx-28">
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center gap-8 lg:gap-12 px-6 mb-10 lg:mb-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Let's discuss something <br />
              <motion.span
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 360 }}
                whileHover={{ rotate: [0, 360] }}
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{ display: "inline-block", cursor: "pointer" }}
                className="text-indigo-500 text-6xl"
              >
                Cool
              </motion.span>{" "}
              Together
            </h2>
          </div>
          <div className="space-y-4 text-center hidden lg:block">
            <div className="text-lg">
              <IoIosMail className="inline mr-2 text-orange-500" />
              <a href="mailto:aditya895754@gmail.com">aditya895754@gmail.com</a>
            </div>
            <div className="text-lg">
              <IoIosCall className="inline mr-2 text-cyan-400" />
              <a href="tel:8957545504">8957545504</a>
            </div>
            <div className="text-lg">
              <FaLocationDot className="inline mr-2 text-blue-600" />
              <span>UP 52 Deoria (Uttar Pradesh)</span>
            </div>
          </div>
          <div className="gap-4 hidden lg:flex text-2xl">
            <a className="text-blue-500" href="https://www.linkedin.com/in/aditya-tiwari-31b785250/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Adityatitu01">
              <FaGithub />
            </a>
            <a className="text-cyan-500" href="https://x.com/AdityaTituu">
              <FaTwitter />
            </a>
            <a className="text-yellow-500" href="https://leetcode.com/u/adityatitu01/">
              <SiLeetcode />
            </a>
            <a className="text-pink-500" href="#">
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* Right Content - Contact Form */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center py-8 px-6"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <form
            onSubmit={onSubmit}
            className=" max-w-lg bg-gray-100 p-6 w-full rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6 text-indigo-600 text-center">
              Get in Touch
            </h2>
            <div className="mb-4">
              <label
                className="block text-lg mb-2 text-indigo-600 font-semibold"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full p-2 border border-gray-300 text-black rounded"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg mb-2 text-indigo-600 font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-2 border border-gray-300 text-black rounded"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg mb-2 font-semibold text-indigo-600"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded text-black"
                id="message"
                rows="4"
                name="message"
                placeholder="Your Message"
                required
              />
            </div>
            <button
              className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition"
              type="submit"
            >
              {isSending ? (
                <motion.span
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.1 }}
                  transition={{
                    yoyo: Infinity,
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                >
                  Sending...
                </motion.span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>
      </div>

      <Info />
    </div>
  );
};

export default Contact;
