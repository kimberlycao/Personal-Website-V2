import Tag from "./Tag";
import { SiDevpost, SiGithub } from "react-icons/si";

const ProjectCard = (props) => {
  return (
    <div className="rounded-md max-w-sm flex justify-center min-h-full items-center hover:-translate-y-3 duration-200 cursor-pointer">
      <div>
        <div className="w-full object-cover overflow-hidden rounded-t-md">
          <img src={props.imageURL} alt={props.index} />
        </div>
        <div className="py-4 px-4 bg-gray-100 rounded-b-md">
          <span className="block text-lg text-gray-800 font-bold font-roboto">
            {props.name}
          </span>
          <span className="block text-gray-700 text-md font-source">
            {props.description}
          </span>
          <div className="mt-2 mb-2">
            {props.techStack.split(",").map((tech, index) => (
              <span key={index}>
                <Tag word={tech} />
              </span>
            ))}
          </div>
          {props.githubLink ? (
            <a href={props.githubLink} target="_blank" rel="noreferrer">
              <button className="inline-flex items-center px-3.5 py-2.5 text-sm font-medium text-center text-white bg-gray-900 hover:bg-gray-700 rounded-full font-roboto mr-2">
                <span className="inline-flex mr-2">
                  <SiGithub />
                </span>
                Github
              </button>
            </a>
          ) : null}

          {props.devpostLink ? (
            <a href={props.devpostLink} target="_blank" rel="noreferrer">
              <button className="inline-flex items-center px-3.5 py-2.5 text-sm font-medium text-center text-white bg-gray-900 hover:bg-gray-700 rounded-full font-roboto">
                <span className="inline-flex mr-2">
                  <SiDevpost />
                </span>
                Devpost
              </button>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
