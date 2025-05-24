import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderText from "./HeaderText";
import Image from "next/image";
import githubprofile from "@/public/githubprofile.png";
const LargerHeader = () => {
  return (
    <div className="hidden md:block">
      <HeaderNav />

      <div className="flex">
        <HeaderText />
        <div className=" flex flex-col justify-end w-[40%] lg:w-[30%] lg:items-center  bg-gradient-to-b from-[#24242400] to-[#242424] ">
          <Image src={githubprofile} alt="Dax Davis" />
        </div>
      </div>
    </div>
  );
};

export default LargerHeader;
