import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import SellerDasboardSidebar from "../components/SellerDasboardSidebar";

const MyList = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchSellerProducts = async () => {
      try {
        const token = localStorage.getItem("token");

        console.log("Token:", token);
      

        const res = await axios.get(
          `http://localhost:4000/api/product/seller/products`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Cache-Control": "no-cache",
            },
          }
        );

        console.log("Fetched data:", res.data);
        setProducts(res.data.products);
      } catch (error) {
        console.error("Error fetching seller products:", error);
      }
    };

    fetchSellerProducts();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0C0A0B] overflow-hidden">
      <div className="relative z-10">
        <Navbar />
        <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-6">
          {/* Sidebar */}
          <div className="w-full lg:w-60 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm flex flex-col items-center py-6">
            <img
              src="/api/placeholder/120/120"
              alt="Profile"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full outline-[4px] outline-[#3b3939]"
            />
            <SellerDasboardSidebar />
          </div>

          {/* Product Cards */}
          <div className="flex-1 flex flex-wrap gap-6 justify-start items-start">
            {products.map((product) => (
              <div
                key={product._id}
                className="w-[264.54px] h-[285px] bg-gradient-to-b from-[#151515] to-[#534f4f] rounded-[15.06px] relative p-4"
              >
                <img
                  className="w-full h-[148.48px] object-cover rounded"
                  src={product.imageUrl || "https://placehold.co/223x148"}
                  alt={product.name}
                />
                <div className="text-white mt-4 text-xs font-montserrat tracking-wide">
                  {product.name} <br />
                  {product.description}
                </div>
                <div className="flex justify-between mt-4">
                  <button className="bg-[#df1b1b] rounded-[6.92px] px-3 py-1 text-white text-sm">
                    UPDATE
                  </button>
                  <button className="bg-[#df1b1b] rounded-[6.92px] px-3 py-1 text-white text-sm">
                    DELETE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyList;
