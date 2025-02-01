import React from "react";
import Footer from "../../component/Footer";
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
      <Footer />
    </div>
  );
};

export default Home;
