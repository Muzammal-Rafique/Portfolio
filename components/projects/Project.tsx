import React from "react";
import PortfolioCard from "./Card";
import { projectData } from "@/constants/projects";

const Project: React.FC = () => {
  return (
    <>
      <h1 className="text-center pt-16">
        <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600  font-semibold text-6xl hover:border-b-2 border-[#be123c] transition duration-500"
          id="projects"
        >
          Projects
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-20 gap-10 p-10">
        {projectData.map((project) => (
          <PortfolioCard
            key={project.title}
            title={project.title}
            imageSrc={project.imageSrc}
            link1={project.link1}
            link2={project.link2}
            tags={project.tags}
            description={project.description}
          />
        ))}
      </div>
    </>
  );
};

export default Project;
