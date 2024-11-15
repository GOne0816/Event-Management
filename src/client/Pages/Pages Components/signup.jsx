import React from "react";
import { useMemo, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

const signup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="max-w-md w-11/12 h-[580px] bg-gray-100 rounded-xl p-12">
        <form>
          <h1 className="text-3xl font-extrabold tracking-tighter">
            Create an account
          </h1>
          <p className="tracking-tight text-gray-500 mt-2">
            Enter your details below to get started.
          </p>
          <div className="flex flex-col my-4 gap-2">
            {/* Name */}
            <div className="flex flex-col">
              <label className="font-bold m-1" htmlFor="email">
                Name
              </label>
              <input
                className="p-2 px-4 rounded-lg"
                type="name"
                name="name"
                id="name"
                placeholder="Jag Jeevan Ricky"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="font-bold m-1" htmlFor="email">
                Email
              </label>
              <input
                className="p-2 px-4 rounded-lg"
                type="email"
                name="email"
                id="email"
                placeholder="j@example.com"
                // onChange={handleEmailChange}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center m-1">
                <label className="font-bold" htmlFor="email">
                  Password
                </label>
              </div>
              <input
                className="p-2 px-4 rounded-lg"
                type="password"
                name="password"
                id="password"
                // type={isVisible ? "text" : "password"}
                // onChange={handlePasswordChange}
              />
              {/* <button
                className=""
                onClick={toggleVisibility}
                aria-label={isVisible ? "Hide password" : "Show password"}
                aria-pressed={isVisible}
                aria-controls="password"
              >
                {isVisible ? (
                  <FaEyeSlash size={16} strokeWidth={2} aria-hidden="true" />
                ) : (
                  <FaEye size={16} strokeWidth={2} aria-hidden="true" />
                )}
              </button> */}
            </div>

            <div className="flex justify-center items-center mt-4">
              <button className="btn-AltDark capitalize w-full">
                Register
              </button>
            </div>
          </div>
        </form>
        <div>
          <div className="flex items-center justify-center gap-2">
            <div className=" bg-gray-300 w-full h-0.5" />
            <div>
              <h1 className="text-gray-300">OR</h1>
            </div>
            <div className=" bg-gray-300 w-full h-0.5" />
          </div>
          <div className="flex justify-center items-center gap-12 mt-4">
            <button className="btn-Text bg-white ring-1 ring-gray-300 capitalize">
              Google
            </button>
            <button className="btn-Text bg-white ring-1 ring-gray-300 capitalize">
              Git Hub
            </button>
          </div>
        </div>
        <p className="text-center text-sm mt-6">
          Have an account?{" "}
          <span className="underline">
            <a href="login">Log In here</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default signup;
