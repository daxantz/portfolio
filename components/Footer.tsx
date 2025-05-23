import React from "react";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-[#242424] mt-[80px] py-[60px]">
      <div className="px-4">
        <h4 className="font-bold text-[40px] text-center">Contact</h4>
        <p className="font-medium text-center">
          I would love to hear about your project and how I could help. Please
          feel free to email me at{" "}
          <span className="font-bold italic underline decoration-[#4EE1A0]">
            daxanthonyjr@gmail.com
          </span>
          , and I&apos;ll get back to you as soon as possible
        </p>
        <hr className="mt-[50px]" />
        <div className="mt-[39px] flex flex-col gap-5">
          <p className="text-center max-w-[129px] mx-auto font-bold text-2xl">
            Dax Davis
          </p>
          <Icons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
