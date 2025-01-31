import React from "react";
import girl1 from "../../../assets/girl1.jpg";
const PoweringFuture = () => {
  return (
    <div className="flex justify-between items-center max-w-[1200px] mx-auto my-16">
      {/* left child */}
      <div className="w-[561px] space-y-6">
        <h3 className="text-blue-700"> POWERING THE FUTURE OF FINANCE</h3>
        <p className="text-7xl text-slate-800 font-bold">
          {" "}
          Uncovering new ways to delight customers
        </p>
        <p className="font-bold text-slate-800">
          AnyTech is revolutionising financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p>
          {" "}
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </div>
      {/* right */}
      <div>
        <img src={girl1} alt="" className="h-[400px] w-[425px]" />
      </div>
    </div>
  );
};

export default PoweringFuture;
