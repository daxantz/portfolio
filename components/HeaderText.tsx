import React from "react";

const HeaderText = () => {
  return (
    <div className="mt-5 mx-[16px] flex flex-col gap-6">
      <h1 className="text-center font-bold text-[2.5rem] ">
        Nice to meet you! I&apos;m{" "}
        <span className="underline decoration-[#4EE1A0]">Dax Davis</span>.
      </h1>
      <p className="font-medium text-base text-[#D9D9D9] text-center wrap-break-word">
        Based in the New Jersey and New York area, I&apos;m a front-end
        developer passionate about building accessible web <br /> apps that
        users love.{" "}
      </p>
      <p className="font-bold underline decoration-[#4EE1A0] text-center text-base">
        CONTACT ME
      </p>
    </div>
  );
};

export default HeaderText;
