import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth } from "../../store/auth-context"; // Importing useAuth

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token, signoutUser } = useAuth(); // Access token and signoutUser from AuthContext

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <nav className="w-full p-4 bg-white shadow-md flex justify-between items-center px-6 lg:px-16">
        {/* Logo */}
        <Link to="/" className="text-2xl lg:text-3xl font-extrabold">
          Festify
        </Link>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex md:items-center gap-x-8">
          <Link to="/createEvent" className="btn-Text p-2 rounded-md text-base lg:text-lg">
            Create Event
          </Link>
          <Link to="/eventForYou" className="btn-Text p-2 rounded-md text-base lg:text-lg">
            Events for You
          </Link>
          {token ? (
            // Sign Out button if logged in
            <button
              onClick={signoutUser}
              className="btn-Outlined text-slate-600 font-normal ring-zinc-400 p-2 rounded-md text-base lg:text-lg"
            >
              Sign Out
            </button>
          ) : (
            // Sign Up button if not logged in
            <Link to="/signup" className="btn-Outlined ring-zinc-400 p-2 rounded-md text-base lg:text-lg">
              Sign Up
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="hover:cursor-pointer focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <GiHamburgerMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg p-4">
          <div className="space-y-4">
            <Link to="/createEvent" onClick={toggleMenu}>
              <button className="btn-Text w-full text-left p-2 rounded-md">
                Create Event
              </button>
            </Link>
            <Link to="/eventForYou" onClick={toggleMenu}>
              <button className="btn-Text w-full text-left p-2 rounded-md">
                Events for You
              </button>
            </Link>
            {token ? (
              // Sign Out button for mobile view
              <button
                onClick={() => {
                  toggleMenu();
                  signoutUser();
                }}
                className="btn-Outlined w-full text-left ring-zinc-400 p-2 rounded-md"
              >
                Sign Out
              </button>
            ) : (
              // Sign Up button for mobile view
              <Link to="/signup" onClick={toggleMenu}>
                <button className="btn-Outlined w-full text-left ring-zinc-400 p-2 rounded-md">
                  Sign Up
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
