import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import axios from "axios";

const AdminSeller = () => {
  const [sellercount, setSellercount] = useState("");
  const [itemsCount, setItemsCount] = useState();
  const [sellers, setSellers] = useState([]);

  // Fetching total sellers count
  const fetchSellercount = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/seller/count");
      setSellercount(res.data.count);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetching total items count
  const fetchItemsCount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/product/count"
      );
      setItemsCount(response.data.count);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetching all sellers with their products
  const fetchAllSellers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/product/sellerproducts-admin"
      );
      setSellers(response.data.sellers);
      console.log(sellers);
      // Assuming response contains 'sellers' array
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSellercount();
    fetchItemsCount();
    fetchAllSellers();
  }, []);

  return (
    <div className="min-h-screen bg-[#2d2d2d] flex">
      <AdminSidebar />

      <main className="flex-1 p-8 text-white">
        <div className="flex gap-4 flex-wrap">
          <div className="bg-white/10 border border-white/10 backdrop-blur-sm rounded-xl p-6 w-64">
            <h2 className="text-lg font-semibold tracking-wider mb-2">
              TOTAL Sellers
            </h2>
            <p className="text-7xl font-bold tracking-widest text-[#df1b1b]">
              {sellercount}
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 backdrop-blur-sm rounded-xl p-6 w-64">
            <h2 className="text-lg font-semibold tracking-wider mb-2">
              TOTAL Items
            </h2>
            <p className="text-5xl font-bold tracking-widest">{itemsCount}</p>
          </div>
        </div>

        <div className="flex justify-evenly mr-10 gap-20 mt-10 font-medium">
          <span>Sl No</span>
          <span>Username</span>
          <span>Items</span>
          <span>Email</span>
        </div>

        <div className="w-[1200px] h-0 border-t border-white mt-5"></div>

        <div className="mt-10">
          {sellers && sellers.length > 0 ? (
            sellers.map((seller, index) => (
              <div
                key={seller._id || index}
                className="flex justify-evenly mr-10 gap-20 p-4 mb-4 bg-white/10 rounded-[13px] border border-white/10 backdrop-blur-[0px] text-white font-medium"
              >
                <span>{index + 1}</span>
                <span>{seller.username || "N/A"}</span>
                <span>{seller.products?.length || 0}</span>{" "}
                {/* Display number of products */}
                <span>{seller.email || "N/A"}</span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No sellers found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminSeller;
