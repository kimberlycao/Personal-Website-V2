import Tag from "./Tag";
import portfolio from "../images/Portfolio.jpg";
import { SiDevpost, SiGithub } from "react-icons/si";

const ProjectCard = () => {
  return (
    <div className="shadow-lg container rounded-md max-w-sm flex justify-center items-center mx-auto hover:-translate-y-3 duration-200 cursor-pointer">
      <div>
        <div className="w-full object-cover overflow-hidden rounded-t-md">
          <img src={portfolio} />
        </div>
        <div className="py-4 px-4 bg-gray-100 rounded-b-md">
          <span className="block text-lg text-gray-800 font-bold font-roboto">
            Deerhunt Infrastructure
          </span>
          <span className="block text-gray-700 text-md font-source">
            Infrastructure and tooling to host AI competitions.
          </span>
          <div className="mt-2 mb-2">
            <Tag word={"React"} />
            <Tag word={"Flask"} />
            <Tag word={"Docker"} />
          </div>
          <button className="inline-flex items-center px-3.5 py-2.5 text-sm font-medium text-center text-white bg-gray-900 hover:bg-gray-700 rounded-lg font-roboto mr-2">
            <span className="inline-flex mr-2">
              <SiGithub />
            </span>
            Github
          </button>
          <button className="inline-flex items-center px-3.5 py-2.5 text-sm font-medium text-center text-white bg-gray-900 hover:bg-gray-700 rounded-lg font-roboto">
            <span className="inline-flex mr-2">
              <SiDevpost />
            </span>
            Devpost
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
