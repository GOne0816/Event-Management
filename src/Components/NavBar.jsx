import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className="w-full p-4 px-80 bg-white shadow-md flex justify-between items-center max-sm:px-16">
        <Link to="/" className="text-3xl font-extrabold max-sm:text-lg ">
          Festify
        </Link>
        <div className="hidden sm:ml-6 sm:flex sm:items-center gap-x-8 max-sm:gap-4">
          <Link to="/" className="btn-Text p-2 rounded-md max-sm:text-sm">
            Create Event
          </Link>
          <Link to="/login" className="btn-Text p-2 rounded-md max-sm:text-sm">
            Events for You
          </Link>
          <Link
            to="/signup"
            className="btn-Outlined ring-zinc-400 p-2 rounded-md"
          >
            SignUp
          </Link>
        </div>
        <div className="flex items-center sm:hidden">
          <button size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="sr-only">Open main menu</span>
            <GiHamburgerMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

      </nav>
      {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <button className="w-full flex justify-start">
                Create Event
              </button>
              <button className="w-full flex justify-start">
                Events
              </button>
              <button className="w-full flex justify-start">
                Sign Up
              </button>
            </div>
          </div>
        )}
    </div>
  );
};

export default NavBar;
