import { Project } from "@/lib/types";
import Image from "next/image";
import React from "react";
const projects: Project[] = [
  {
    id: 1,
    image: {
      path: "/cryptoapp.png",
      width: 350,
      height: 250,
    },
    title: "Crypto App",
    skills: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "Redux",
      "ShadCn",
      "Coin Gecko API",
    ],
  },
];

const Projects = () => {
  return (
    <div className="mt-[80px] mx-[16px]">
      <h2 className="font-bold text-[2.5rem]">Projects</h2>
      <div className="mt-[40px] flex flex-col gap-10">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col gap-5">
      <Image
        src={project.image.path}
        width={project.image.width}
        height={project.image.height}
        alt={`${project.title}'s image`}
      />
      <div className="flex flex-col gap-[7px]">
        <h3 className="">{project.title}</h3>
        <div>
          {project.skills.map((skill) => (
            <span key={skill}>{skill}, </span>
          ))}
        </div>
      </div>
      <div className="flex gap-[30px]">
        <button>
          <span className="underline decoration-[#4EE1A0]">View Project</span>
        </button>
        <button>
          <span className="underline decoration-[#4EE1A0]">View Code</span>
        </button>
      </div>
    </div>
  );
};
