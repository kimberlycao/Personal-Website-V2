import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-20 bg-my-gray shadow-xl fixed z-50 left-0 right-0"
      role="navigation"
    >
      <Link to="/" className="pl-8 text-white font-roboto">
        <div>Kimberly Cao |</div>
        <div>Software Engineer</div>
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6 stroke-pink-400"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 shadow-lg md:block hidden">
        <Link
          className="p-4 text-white hover:text-pink-400 font-roboto"
          to="/about"
        >
          About
        </Link>
        <Link
          className="p-4 text-white hover:text-pink-400 font-roboto"
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className="p-4 text-white hover:text-pink-400 font-roboto"
          to="/mythoughts"
        >
          My Thoughts
        </Link>
        <Link
          className="p-4 text-white hover:text-pink-400 font-roboto"
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className="p-4"
          to="/static/KimberlyCaoResume2021.pdf"
          target="_blank"
          download
        >
          <button className="bg-gray-800 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 rounded-lg px-4 py-2 text-center">
            <div className="text-white font-roboto">Resume</div>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
