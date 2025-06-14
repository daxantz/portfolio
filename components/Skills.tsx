import React from "react";

const Skills = () => {
  return (
    <div className="relative border-t-2 border-b-2 mt-[80px]     ">
      <h2 className="text-7xl underline decoration-[#4EE1A0] mt-3">Skills</h2>
      <div className="flex flex-col gap-6 my-[40px] md:grid-cols-2 md:grid md:gap-10 lg:grid-cols-3">
        <div className="flex flex-col items-center md:items-start md:gap-3.5">
          <p className="font-bold text-[2rem] md:text-5xl">HTML</p>
        </div>
        <div className="flex flex-col items-center md:items-start md:gap-3.5">
          <p className="font-bold text-[2rem] md:text-5xl">CSS</p>
        </div>
        <div className="flex flex-col items-center md:items-start md:gap-3.5">
          <p className="font-bold text-[2rem] md:text-5xl">Javascript</p>
        </div>
        <div className="flex flex-col items-center md:items-start md:gap-3.5">
          <p className="font-bold text-[2rem] md:text-5xl">React</p>
        </div>
        <div className="flex flex-col items-center md:items-start md:gap-3.5">
          <p className="font-bold text-[2rem] md:text-5xl"> Git</p>
        </div>
        <div className="flex flex-col items-center md:items-start md:gap-3.5">
          <p className="font-bold text-[2rem] md:text-5xl">Typescript</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
