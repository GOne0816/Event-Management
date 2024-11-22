import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const [user,setUser] = useState({
    email: "",
    password: "",
  })
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(user);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-50">
      <div className="max-w-md w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-4/12 bg-gray-100 rounded-xl p-8 shadow-lg">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-center">
            Have an Account
          </h1>
          <p className="text-gray-500 text-center mt-2">
            Enter your details below to get started.
          </p>

          <div className="flex flex-col mt-6 gap-4">
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
                onChange={(e) => setUser({ ...user, email: e.target.value
                  })}
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
                  onChange={(e)=>setUser({...user,password:e.target.value})}

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

            {/* Login Button */}
            <button
              type="submit"
              className="bg-gray-800 text-white p-3 rounded-lg w-full font-semibold hover:bg-gray-900 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>

        {/* OR Divider */}
        <div className="flex items-center justify-center my-6">
          <div className="h-px w-full bg-gray-300"></div>
          <span className="px-3 text-gray-400">OR</span>
          <div className="h-px w-full bg-gray-300"></div>
        </div>

        {/* Sign-Up Link */}
        <p className="text-center text-sm mt-6">
          Create new Account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};



export default Login;

