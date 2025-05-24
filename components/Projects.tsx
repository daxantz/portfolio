import { Project } from "@/lib/types";
import Image from "next/image";
import React from "react";
const projects: Project[] = [
  {
    id: 1,
    image: {
      path: "/cryptoapp.png",
      width: 1600,
      height: 1600,
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
    githubLink: "https://github.com/daxantz/crypto-app",
    liveUrl: "https://crypto-app-omega-vert.vercel.app/",
  },
  {
    id: 2,
    image: {
      path: "/portfolio.png",
      width: 1600,
      height: 1600,
    },
    title: "Developer Portfolio",
    skills: ["Next.js", "Tailwind", "Vercel", "React", "Figma"],
    githubLink: "https://github.com/daxantz/portfolio",
    liveUrl: "https://portfolio-mu-sooty-55.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="mt-[80px] ">
      <h2 className="font-bold text-[2.5rem] md:text-7xlh lg:text-[88px]">
        Projects
      </h2>
      <div className="mt-[40px] flex flex-col gap-10 md:gap-5 md:flex-row">
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
    <div className="flex flex-col gap-5 md:gap-2  md:w-[55%] relative ">
      <div className="relative group w-full flex">
        <Image
          className="w-full"
          src={project.image.path}
          width={project.image.width}
          height={project.image.height}
          alt={`${project.title}'s image`}
        />
        <div className="underline  decoration-[#4EE1A0] flex items-center justify-center gap-[30px] absolute z-10 font-bold  inset-0 lg:flex-col self-center  opacity-0 group-hover:opacity-100 transition-opacity ">
          <button>
            <span className="   hover:text-[#4EE1A0] hover:cursor-pointer text-[#fffff]">
              <a href={project.liveUrl} rel="noopener noreferrer">
                {" "}
                View Project
              </a>
            </span>
          </button>
          <button>
            <span className="  hover:text-[#4EE1A0]  hover:cursor-pointer">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                View Code
              </a>
            </span>
          </button>
        </div>
        <div className="absolute inset-0 bg-[#171616] opacity-0 group-hover:opacity-50 transition-opacity flex justify-center"></div>
      </div>
      <div className="flex flex-col gap-[7px]">
        <h3 className="md:text-2xl md:font-bold">{project.title}</h3>
        <div>
          {project.skills.map((skill) => (
            <span
              className="md:text-base md:font-medium text-[#D9D9D9]"
              key={skill}
            >
              {skill}
              {", "}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-[30px]    top-[40%] lg:hidden ">
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
