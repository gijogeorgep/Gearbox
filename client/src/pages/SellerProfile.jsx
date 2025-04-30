import React from "react";
import Navbar from "../components/Navbar";
import "../components/fonts.css";
import dashboardbg from "../assets/dashboardbg.png";
import SellerDasboardSidebar from "../components/SellerDasboardSidebar";

const SellerProfile = () => {
  return (
    <>
      <div className="relative min-h-screen bg-[#0C0A0B] overflow-hidden">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
          style={{ backgroundImage: `url(${dashboardbg})` }}
        ></div>

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
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full  outline-[4px] outline-[#3b3939]"
              />

              {/* Username */}

              {/* Sidebar Buttons */}
              <SellerDasboardSidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex justify-center items-center">
              <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] max-w-4xl bg-white/10 p-4 sm:p-6 rounded-xl border border-white/10 backdrop-blur-sm flex justify-center items-center">
                <div className="w-[240px] sm:w-[300px] h-[160px] sm:h-[200px] bg-white/10 rounded-lg border border-white/10 flex items-center justify-center">
                  <img
                    src="https://placehold.co/120x120"
                    alt="Inner Profile"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full  outline-[4px] outline-[#3b3939]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerProfile;
