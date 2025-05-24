import React from "react";

const HeaderText = () => {
  return (
    <div className="mt-5  md:m-0 md:w-[60%] lg:w-[70%] flex flex-col gap-6 ">
      <h1 className="text-center md:text-left font-bold text-[2.5rem] md:text-[4.5rem] text-balance">
        Nice to meet you! I&apos;m{" "}
        <span className="underline decoration-[#4EE1A0]">Dax Davis</span>.
      </h1>
      <p className="font-medium text-base md:text-lg text-[#D9D9D9] text-center md:text-left wrap-break-word">
        Based in the New Jersey and New York area, I&apos;m a front-end
        developer passionate about building accessible web <br /> apps that
        users love.{" "}
      </p>
      <p className="font-bold underline decoration-[#4EE1A0] text-center md:text-left text-base hover:text-[#4EE1A0] hover:cursor-pointer">
        CONTACT ME
      </p>
    </div>
  );
};

export default HeaderText;
