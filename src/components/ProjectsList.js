import AnimatedHeader from "./AnimatedHeader";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  return (
    <div className="m-4">
      <div className="flex mb-5">
        <AnimatedHeader word={"Projects"} />
      </div>
      <p className="text-white mb-5 font-roboto">
        Learn more by clicking on the Github/Devpost link!
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectsList;
