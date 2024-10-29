import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="w-full p-4 px-80 bg-white flex justify-between items-center max-sm:px-16">
        <Link to="/" className="text-3xl font-extrabold max-sm:text-lg ">Festify</Link>
        <div className="flex gap-8 max-sm:gap-4">
          <Link to="/" className="text-lg font-bold text-gray-600 hover:text-gray-900 max-sm:text-sm">Create Event</Link>
          <Link to="/login" className="text-lg font-bold text-gray-600 hover:text-gray-900 max-sm:text-sm">Events for You</Link>
          <Link to="/signup" className="text-lg font-bold text-gray-600 hover:text-gray-900 max-sm:text-sm">SignUp</Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
