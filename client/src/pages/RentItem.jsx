import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../components/Navbar";
import image from "../assets/card_camera.png";
import "react-toastify/dist/ReactToastify.css";

const RentItem = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const notify = () => {
    toast.success("Request sent successfully!", {
      position: "top-center",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const getDayDifference = (start, end) => {
    const s = new Date(start);
    const e = new Date(end);
    const diffTime = e - s;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const dayDiff =
    startDate && endDate ? getDayDifference(startDate, endDate) : null;

  return (
    <div className="bg-[#2d2d2d] min-h-screen text-white overflow-hidden">
      <ToastContainer />
      <Navbar />

      {/* Container with responsive flex layout */}
      <div className="flex flex-col md:flex-row gap-6 px-4 sm:px-6 md:px-10 mt-6 md:mt-10">
        {/* Left Section: Image Card + UL */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          {/* Image Card */}
          <div className="relative w-full max-w-[278px] mx-auto bg-gradient-to-b from-[#151515] to-[#534f4f] rounded-[20px] p-3 shadow-inner shadow-[#00000040]">
            <img
              src={image}
              alt="camera"
              className="w-full h-[160px] object-cover rounded-[15px]"
            />
            <div className="mt-3 text-base font-medium font-['Montserrat'] tracking-wide text-center">
              CANNON EOS 200D
            </div>
            <div className="text-sm font-normal font-['Montserrat'] tracking-wide text-center">
              24.1 MP APS-C sensor
            </div>
          </div>
          <p className="text-sm">About this item</p>
          {/* UL: Feature List */}
          <ul className="text-sm list-disc list-inside text-white font-light w-full max-w-[278px] mx-auto">
            <li>Advanced 24.2MP back Illuminated sensor</li>
            <li>4K video recording support</li>
            <li>Dual Pixel autofocus</li>
          </ul>
          <span className="text-sm">More Pictures Of Your Item</span>
          <div className="flex flex-wrap gap-4">
            <div className="relative w-[180px] bg-gradient-to-b from-[#151515] to-[#534f4f] rounded-[20px] p-3 shadow-inner shadow-[#00000040]">
              <img
                src={image}
                alt="camera"
                className="w-full h-[90px] object-cover rounded-[15px]"
              />
            </div>
            <div className="relative w-[180px] bg-gradient-to-b from-[#151515] to-[#534f4f] rounded-[20px] p-3 shadow-inner shadow-[#00000040]">
              <img
                src={image}
                alt="camera"
                className="w-full h-[90px] object-cover rounded-[15px]"
              />
            </div>
          </div>

          <span className="text-sm">Contact Your Seller</span>
          <div className="w-full max-w-[247.47px] h-[155px] relative mx-auto">
            <div className="w-full max-w-[247.47px] h-[109.03px] absolute top-[45.97px] bg-[#d9d9d9]/10 rounded-[7.09px]" />
            <img
              className="w-[90.33px] h-[85.56px] absolute left-1/2 transform -translate-x-1/2 top-0 rounded-full shadow-[4.09px_6.14px_2.11px_-6.14px_rgba(0,0,0,0.30)] outline outline-[4.09px] outline-[#3b3939]"
              src="https://placehold.co/90x86"
              alt="seller"
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[94.60px] text-white text-[19.02px] font-semibold font-['Montserrat'] tracking-wide text-center">
              PETER PARKOUR
            </div>
            <div className="w-[32.07px] h-[31.33px] absolute left-1/2 transform -translate-x-1/2 top-[117.59px] bg-[#d9d9d9]/10 rounded-full">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/fluency-systems-filled/FFFFFF/48/phone-disconnected.png"
                alt="phone-disconnected"
              />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/df1b1b/24/high-priority.png"
              alt="high-priority"
            />
            <span className="font-light text-sm">
              Report an issue on your product or seller
            </span>
          </div>
        </div>

        {/* Right Big White Box */}
        <div className="w-full md:flex-1">
          <div className="w-full bg-white/10 rounded-[21.87px] border border-white/10 backdrop-blur-[0px] p-4 sm:p-6">
            <div className="flex flex-col gap-2">
              <div>
                <div className="flex flex-col mb-6">
                  <label className="text-white text-lg font-['Montserrat'] mb-2 tracking-wider font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    className="bg-transparent border-b border-white py-2 text-white focus:outline-none w-full max-w-[400px] font-light mb-6"
                    placeholder="Enter your email"
                  />

                  <label className="text-white text-lg font-['Montserrat'] mb-2 tracking-wider font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    className="bg-transparent border-b border-white py-2 text-white focus:outline-none w-full max-w-[400px] font-light mb-6"
                    placeholder="Enter your Name"
                  />

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="flex flex-col">
                      <label className="text-white text-lg font-['Montserrat'] mb-2 tracking-wider font-medium">
                        Pincode
                      </label>
                      <input
                        type="number"
                        className="bg-transparent border-b border-white py-2 text-white focus:outline-none w-full max-w-[400px] font-light mb-6"
                        placeholder="Enter your pincode"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-white text-lg font-['Montserrat'] mb-2 tracking-wider font-medium">
                        Location
                      </label>
                      <input
                        type="text"
                        className="bg-transparent border-b border-white py-2 text-white focus:outline-none w-full max-w-[400px] font-light mb-6"
                        placeholder="Enter your Location"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-white text-lg font-['Montserrat'] mb-2 tracking-wider font-medium">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        className="bg-transparent border-b border-white py-2 text-white focus:outline-none w-full max-w-[400px] font-light mb-6"
                        placeholder="Enter your Phone Number"
                      />
                    </div>
                  </div>

                  <label className="text-white text-lg font-['Montserrat'] mb-2 tracking-wider font-medium">
                    Address
                  </label>
                  <textarea
                    className="bg-transparent border-b border-white py-2 text-white focus:outline-none w-full max-w-[400px] font-light mb-6 resize-none"
                    placeholder="Enter your delivery address"
                    rows={3}
                  />

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                    <div className="flex flex-col">
                      <p className="text-white font-['Montserrat'] mb-2 tracking-wider font-medium">
                        Select date for your item
                      </p>
                      <input
                        onChange={(e) => setStartDate(e.target.value)}
                        type="datetime-local"
                        className="bg-[#2d2d2d] text-white border border-white/30 rounded-md py-2 px-3 focus:outline-none w-full max-w-[250px] font-light mb-6"
                      />
                    </div>

                    <div className="flex flex-col">
                      <p className="text-white font-['Montserrat'] mb-2 tracking-wider font-medium">
                        Select Date and time for your item out
                      </p>
                      <input
                        onChange={(e) => setEndDate(e.target.value)}
                        type="datetime-local"
                        className="bg-[#2d2d2d] text-white border border-white/30 rounded-md py-2 px-3 focus:outline-none w-full max-w-[250px] font-light mb-6"
                      />
                    </div>
                  </div>

                  <div className="max-w-[240px] w-full bg-white/15 backdrop-blur-md border border-white/10 rounded-md p-2.5 text-white space-y-1.5 text-xs font-[montserrat] mx-auto sm:mx-auto transition-transform hover:scale-[1.02]">
                    {/* Product Info */}
                    <div className="space-y-0.5">
                      <h2
                        className="text-sm font-bold text-white tracking-tight truncate"
                        title="Canon EOS Rebel T7"
                      >
                        Canon EOS Rebel T7
                      </h2>
                      <p
                        className="text-[11px] font-light text-gray-200 tracking-wide line-clamp-1"
                        title="Peter parkour"
                      >
                        Peter parkour
                      </p>
                    </div>

                    {/* Charges */}
                    <div className="space-y-1.5 px-1.5">
                      <div className="flex flex-col">
                        <div className="flex justify-between text-sm font-semibold text-white tracking-tight">
                          <p>Item Total</p>
                          <p>₹500</p>
                        </div>
                        <span
                          className="text-xs font-light text-gray-200 tracking-wide line-clamp-2"
                          title="Rate for 1 day"
                        >
                          Rate for 1 day
                        </span>
                      </div>

                      <div className="flex flex-col">
                        <div className="flex justify-between text-sm font-semibold text-white tracking-tight">
                          <p>Add On Days</p>
                          <p>₹100</p>
                        </div>
                        <span
                          className="text-xs font-light text-gray-200 tracking-wide line-clamp-2"
                          title="₹100 increment"
                        >
                          ₹100 increment
                        </span>
                      </div>

                      <div className="flex flex-col">
                        <div className="flex justify-between text-sm font-semibold text-white tracking-tight">
                          <p>Caution Deposit</p>
                          <p>₹200</p>
                        </div>
                        <span
                          className="text-xs font-light text-gray-200 tracking-wide line-clamp-2"
                          title="₹200 refundable after product return"
                        >
                          ₹200 refundable after return
                        </span>
                      </div>

                      <div className="flex flex-col">
                        <div className="flex justify-between text-sm font-semibold text-white tracking-tight">
                          <p>Delivery Fee</p>
                          <p>₹200</p>
                        </div>
                        <span
                          className="text-xs font-light text-gray-200 tracking-wide line-clamp-2"
                          title="Free up to 3 km, ₹20 per km thereafter"
                        >
                          Free up to 3 km, ₹20/km after
                        </span>
                      </div>

                      <hr className="border-gray-600/20 my-1.5" />

                      <div className="flex justify-between text-base font-bold text-white tracking-tight bg-white/5 rounded px-1.5 py-0.5">
                        <p>TO PAY</p>
                        <p>₹980</p>
                      </div>
                    </div>
                  </div>

                  {startDate && endDate && dayDiff > 0 && (
                    <div className="text-white mt-4 font-['Montserrat'] text-sm">
                      <p>
                        You selected {dayDiff} {dayDiff === 1 ? "day" : "days"}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
                        <p>
                          Your item will be delivered to you on:{" "}
                          {new Date(startDate).toLocaleString()}
                        </p>
                        <p>
                          Your item will be returned from you on:{" "}
                          {new Date(endDate).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={notify}
                    type="button"
                    className="bg-[#ffffff22] text-white border border-white/30 rounded-full px-6 py-3 mt-6 w-full max-w-[250px] hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Request Item for Rent
                  </button>

                  <span>
                    You will be notified when the buyer accepts your request
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentItem;
