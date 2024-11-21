import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-400">
          <Link to="/">GameZone</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400 transition duration-300">
            Home
          </Link>
          <Link
            to="/heroes"
            className="hover:text-blue-400 transition duration-300">
            Heroes
          </Link>
          <Link
            to="/prediction"
            className="hover:text-blue-400 transition duration-300">
            Prediction
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-400 transition duration-300">
            About
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
