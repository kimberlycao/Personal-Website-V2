import { Link } from "react-router-dom";

const Custom404 = () => {
  return (
    <div className="min-h-screen bg-my-gray flex justify-center items-center p-14">
      <div className="text-pink-400 md:text-9xl text-6xl font-extrabold border-r-2 border-pink-400 pr-4">
        404
      </div>
      <div className="flex items-center md:text-lg text-md text-white font-roboto font-semibold">
        <div className="ml-4">Wrong way! Take me</div>
        <Link to="/">
          <button className="bg-pink-400 hover:bg-pink-300 px-4 py-2 m-4 rounded-md">
            home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
