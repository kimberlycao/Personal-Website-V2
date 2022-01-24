import React, { useState, useEffect } from "react";
import AnimatedHeader from "./AnimatedHeader";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  const spaceId = process.env.REACT_APP_SPACE_ID;
  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
  const query = `{
    projectsCollection {
      items {
        name
        description
        techStack
        githubLink
        devpostLink
        projectImageCollection{
          items {
            url
          }
        }
        }
      }
    }`;

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            query,
          }),
        }
      )
      .then((response) => response.json())
      .then((json) => setProjects(json.data.projectsCollection.items));
  }, [query, accessToken, spaceId]);

  if (!projects) return null;

  return (
    <div className="p-4">
      <div className="flex mb-5">
        <AnimatedHeader word={"Projects"} />
      </div>
      <p className="font-source text-white lg:text-lg md:text-lg sm:text-md text-sm mb-5">
        Learn more by clicking on the Github/Devpost link!
      </p>
      <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            githubLink={project.githubLink}
            devpostLink={project.devpostLink}
            imageURL={project.projectImageCollection.items[0].url}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
