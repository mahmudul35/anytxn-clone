import React from "react";
import Navbar from "../../component/Navbar";
import Card from "./shared/Card";
import Power from "./shared/Power";

const Service = () => {
  return (
    <div>
      <Navbar
        subtitle={"OUR SERVICES"}
        title={"Reimagining banking solutions"}
        para={
          "Enabling financial institutions to create unparalleled customer experiences"
        }
      />
      <Power />
      <Card />
    </div>
  );
};

export default Service;
