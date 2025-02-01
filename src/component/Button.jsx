import { ChevronRight } from "lucide-react";
import React from "react";
const Button = ({ text }) => {
  return (
    <div>
      <button className="w-[195px] h-[54px] bg-[#FE8B53]  text-white font-bold rounded-[10x] cursor-pointer ">
        <span
          className="hover:translate-x-1.5 flex items-center
       justify-center"
        >
          {" "}
          {text} <ChevronRight size={18} className="mt-1" />
        </span>{" "}
      </button>
    </div>
  );
};

export default Button;
