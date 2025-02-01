import React from "react";
import girl1 from "../../../assets/girl1.jpg";
const Power = () => {
  return (
    <div className="flex justify-between items-center max-w-[1200px] mx-auto my-16">
      {/* left child */}
      <div className="w-[561px] space-y-6">
        <h3 className="text-blue-700"> What We Do</h3>
        <p className="text-7xl text-slate-800 font-bold"> The power of data</p>
        <p className="font-bold text-slate-800">
          In today's rapidly evolving financial landscape, banks and financial
          institutions face unprecedented challenges. At AnyTech, we understand
          the critical need for continuous innovation and strategic
          decision-making in order to thrive.
        </p>
        <p>
          {" "}
          With our global perspective and cutting-edge solutions, we are here to
          help you create unparalleled customer experiences that will set you
          apart from the competition. Embark on a journey of transformation with
          AnyTech—one that will redefine what’s possible for your institution.
        </p>
      </div>
      {/* right */}
      <div>
        <img src={girl1} alt="" className="h-[400px] w-[425px]" />
      </div>
    </div>
  );
};

export default Power;
