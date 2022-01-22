import { Link } from "react-router-dom";

const ResumeButton = () => {
  return (
    <div className="relative mt-10 group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-pink-500 blur rounded-lg opacity-75 group-hover:opacity-100 transition duration-200"></div>
      <Link to="/static/KimberlyCaoResume2021.pdf" target="_blank" download>
        <button className="px-7 py-3 rounded-lg bg-my-gray leading-none flex relative">
          <div className="text-white lg:text-lg md:text-lg sm:text-md text-md font-roboto">
            Resume
          </div>
        </button>
      </Link>
    </div>
  );
};

export default ResumeButton;
