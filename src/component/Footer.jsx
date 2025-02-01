import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/anytxn_logo.png";
import wave4 from "../assets/backgrounds/WaveLinesDesktop4.svg";
import Button from "./Button";
const Footer = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-blue-700 pl-96 text-white  z-20 p-8 space-y-6 h-[450px] flex flex-col justify-center ">
          <h1 className="text-5xl font-bold">Legacy no longer</h1>
          <p className="text-lg font-semibold">
            Talk to us to find out how we can transform your organisation for
            the future
          </p>
          <Button text="Get Started" />
          <img
            src={wave4}
            alt=""
            className="absolute object-cover z-20 h-[400px]"
          />
        </div>
      </div>
      <div className="bg-[#002045]">
        <div className=" max-w-[1200px] mx-auto flex justify-between items-center text-white p-8">
          <div>
            <img src={logo} alt="" className="h-[150px]" />
          </div>
          <div className="flex gap-6">
            <h3 className=" text-teal-300">Our Solutions</h3>{" "}
            <span className="border-r-2 border-teal-200 ml-2"></span>
            <ul className="flex space-x-4 text-teal-300">
              <li>AnyCaaS</li>
              <li>AnyBaaS</li>
              <li>AnyPaaS</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#00152D]">
        <div className=" max-w-[1200px] mx-auto flex justify-between border-t-0 text-blue-700 text-center p-8">
          <p>
            <span className="font-bold">©2023 All rights reserved.</span> Any
            Technology Pte Ltd.{" "}
          </p>
          <Link>Privacy Policy</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
