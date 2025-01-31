import { ArrowDown, ArrowLeft } from "lucide-react";
import React from "react";
import line1 from "../../../assets/icons/easy-banking/Line1.svg";
import line2 from "../../../assets/icons/easy-banking/Line2.svg";
import line3 from "../../../assets/icons/easy-banking/Line3.svg";
import line4 from "../../../assets/icons/easy-banking/Line4.svg";
import SectionTitle from "../../../component/SectionTitle";
const OurPhilosopy = () => {
  return (
    <div className="bg-white p-8">
      <SectionTitle
        subtitle={"OUR PHILOSOPHY"}
        title={"Human-centred innovation"}
      />
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Left Box */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-6 w-72 text-center">
          <h2 className="text-lg font-semibold text-blue-800">CORE TECH</h2>
          <h1 className="text-2xl font-bold mt-2">Artificial Intelligence</h1>
          <p className="text-sm text-gray-600 mt-4">
            Using AI/ML to upgrade legacy processes, reduce cost, and improve
            efficiency.
          </p>
        </div>

        {/* Arrow Right */}
        {/* <line4 className="hidden md:block text-gray-400" size={32} /> */}
        <img src={line4} alt="" />
        <ArrowDown className="block md:hidden text-gray-400" size={32} />

        {/* Center Box */}
        <div className="bg-blue-50 relative rounded-lg shadow-lg p-6 w-72 text-center">
          <h2 className="text-lg font-semibold text-orange-500">MECHANISM</h2>
          <h1 className="text-2xl font-bold mt-2">Blockchain</h1>
          <p className="text-sm text-gray-600 mt-4">
            Enhanced security by eliminating intermediaries.
          </p>
          <div className="absolute right-0 -top-32 transform -rotate-90">
            <img src={line3} alt="" />
          </div>
          <div className="absolute left-44 top-40 transform -rotate-90">
            <img src={line2} alt="" />
          </div>
        </div>

        {/* Arrow Right */}
        {/* <ArrowRight className="hidden md:block text-gray-400" size={32} /> */}

        <ArrowDown className="block md:hidden text-gray-400" size={32} />

        {/* Right Section */}
        <div className="flex flex-col gap-8">
          {/* Top Box */}
          <div className="bg-blue-50 rounded-lg shadow-lg p-6 w-72 text-center ">
            <h2 className="text-lg font-semibold text-green-500">
              INFRASTRUCTURE
            </h2>
            <h1 className="text-2xl font-bold mt-2">Cloud</h1>
            <p className="text-sm text-gray-600 mt-4">
              Scale resources easily on-demand.
            </p>
          </div>

          {/* Arrow Down */}
          {/* <ArrowDown
            className="text-gray-400 mx-auto hidden md:block"
            size={32}
          /> */}
          <img src={line1} alt="" className="h-16" />
          <ArrowLeft
            className="block md:hidden text-gray-400 mx-auto"
            size={32}
          />

          {/* Bottom Box */}
          <div className="bg-blue-50 rounded-lg shadow-lg p-6 w-72 text-center">
            <h2 className="text-lg font-semibold text-teal-500">RESOURCE</h2>
            <h1 className="text-2xl font-bold mt-2">Data</h1>
            <p className="text-sm text-gray-600 mt-4">
              Valuable, actionable insights from mass data sources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPhilosopy;
