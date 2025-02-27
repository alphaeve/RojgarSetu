import React from "react";
import HeroSection from "./HeroSection";
// import EmployerJobSeeker from "./EmployerJobSeeker";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function Home() {
  return (
    <>
 <HeroSection />
 {/* <EmployerJobSeeker/> */}
 <Testimonials/>
 <Footer/>
 </>
  );
}

export default Home;
