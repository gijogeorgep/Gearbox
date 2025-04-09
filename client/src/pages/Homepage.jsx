import React from "react";
import Navbar from "../components/Navbar";
import Tagline from "../components/Tagline";
import Hero from "../components/Hero";
import Items from "../components/Items";
import FilterItem from "../components/FilterItem";

const Homepage = () => {
  return (
    <>
      <div className="bg-[#0C0A0B] min-h-screen flex flex-col">
        <Navbar />
        <Tagline />
        <Hero />
        <Items />
        <FilterItem />
      </div>
    </>
  );
};

export default Homepage;
