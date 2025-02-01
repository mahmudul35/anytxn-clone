import { ChevronRight } from "lucide-react";
import React from "react";
const Button = ({ text }) => {
  return (
    <div>
      <button
        className="w-[195px] h-[54px] bg-[#FE8B53] flex items-center
       justify-center text-white font-bold rounded-[10x] cursor-pointer "
      >
        {text} <ChevronRight size={18} className="mt-1" />
      </button>
    </div>
  );
};

export default Button;
