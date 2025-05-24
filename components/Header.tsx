import Image from "next/image";
import React from "react";

import githubprofile from "@/public/githubprofile.png";

import Icons from "./Icons";

const Header = () => {
  return (
    <div className=" relative  bg-gradient-to-b from-[#24242400] to-[#242424] ">
      <div className=" mx-auto  mt-[20px] flex flex-col gap-5">
        <p className="text-center max-w-[129px] mx-auto font-bold text-2xl">
          Dax Davis
        </p>
        <Icons />
      </div>

      <Image src={githubprofile} alt="Dax Davis" />
    </div>
  );
};

export default Header;
