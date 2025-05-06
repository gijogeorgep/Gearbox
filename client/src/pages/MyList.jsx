import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import SellerDasboardSidebar from "../components/SellerDasboardSidebar";
import { useParams } from "react-router-dom";

const MyList = () => {
  const { sellerId } = useParams();
  const [products, setProducts] = useState([]); // Holds products

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("sellertoken"); // or sellerToken if different
      console.log("Seller ID:", sellerId);
      console.log("Token:", token);

      const response = await axios.get(
        "http://localhost:4000/api/product/mylisting",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("API Response:", response.data);
      const productArray = Array.isArray(response.data.products)
        ? response.data.products
        : [];

      setProducts(productArray);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0C0A0B] overflow-hidden">
      <div className="relative z-10">
        <Navbar />

        <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6">
          {/* Sidebar */}
          <div className="w-full lg:w-60 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm flex flex-col items-center py-6">
            <img
              src="https://placehold.co/120x120"
              alt="Profile"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full outline-[4px] outline-[#3b3939]"
            />
            <SellerDasboardSidebar />
          </div>

          {/* Product Grid */}
          <div className="flex-1 flex flex-wrap justify-center gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product._id}
                  className="w-64 bg-gradient-to-b from-[#151515] to-[#534f4f] rounded-xl p-3 text-white font-montserrat"
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <div className="mt-3 text-xs text-center tracking-wide leading-tight">
                    {product.name} <br />
                    {product.description}
                  </div>
                  <div className="flex justify-between mt-4">
                    <button className="bg-[#df1b1b] px-3 py-1.5 rounded-md text-white text-xs font-medium hover:bg-red-700 transition">
                      UPDATE
                    </button>
                    <button className="bg-[#df1b1b] px-3 py-1.5 rounded-md text-white text-xs font-medium hover:bg-red-700 transition">
                      DELETE
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white">No products uploaded by this seller.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyList;
