import React from "react";
import Hero from "./component/Hero";
import OurPhilosopy from "./component/OurPhilosopy";
import PoweringFuture from "./component/PoweringFuture";
import Slider from "./component/Slider";
const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <PoweringFuture />

      <OurPhilosopy />
      <Slider />
    </div>
  );
};

export default Home;
