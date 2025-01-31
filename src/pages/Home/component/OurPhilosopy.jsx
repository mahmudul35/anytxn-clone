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

      <div className="flex justify-center items-center gap-8 mt-8">
        {/* card1 */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-6 w-[360px] h-[295px] flex flex-col space-y-3 justify-center">
          <div className=" bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-share-2"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
              <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold mt-2">Full-suite solutions</h1>
          <p className=" text-gray-600 mt-4">
            Experience the ease of integration across various banking and
            payment functions with our comprehensive suite of solutions.
          </p>
        </div>

        {/* card2 */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-6 w-[360px] h-[295px] flex flex-col space-y-3 justify-center">
          <div className=" bg-blue-200 rounded-full w-12 h-12 flex items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-lightbulb"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold mt-2">Simplify the complex</h1>
          <p className=" text-gray-600 mt-4">
            Simplify complex processes and optimise your financial operations by
            leveraging the power of AI, Blockchain, Cloud Computing, and Big
            Data.
          </p>
        </div>

        {/* card 3 */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-6 w-[360px]  h-[295px] flex flex-col space-y-3 justify-center">
          <div className=" bg-blue-200 rounded-full w-12 h-12 flex items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-lightbulb"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold mt-2">Cutting-edge tech</h1>
          <p className=" text-gray-600 mt-4">
            We seamlessly combine cutting-edge technologies, resulting in an
            unparalleled fintech experience for financial institutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPhilosopy;
