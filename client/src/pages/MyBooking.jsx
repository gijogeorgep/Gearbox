import React from "react";
import Navbar from "../components/Navbar";
import BuyerDasboardSidebar from "../components/BuyerDasboardSidebar";
import "../components/fonts.css";
const MyBooking = () => {
  return (
    <>
      <div className="relative min-h-screen bg-[#0C0A0B] overflow-hidden">
        <div className="relative z-10">
          <Navbar />
          <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6">
            <div className="w-full lg:w-60 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm flex flex-col items-center py-6">
              <img
                src="https://placehold.co/120x120"
                alt="Profile"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full outline-[4px] outline-[#3b3939]"
              />

              <BuyerDasboardSidebar />
            </div>

            <div className="flex-1 flex justify-center items-center">
              <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] max-w-6xl bg-white/10 p-4 sm:p-6 rounded-xl border border-white/10 backdrop-blur-sm flex flex-col  space-y-4 text-white">
                <div className="w-[900px] h-36 relative ml-10">
                  <div className="w-[990px] h-36 left-0 top-0 absolute bg-white/10 rounded-[13px] border border-white/10 backdrop-blur-[0px]" />
                  <div className="w-[101px] h-[76px] left-[14px] top-[22px] absolute bg-gradient-to-b from-[#151515] to-[#534f4f] rounded-[9.73px]" />
                  <img
                    className="w-[92.04px] h-[61.36px] left-[16.35px] top-[30.01px] absolute"
                    src="https://placehold.co/92x61"
                  />
                  <div className="w-[272px] h-px left-[172px] top-[45px] absolute text-justify justify-start text-white text-base font-normal font-['Montserrat'] tracking-wide">
                    Canon EOS Rebel T7 / 2000D <br />
                    24.1 MP APS-C sensor
                  </div>
                  <div className="w-[108.56px] h-[30.06px] left-[579px] top-[98px] absolute bg-[#0caf3a] rounded-[10px]" />
                  <button className="left-[598.71px] top-[105.52px] absolute text-center justify-start text-white text-xs font-normal font-[Montserrat] tracking-wide">
                    Book Now
                  </button>
                  <div className="w-[113px] h-[31.29px] left-[700px] top-[97px] absolute bg-[#df1b1b] rounded-[10px]" />
                  <button className="left-[728.21px] top-[104.82px] absolute text-center justify-start text-white text-xs font-normal font-[Montserrat] tracking-wide">
                    CANCEL
                  </button>
                  <div className="left-[496px] top-[52px] absolute justify-start text-white text-[15px] font-semibold font-['Montserrat'] capitalize tracking-wide">
                    Your Order Has been approved by seller
                  </div>
                  <div className="left-[16px] top-[110px] absolute justify-start text-white text-[15px] font-light font-[Montserrat] underline capitalize tracking-wide">
                    see seller details
                  </div>
                </div>
                <div className="absolute top-2 right-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBooking;
