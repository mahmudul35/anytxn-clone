import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/anytxn_logo.png";
import WaveLinesDesktop3 from "../assets/backgrounds/WaveLinesDesktop3.svg";
const Navbar = ({ subtitle, title, para }) => {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  return (
    // <div
    //   className={` ${
    //     pathname === "/" ? "bg-blue-700" : "bg-transparent"
    //   } text-white`}
    // >
    //   <nav
    //     className={`flex  max-w-[1200px] mx-auto justify-between items-center px-8 py-4 overflow-visible z-20`}
    //   >
    //     <div className="">
    //       <img src={logo} alt="" className="text-white h-24" />
    //     </div>
    //     <ul className="flex space-x-6 text-white">
    //       <li className="relative group">
    //         <span>Solutions</span>
    //         <div className="absolute hidden group-hover:block bg-white text-black py-2 px-4 rounded shadow-lg">
    //           <p>AnyCaaS</p>
    //           <p>AnyBaaS</p>
    //           <p>AnyPaaS</p>
    //         </div>
    //       </li>
    //       <li>Services</li>
    //       <li>About Us</li>
    //       <select className="bg-transparent text-white  border border-white px-2 py-1 rounded">
    //         <option>EN</option>
    //         <option>FR</option>
    //       </select>
    //     </ul>
    //     <div className="flex space-x-4 items-center">
    //       <button className="text-white cursor-pointer border px-5 py-3 rounded hover:bg-white hover:text-blue-700">
    //         Contact Us
    //       </button>
    //     </div>
    //   </nav>
    // </div>

    <div className="relative bg-blue-700 text-white h-[650px] px-8">
      {/* Navbar */}
      <div className="absolute inset-0 z-30">
        {" "}
        {/* Adjusted z-index */}
        <nav className="flex max-w-[1200px] mx-auto justify-between items-center px-8 py-4">
          {/* Logo */}
          <div>
            <Link to={"/"}>
              {" "}
              <img src={logo} alt="Logo" className="text-white h-24" />
            </Link>
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
              <Link>Services</Link>
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
        <div className="max-w-3xl z-10">
          <h3 className="text-[#00DFE0] font-bold">{subtitle}</h3>
          <h1 className="text-7xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-6 font-semibold">{para}</p>
          {/* <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded text-white font-bold">
            <span className="hover:scale-105">Reach Out to Us</span>
          </button> */}
        </div>

        {/* Right Image */}
        {/* <div className="relative">
        <img src={gir2} alt="Hero" className="w-96 h-auto rounded" />
      </div> */}
      </div>

      {/* Background SVG */}
      <div className="absolute inset-0 z-0">
        <img src={WaveLinesDesktop3} alt="Wave Lines Desktop" />
      </div>
    </div>
  );
};

export default Navbar;
