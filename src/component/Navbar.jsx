import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/anytxn_logo.png";
const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  return (
    <div
      className={` ${
        pathname === "/" ? "bg-blue-700" : "bg-transparent"
      } text-white`}
    >
      <nav
        className={`flex  max-w-[1200px] mx-auto justify-between items-center px-8 py-4 overflow-visible z-20`}
      >
        <div className="">
          <img src={logo} alt="" className="text-white h-24" />
        </div>
        <ul className="flex space-x-6 text-white">
          <li className="relative group">
            <span>Solutions</span>
            <div className="absolute hidden group-hover:block bg-white text-black py-2 px-4 rounded shadow-lg">
              <p>AnyCaaS</p>
              <p>AnyBaaS</p>
              <p>AnyPaaS</p>
            </div>
          </li>
          <li>Services</li>
          <li>About Us</li>
          <select className="bg-transparent text-white  border border-white px-2 py-1 rounded">
            <option>EN</option>
            <option>FR</option>
          </select>
        </ul>
        <div className="flex space-x-4 items-center">
          <button className="text-white cursor-pointer border px-5 py-3 rounded hover:bg-white hover:text-blue-700">
            Contact Us
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
