import { Link } from "react-router-dom";

const NavDropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-5 text-center items-center bg-my-gray"
          : "hidden"
      }
      onClick={toggle}
    >
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
  );
};

export default NavDropdown;
