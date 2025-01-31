import React from "react";
import WaveLinesDesktop3 from "../../../assets/backgrounds/WaveLinesDesktop3.svg";
import girl from "../../../assets/girl1.jpg";
import Navbar from "../../../component/Navbar";
const Hero = () => {
  return (
    <div className="relative bg-blue-700 text-white   h-[850px]  px-8">
      <div className="relative z-20">
        <Navbar />
      </div>
      {/* Left Content */}
      <div className="flex justify-between items-center h-full max-w-[1200px] mx-auto">
        <div className="max-w-md z-10 ">
          <h1 className="text-7xl font-bold mb-4">
            Embrace the future of finance
          </h1>
          <p className="text-lg mb-6 z-10">
            Reimagine financial services with AnyTech’s open platform,
            distributed banking solution that powers transformation.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded text-white font-bold">
            <span className="hover:scale-105">Reach Out to Us</span>
          </button>
        </div>
        {/* Right Image */}
        <div>
          <img src={girl} alt="Hero" className="w-96 h-auto rounded" />
          <img
            src={WaveLinesDesktop3}
            alt="Wave Lines Desktop"
            className="absolute inset-0 z-20"
          />
        </div>
      </div>
      {/* Background SVG */}
      <div className="absolute inset-0 z-10">
        <img src={WaveLinesDesktop3} alt="Wave Lines Desktop" />
      </div>
    </div>
  );
};

export default Hero;
