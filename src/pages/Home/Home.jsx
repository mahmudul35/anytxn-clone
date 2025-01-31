import React from "react";
import Hero from "./component/Hero";
import OurPhilosopy from "./component/OurPhilosopy";
import PoweringFuture from "./component/PoweringFuture";
const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <PoweringFuture />

      <OurPhilosopy />
    </div>
  );
};

export default Home;
