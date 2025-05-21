import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SellerDasboardSidebar from "../components/SellerDasboardSidebar";
import "../components/fonts.css";
import axios from "axios";

const RentalRequest = () => {
  const [requests, setRequests] = useState([]);

  const fetchRentRequest = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "http://localhost:4000/api/rentrequest/requestForSeller",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRequests(response.data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchRentRequest();
  }, []);

  const updateRequestStatus = async (requestId, status) => {
    const confirmAction = window.confirm(
      `Are you sure you want to ${status.toLowerCase()} this request?`
    );
    if (!confirmAction) return;

    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:4000/api/rentrequest/update/${requestId}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchRentRequest(); // Refresh list after update
    } catch (error) {
      console.error("Update Request Error:", error);
    }
  };

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
                <span>Status</span>
              </div>

              <div className="w-full h-px bg-white/20 mb-4"></div>

              {/* Request Rows */}
              {requests.map((req, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-8 gap-4 items-center text-sm sm:text-base text-white font-light bg-[#d9d9d9]/10 rounded-[10px] px-4 py-3 mb-3 ${
                    req.status === "Approved" || req.status === "Rejected"
                      ? "opacity-50 pointer-events-none"
                      : ""
                  }`}
                >
                  <span>{req.name}</span>
                  <span>{req.product?.itemType}</span>
                  <span>{req.product?.name}</span>
                  <span>{req.location}</span>
                  <span>{req.phoneNumber}</span>
                  <span>{req.startDate}</span>
                  <span>{req.endDate}</span>

                  {/* Approve / Reject Buttons */}
                  <div className="flex flex-col gap-1 text-center">
                    {req.status === "Approved" || req.status === "Rejected" ? (
                      <span className="text-xs font-semibold">
                        {req.status}
                      </span>
                    ) : (
                      <>
                        <button
                          className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 rounded-md font-semibold"
                          onClick={() =>
                            updateRequestStatus(req._id, "Approved")
                          }
                        >
                          Approve
                        </button>
                        <button
                          className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded-md font-semibold"
                          onClick={() =>
                            updateRequestStatus(req._id, "Rejected")
                          }
                        >
                          Reject
                        </button>
                      </>
                    )}
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
