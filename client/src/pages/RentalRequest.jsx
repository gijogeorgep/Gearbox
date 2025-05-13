import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SellerDasboardSidebar from "../components/SellerDasboardSidebar";
import "../components/fonts.css";
import axios from "axios";

const RentalRequest = () => {
  const [requests, setRequests] = useState([]);

  const fetchRentRequest = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    const response = await axios.get(
      "http://localhost:4000/api/rentrequest/requestForSeller",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setRequests(response.data);
    console.log("data:", response.data);
  };
  useEffect(() => {
    fetchRentRequest();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0C0A0B] overflow-hidden">
      {/* Content Layer */}
      <div className="relative z-10">
        {/* Top Navbar */}
        <Navbar />

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6">
          {/* Sidebar */}
          <div className="w-full lg:w-60 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm flex flex-col items-center py-6">
            {/* Profile Image */}
            <img
              src="https://placehold.co/120x120"
              alt="Profile"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full outline-[4px] outline-[#3b3939]"
            />

            {/* Sidebar Buttons */}
            <SellerDasboardSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 flex justify-center items-center px-3">
            <div className="w-full max-w-7xl bg-white/10 p-6 rounded-xl border border-white/10 backdrop-blur-sm flex flex-col">
              {/* Table Headers */}
              <div className="grid grid-cols-8 gap-4 mb-4 text-sm sm:text-base text-white font-[Montserrat] font-semibold">
                <span>Name</span>
                <span>Item Type</span>
                <span>Item Name</span>
                <span>Location</span>
                <span>Phone No</span>
                <span>Delivery</span>
                <span>Return</span>
                <span> Payemnt Status</span>
              </div>

              <div className="w-full h-px bg-white/20 mb-4"></div>

              {/* Request Rows */}
              {requests.map((req, index) => (
                <div
                  key={index}
                  className="grid grid-cols-8 gap-4 items-center text-sm sm:text-base text-white font-light bg-[#d9d9d9]/10 rounded-[10px] px-4 py-3 mb-3"
                >
                  <span>{req.name}</span>
                  <span>{req.product?.itemType}</span>
                  <span>{req.product?.name}</span>
                  <span>{req.location}</span>
                  <span>{req.phoneNumber}</span>
                  <span>{req.startDate}</span>
                  <span>{req.endDate}</span>

                  {/* Payment Button */}

                  <div className="flex flex-col gap-3">
                    <div className="relative w-[100px] h-[30px] rounded-[10px]">
                      <div className="absolute inset-0 bg-[#0caf3a] rounded-[10px] flex flex-col" />
                      <button className="absolute inset-0 text-white text-xs font-[Montserrat] tracking-wide">
                        Approve
                      </button>
                    </div>

                    <div className="relative w-[100px] h-[30px] rounded-[10px]">
                      <div className="absolute inset-0 bg-[#df1b1b] rounded-[10px] flex flex-col" />
                      <button className="absolute inset-0 text-white text-xs font-[Montserrat] tracking-wide">
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalRequest;
