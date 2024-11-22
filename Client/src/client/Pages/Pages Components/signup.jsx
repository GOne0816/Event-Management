import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate(); // Initialize navigate for redirection
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
//<-----------------------------------------------connecting to backend server and store data in database-------------------------------------------
    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        toast.success("Account created successfully! Redirecting to login...", {
          position: "top-right",
          autoClose: 2000,
        });
        setTimeout(() => {
          setUser({
            name: "",
            email: "",
            password: "",
          });
          navigate("/login"); // Redirect to the login page
        }, 1500); // Delay to let the toast display before redirecting
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Signup failed. Please try again.", {
          position: "top-right",
          autoClose: 1500,
        });
      }
    } catch (error) {
      console.error("Registration error", error);
      toast.error("Something went wrong. Please try again later.", {
        position: "top-right",
        autoClose: 1500,
      });
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-50">
      <ToastContainer /> {/* Toast notifications container */}
      <div className="max-w-md w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-4/12 bg-gray-100 rounded-xl p-8 shadow-lg">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-center">
            Create an account
          </h1>
          <p className="text-gray-500 text-center mt-2">
            Enter your details below to get started.
          </p>

          <div className="flex flex-col mt-6 gap-4">
            {/* Name Field */}
            <div className="flex flex-col">
              <label className="font-bold mb-1" htmlFor="name">
                Name
              </label>
              <input
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label className="font-bold mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="j@example.com"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col">
              <label className="font-bold mb-1" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none w-full"
                  type={isVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={toggleVisibility}
                  aria-label={isVisible ? "Hide password" : "Show password"}
                >
                  {isVisible ? (
                    <FaEyeSlash size={18} aria-hidden="true" />
                  ) : (
                    <FaEye size={18} aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="bg-gray-800 text-white p-3 rounded-lg w-full font-semibold hover:bg-gray-900 transition duration-300"
            >
              Register
            </button>
          </div>
        </form>

        {/* OR Divider */}
        <div className="flex items-center justify-center my-6">
          <div className="h-px w-full bg-gray-300"></div>
          <span className="px-3 text-gray-400">OR</span>
          <div className="h-px w-full bg-gray-300"></div>
        </div>

        {/* Log In Link */}
        <p className="text-center text-sm mt-6">
          Have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Log In here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
