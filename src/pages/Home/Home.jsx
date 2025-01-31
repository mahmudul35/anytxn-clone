import React from "react";
import Hero from "./component/Hero";
import OurPhilosopy from "./component/OurPhilosopy";
import PoweringFuture from "./component/PoweringFuture";
import Slider from "./component/Slider";
import TrustedSection from "./component/TrustedSection";
const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <PoweringFuture />

      <OurPhilosopy />
      <Slider />
      <TrustedSection />
    </div>
  );
};

export default Home;
