import { FileUser } from "lucide-react";
import React from "react";
const Card = ({ Icon, tile, description }) => {
  return (
    <div className="flex justify-between  max-w-[1200px] mx-auto mt-10">
      <div className="w-[350px] h-[350px] bg-white p-6 rounded-lg border-[1px] border-blue-500 hover:bg-blue-200/30 space-y-4 flex flex-col justify-center  cursor-pointer">
        <div className="h-11 w-12  rounded-full bg-amber-200">
          <FileUser size="30" className="mx-auto mt-2" />
        </div>
        <h1 className="text-2xl font-bold text-slate-800">Consult</h1>
        <p>
          Our breadth of consulting expertise spans from applying the latest
          financial technological innovations to implementing risk-control
          strategies.
        </p>
      </div>

      <div className="w-[350px] h-[350px] bg-white p-6 rounded-lg border-[1px] border-blue-500 hover:bg-blue-200/30  space-y-4 justify-center  flex flex-col cursor-pointer ">
        <div className="h-11 w-12 rounded-full bg-amber-200">
          <FileUser size="30" className="mx-auto mt-2" />
        </div>
        <h1 className="text-2xl font-bold text-slate-800">Implement</h1>
        <p>
          Combining deep technological expertise and a proven track record, we
          design and implement custom solutions for financial institutions that
          drive long-term success.
        </p>
      </div>

      <div className="w-[350px] h-[350px] bg-white p-6 rounded-lg border-[1px] border-blue-500 hover:bg-blue-200/30  space-y-4 flex justify-center  flex-col cursor-pointer ">
        <div className="h-11 w-12  rounded-full bg-amber-200">
          <FileUser size="30" className="mx-auto mt-2" />
        </div>
        <h1 className="text-2xl font-bold text-slate-800">Operate</h1>
        <p>
          We provide a full suite of operational and support services that
          continue throughout the product life cycle.
        </p>
      </div>
    </div>
  );
};

export default Card;
