import React, { useState } from "react";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

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

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="py-10 px-4">
      {/* Notification Message */}
      {showNotification && (
        <div className={`fixed top-5 right-5 text-white py-2 px-4 rounded shadow-lg ${submitted ? "bg-green-500" : "bg-red-500"}`}>
          <span>{result}</span>
        </div>
      )}

      {/* Heading */}
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
        Contact Me
      </h1>

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        {/* Left - Contact Details */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-8 px-4">
          <h2 className="text-2xl font-bold text-center">
            Let's discuss something <span className="text-blue-500">Cool</span> Together
          </h2>

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
            <a className="text-blue-500" href="https://www.linkedin.com/in/aditya-tiwari-31b785250/"><FaLinkedin /></a>
            <a href="https://github.com/Adityatitu01"><FaGithub /></a>
            <a className="text-cyan-500" href="https://x.com/AdityaTituu"><FaTwitter /></a>
            <a className="text-yellow-500" href="https://leetcode.com/u/adityatitu01/"><SiLeetcode /></a>
            <a className="text-pink-500" href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="w-full lg:w-1/2 flex justify-center py-8 px-4">
          <form onSubmit={onSubmit} className="max-w-lg w-full bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center ">
              Get in Touch
            </h2>
            <div className="mb-4">
              <label className="block text-lg mb-2 font-semibold " htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-2 border border-gray-300 text-black rounded"
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2 font-semibold " htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 border border-gray-300 text-black rounded"
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2 font-semibold " htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded text-black"
                id="message"
                rows="4"
                name="message"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              className="w-full btn-Blue"
              type="submit"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
