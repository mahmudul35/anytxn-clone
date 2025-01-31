import React from "react";

const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="my-16 text-center">
      <h3 className="text-blue-700 ">{subtitle}</h3>
      <h1 className="text-7xl text-slate-800 font-semibold">{title}</h1>
    </div>
  );
};

export default SectionTitle;
