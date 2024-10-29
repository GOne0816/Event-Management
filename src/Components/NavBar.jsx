import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <nav className="w-full p-4 px-80 bg-white shadow-md flex justify-between items-center max-sm:px-8">
        <Link to={'/'} className="text-3xl font-extrabold max-sm:text-lg">
          Festify
        </Link>
        <div className="hidden sm:ml-6 sm:flex sm:items-center gap-x-8 max-sm:gap-4">
          <Link to={'/createEvent'} className="btn-Text p-2 rounded-md max-sm:text-sm">
            Create Event
          </Link>
          <Link to={'/eventForYou'} className="btn-Text p-2 rounded-md max-sm:text-sm">
            Events for You
          </Link>
          <Link to={'/signup'} className="btn-Outlined ring-zinc-400 p-2 rounded-md">
            SignUp
          </Link>
        </div>
        <div className="flex items-center sm:hidden">
          <button
            className="hover:cursor-pointer"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <GiHamburgerMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/createEvent" onClick={toggleMenu}>
              <button className="btn-Text px-8 w-full flex justify-start">
                Create Event
              </button>
            </Link>
            <Link to="/eventForYou" onClick={toggleMenu}>
              <button className="btn-Text px-8 w-full flex justify-start">
                Events for You
              </button>
            </Link>
            <Link to="/signup" onClick={toggleMenu}>
              <button className="btn-Text px-8 w-full flex justify-start">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
