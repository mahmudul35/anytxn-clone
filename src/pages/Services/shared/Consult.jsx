import React from "react";
import manager from ".././../../assets/manager.jpg";
const Consult = () => {
  return (
    <div className="flex justify-between items-center gap-7 max-w-[1200px] h-[500px]  mx-auto mt-10">
      <div className="space-y-4 ">
        <h3 className="text-blue-700 font-semibold text-xl">
          Taking the First Step
        </h3>
        <h1 className="text-4xl font-bold text-slate-800">Consult</h1>
        <p className="text-slate-800 font-semibold">
          Taking the leap towards digital transformation with the ambition of
          delivering augmented value in financial services can be daunting.
        </p>

        <p>
          Tap on the vast experience and deep knowledge of our experts. Our
          breadth of consulting expertise spans from applying the latest
          financial technological innovations to implementing risk-control
          strategies.
        </p>
      </div>
      <div className="mx-auto">
        <img src={manager} alt="" className="h-[50%] w-[1200px]" />
      </div>
    </div>
  );
};

export default Consult;
