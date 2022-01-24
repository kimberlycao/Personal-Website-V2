import Tag from "./Tag";
import { SiDevpost, SiGithub } from "react-icons/si";

const ProjectCard = (props) => {
  return (
    <div class="col-span-1 rounded-md flex flex-col bg-white hover:-translate-y-3 duration-200 cursor-pointer">
      <div className="w-full overflow-hidden rounded-t-md">
        <img className="object-cover" src={props.imageURL} alt={props.index} />
      </div>
      <h2 class="mb-2 block text-lg text-gray-800 font-bold font-roboto px-2 pt-2">
        {props.name}
      </h2>
      <p class="text-md px-2">{props.description}</p>
      <div class="flex flex-wrap p-2 mt-auto text-xs">
        {props.techStack.split(",").map((tech, index) => (
          <span key={index}>
            <Tag word={tech} />
          </span>
        ))}
      </div>
      <div>
        {props.githubLink ? (
          <a href={props.githubLink} target="_blank" rel="noreferrer">
            <button className="inline-flex items-center px-3.5 py-2.5 text-sm font-medium text-center text-white bg-gray-900 hover:bg-gray-700 rounded-full font-roboto m-2">
              <span className="inline-flex mr-2">
                <SiGithub />
              </span>
              Github
            </button>
          </a>
        ) : null}
        {props.devpostLink ? (
          <a href={props.devpostLink} target="_blank" rel="noreferrer">
            <button className="inline-flex items-center px-3.5 py-2.5 text-sm font-medium text-center text-white bg-gray-900 hover:bg-gray-700 rounded-full font-roboto m-2">
              <span className="inline-flex mr-2">
                <SiDevpost />
              </span>
              Devpost
            </button>
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
