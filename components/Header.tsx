import Image from "next/image";
import React from "react";

import githubprofile from "@/public/githubprofile.png";

import Circles from "./Circles";
import Icons from "./Icons";

const Header = () => {
  return (
    <div className="mx-[100px] relative  bg-gradient-to-b from-[#24242400] to-[#242424] ">
      <div className=" mx-auto max-w-[154px] mt-[20px] flex flex-col gap-5">
        <p className="text-center max-w-[129px] mx-auto font-bold text-2xl">
          Dax Davis
        </p>
        <Icons />
      </div>

      <Image src={githubprofile} alt="Dax Davis" />
      <Circles className="absolute right-[105px] top-[50px]  h-[200px] -z-50" />
    </div>
  );
};

export default Header;
