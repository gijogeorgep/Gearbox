import React from "react";
import Navbar from "../components/Navbar";
import Tagline from "../components/Tagline";
import Hero from "../components/Hero";

const Homepage = () => {
  return (
    <>
      <div className="bg-[#0C0A0B] min-h-screen flex flex-col">
        <Navbar />
        <Tagline />
        <Hero />
      </div>
    </>
  );
};

export default Homepage;
