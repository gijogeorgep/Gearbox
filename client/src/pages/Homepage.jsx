import React from "react";
import Navbar from "../components/Navbar";
import Tagline from "../components/Tagline";
import Hero from "../components/Hero";
import Items from "../components/Items";
import FilterItem from "../components/FilterItem";
import Cards from "../components/Cards";

const Homepage = () => {
  return (
    <>
      <div className="bg-[#0C0A0B] min-h-screen flex flex-col">
        <Navbar />
        <Tagline />
        <Hero />
        <Items />
        <FilterItem />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          
        </div>
      </div>
    </>
  );
};

export default Homepage;
