import React from "react";
import Icons from "./Icons";

const HeaderNav = () => {
  return (
    <div className=" z-10 w-[10.3rem] md:w-full  mx-auto  mt-[20px] flex flex-col justify-evenly md:gap-5 md:flex-row md:justify-between md:mb-5 ">
      <p className="text-center   font-bold text-2xl">Dax Davis</p>
      <Icons />
    </div>
  );
};

export default HeaderNav;
