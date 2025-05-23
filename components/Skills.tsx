import React from "react";
import Circles from "./Circles";

const Skills = () => {
  return (
    <div className="relative border-t-2 border-b-2 mt-[80px]     ">
      <div className="flex flex-col gap-6 my-[40px] md:grid-cols-2 md:grid md:gap-10 lg:grid-cols-3">
        <div className="flex flex-col items-center md:items-start md:gap-3.5">
          <p className="font-bold text-[2rem] md:text-5xl">HTML</p>
          <p className="font-medium">4 Years experience</p>
        </div>
        <div className="flex flex-col items-center md:items-start md:gap-3.5">
          <p className="font-bold text-[2rem] md:text-5xl">CSS</p>
          <p>4 Years experience</p>
        </div>
        <div className="flex flex-col items-center md:items-start md:gap-3.5">
          <p className="font-bold text-[2rem] md:text-5xl">Javascript</p>
          <p>4 Years experience</p>
        </div>
        <div className="flex flex-col items-center md:items-start md:gap-3.5">
          <p className="font-bold text-[2rem] md:text-5xl">React</p>
          <p>4 Years experience</p>
        </div>
        <div className="flex flex-col items-center md:items-start md:gap-3.5">
          <p className="font-bold text-[2rem] md:text-5xl"> Git</p>
          <p>4 Years experience</p>
        </div>
        <div className="flex flex-col items-center md:items-start md:gap-3.5">
          <p className="font-bold text-[2rem] md:text-5xl">Typescript</p>
          <p>4 Years experience</p>
        </div>
      </div>
      <Circles className="absolute left-[170px] top-[570px] transform rotate-180" />
    </div>
  );
};

export default Skills;
