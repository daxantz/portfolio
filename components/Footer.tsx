import React from "react";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-[#242424] mt-[80px] py-[60px] flex flex-col items-center">
      <div className="max-w-[1600px]  w-full">
        <div className=" lg:w-1/2 text-wrap">
          <h4 className="font-bold text-[40px]  lg:text-left text-center md:text-7xl md:mb-[20px]">
            Contact
          </h4>
          <p className="font-medium text-center  lg:text-left text-lg">
            I would love to hear about your project and how I could help. Please
            feel free to email me at{" "}
            <span className="font-bold italic underline decoration-[#4EE1A0]">
              daxanthonyjr@gmail.com
            </span>
            , and I&apos;ll get back to you as soon as possible
          </p>
        </div>

        <div>
          <hr className="mt-[50px] w-full" />
          <div className="mt-[39px] flex flex-col gap-5 md:flex-row md:justify-between">
            <p className="text-center   font-bold text-2xl">Dax Davis</p>
            <Icons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
