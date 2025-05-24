import Image from "next/image";
import React from "react";
import LinkedIn from "@/public/LinkedIn.svg";
import github from "@/public/github.svg";
import { FileUser } from "lucide-react";

const Icons = () => {
  return (
    <div className="flex justify-evenly gap-4 items-center border-blue-500 md:gap-8 lg:gap-10 ">
      <a
        href={"https://www.linkedin.com/in/dax-davis-a81b6429a"}
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <Image src={LinkedIn} alt="linkedin icon" />
      </a>
      <a
        href="https://github.com/daxantz"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <Image src={github} alt="Github icon" />
      </a>
      <a href="/resume.pdf" download>
        {" "}
        <FileUser />
      </a>
    </div>
  );
};

export default Icons;
