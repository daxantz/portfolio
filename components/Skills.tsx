import React from "react";
import Circles from "./Circles";

const Skills = () => {
  return (
    <div className="relative border-t-2 border-b-2 mt-[80px]  mx-[16px]">
      <div className="flex flex-col gap-6 my-[40px]">
        <div className="flex flex-col items-center">
          <p className="font-bold text-[2rem]">HTML</p>
          <p className="font-medium">4 Years experience</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-[2rem]">CSS</p>
          <p>4 Years experience</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-[2rem]">Javascript</p>
          <p>4 Years experience</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-[2rem]">React</p>
          <p>4 Years experience</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-[2rem]"> Git</p>
          <p>4 Years experience</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-[2rem]">Typescript</p>
          <p>4 Years experience</p>
        </div>
      </div>
      <Circles className="absolute left-[170px] top-[570px] transform rotate-180" />
    </div>
  );
};

export default Skills;
