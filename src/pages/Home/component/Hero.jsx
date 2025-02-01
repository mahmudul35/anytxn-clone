import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/anytxn_logo.png";
import WaveLinesDesktop3 from "../../../assets/backgrounds/WaveLinesDesktop3.svg";
import gir2 from "../../../assets/girl2.jpg";
const Hero = () => {
  return (
    <div className="relative bg-blue-700 text-white h-[850px] px-8">
      {/* Navbar */}
      <div className="absolute inset-0 z-30">
        {" "}
        {/* Adjusted z-index */}
        <nav className="flex max-w-[1200px] mx-auto justify-between items-center px-8 py-4">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="text-white h-24" />
          </div>

          {/* Navbar Items */}
          <ul className="flex space-x-6 text-white">
            {/* Dropdown */}
            <li className="relative group inline-block">
              <span className="cursor-pointer">Solutions</span>
              {/* Dropdown Menu */}
              <div className="absolute left-0 min-w-[150px] hidden group-hover:block bg-white text-black py-2 px-4 rounded shadow-lg">
                <p className="hover:bg-gray-200 px-2 py-1 cursor-pointer">
                  AnyCaaS
                </p>
                <p className="hover:bg-gray-200 px-2 py-1 cursor-pointer">
                  AnyBaaS
                </p>
                <p className="hover:bg-gray-200 px-2 py-1 cursor-pointer">
                  AnyPaaS
                </p>
              </div>
            </li>
            <li className="cursor-pointer hover:underline">
              <Link to={"services"}>Services</Link>
            </li>
            <li className="cursor-pointer hover:underline">About Us</li>

            {/* Language Selector */}
            <select className="bg-transparent text-white border border-white px-2 py-1 rounded cursor-pointer">
              <option>EN</option>
              <option>FR</option>
            </select>
          </ul>

          {/* Contact Button */}
          <div className="flex space-x-4 items-center">
            <button className="text-white cursor-pointer border px-5 py-3 rounded hover:bg-white hover:text-blue-700">
              Contact Us
            </button>
          </div>
        </nav>
      </div>

      {/* Main Hero Section */}
      <div className="flex justify-between items-center h-full max-w-[1200px] mx-auto">
        {/* Left Content */}
        <div className="max-w-md z-10">
          <h1 className="text-7xl font-bold mb-4">
            Embrace the future of finance
          </h1>
          <p className="text-lg mb-6">
            Reimagine financial services with AnyTech’s open platform,
            distributed banking solution that powers transformation.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded text-white font-bold">
            <span className="hover:scale-105">Reach Out to Us</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img src={gir2} alt="Hero" className="w-96 h-auto rounded" />
        </div>
      </div>

      {/* Background SVG */}
      <div className="absolute inset-0 z-0">
        <img src={WaveLinesDesktop3} alt="Wave Lines Desktop" />
      </div>
    </div>
  );
};

export default Hero;
