import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  return (
    <nav
      className="flex justify-between items-center h-16 bg-slate-900 relative shadow-lg"
      role="navigation"
    >
      <Link to="/" className="pl-8 text-pink-400 font-roboto">
        KC
      </Link>
      <div className="px-4 cursor-pointer md:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
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
          className="p-4 text-white hover:text-pink-400 font-roboto"
          to="/resume"
        >
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
