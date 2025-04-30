import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Tagline from "../components/Tagline";
import Hero from "../components/Hero";
import Items from "../components/Items";
import FilterItem from "../components/FilterItem";
import Cards from "../components/Cards";
import axios from "axios";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/product/all");
      console.log(res.data);
      setProducts(res.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="bg-[#0C0A0B] min-h-screen flex flex-col">
        <Navbar />
        <Tagline />
        <Hero />
        <Items />
        <FilterItem />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
          {products.map((product) => (
            <Cards key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
