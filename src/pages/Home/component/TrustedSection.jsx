import React from "react";
import CountUp from "react-countup";
import img1 from "../../../assets/sponsored/ajker.png";
import img2 from "../../../assets/sponsored/bikroy.png";
import img3 from "../../../assets/sponsored/chaldal.png";
import img4 from "../../../assets/sponsored/daraz.png";
const TrustedSection = () => {
  return (
    <div className="text-center my-10">
      <h1 className=" text-blue-600">TRUSTED BY THE BEST</h1>
      <div className="flex justify-evenly items-center max-w-[1200px] mx-auto ">
        <div>
          <div className="text-7xl text-blue-700 font-extrabold mt-5">
            ><CountUp start={0} end={20} duration={2} />
          </div>
          <p>Years of Experience</p>
        </div>
        <div>
          <div className="text-7xl text-blue-700 font-extrabold mt-5">
            ><CountUp start={0} end={40} duration={2} />+
          </div>
          <p>Financial Institutions</p>
        </div>
        <div>
          <div className="text-7xl text-blue-700 font-extrabold mt-5">
            ><CountUp start={0} end={200} duration={2} />
          </div>
          <p>Customers Each</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto">
        {/* one */}
        <div className="grid grid-cols-5 gap-4 mt-10  justify-center  items-center">
          <div>
            <img src={img1} alt="Sponsor 1" className="w-[160px] " />
          </div>
          <div>
            <img src={img2} alt="Sponsor 2" className="w-[160px] " />
          </div>
          <div>
            <img src={img3} alt="Sponsor 3" className="w-[160px] " />
          </div>
          <div>
            <img src={img4} alt="Sponsor 4" className="w-[160px] " />
          </div>
          <div>
            <img src={img3} alt="Sponsor 4" className="w-[160px] " />
          </div>
        </div>
        {/* two */}
        <div className="grid grid-cols-5 gap-4   justify-center items-center">
          <div>
            <img src={img1} alt="Sponsor 1" className="w-[160px] " />
          </div>
          <div>
            <img src={img2} alt="Sponsor 2" className="w-[160px] " />
          </div>
          <div>
            <img src={img3} alt="Sponsor 3" className="w-[160px] " />
          </div>
          <div>
            <img src={img4} alt="Sponsor 4" className="w-[160px] " />
          </div>
          <div>
            <img src={img3} alt="Sponsor 4" className="w-[160px] " />
          </div>
        </div>
        {/* three */}
        <div className="grid grid-cols-5 gap-4  justify-center items-center">
          <div>
            <img src={img1} alt="Sponsor 1" className="w-[160px] " />
          </div>
          <div>
            <img src={img2} alt="Sponsor 2" className="w-[160px] " />
          </div>
          <div>
            <img src={img3} alt="Sponsor 3" className="w-[160px] " />
          </div>
          <div>
            <img src={img4} alt="Sponsor 4" className="w-[160px] " />
          </div>
          <div>
            <img src={img3} alt="Sponsor 4" className="w-[160px] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
