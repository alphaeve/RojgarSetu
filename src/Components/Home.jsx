import React from "react";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Graph from "./Graph";
// import FeaturedJobs from "./FeaturedJobs";
// import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <>
      <HeroSection />
      <Graph />
      {/* <FeaturedJobs /> */}
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
