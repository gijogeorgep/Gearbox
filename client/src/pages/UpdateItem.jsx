import React, { useState } from "react";
import Navbar from "../components/Navbar";

const UpdateItem = () => {
  const [selectedType, setSelectedType] = useState("");

  return (
    <div className="relative min-h-screen bg-[#0C0A0B] overflow-hidden text-white">
      <Navbar />

      <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6">
        {/* Sidebar */}
        <div className="w-full lg:w-60 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm flex flex-col items-center py-6">
          <img
            src="https://placehold.co/120x120"
            alt="Profile"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full outline-[4px] outline-[#3b3939]"
          />
          <div className="mt-4 text-sm text-center">SellerDashboardSidebar</div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-4xl bg-white/10 p-4 sm:p-6 rounded-xl border border-white/10 backdrop-blur-sm">
            <form>
              <h1 className="text-xl font-semibold mb-4">Select Item</h1>

              {/* Item Type Buttons */}
              <div className="flex gap-5 flex-wrap mb-6">
                {["Camera", "Tripod", "Lens", "Gimbal"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSelectedType(item)}
                    className={`rounded-xl px-4 py-2 w-[100px] ${
                      selectedType === item
                        ? "bg-red-500 text-white"
                        : "bg-[#FFFFFF] text-[#df1b1b]"
                    } hover:bg-gray-200`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Brand Buttons (Only show if Camera is selected) */}
              {selectedType === "Camera" && (
                <div className="flex gap-5 flex-wrap mb-6">
                  {["Nikon", "Sony", "Canon", "Fujifilm", "Panasonic"].map(
                    (b) => (
                      <button
                        key={b}
                        type="button"
                        className="rounded-xl px-4 py-2 w-[100px] bg-[#FFFFFF] text-[#df1b1b] hover:bg-gray-200"
                      >
                        {b}
                      </button>
                    )
                  )}
                </div>
              )}

              {/* Upload Main Image */}
              <div className="flex justify-center mb-6">
                <label className="w-full max-w-md bg-white/10 border border-white/20 rounded-xl p-6 flex flex-col items-center gap-4 cursor-pointer">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/material-rounded/48/upload-to-cloud.png"
                    alt="upload"
                  />
                  <p>Upload Thumbnail</p>
                  <input type="file" className="hidden" />
                </label>
              </div>

              {/* Small Images Upload */}
              <div className="flex justify-center gap-4 mb-6">
                {[1, 2].map((i) => (
                  <label
                    key={i}
                    className="w-36 h-36 bg-white/10 border border-white/20 rounded-xl p-2 flex flex-col items-center justify-center cursor-pointer"
                  >
                    <img
                      width="32"
                      height="32"
                      src="https://img.icons8.com/material-rounded/48/upload-to-cloud.png"
                      alt="upload"
                    />
                    <p>Upload Img {i}</p>
                    <input type="file" className="hidden" />
                  </label>
                ))}
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <label>Name</label>
                  <input
                    placeholder="Product Name"
                    type="text"
                    className="w-full bg-transparent border-b border-white/30 outline-none py-2"
                  />
                </div>

                <div>
                  <label>Description</label>
                  <input
                    placeholder="Short description"
                    type="text"
                    className="w-full bg-transparent border-b border-white/30 outline-none py-2"
                  />
                </div>

                <div>
                  <label>Detailed Description (Points)</label>
                  {[1, 2].map((_, index) => (
                    <div key={index} className="flex items-center gap-2 mb-2">
                      <input
                        placeholder={`Point ${index + 1}`}
                        type="text"
                        className="w-full bg-transparent border-b border-white/30 outline-none py-2"
                      />
                      <button
                        type="button"
                        className="text-red-500 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="mt-2 text-sm text-green-500 hover:text-green-600"
                  >
                    + Add Another Point
                  </button>
                </div>

                <div>
                  <label>Location</label>
                  <input
                    placeholder="Location"
                    type="text"
                    className="w-full bg-transparent border-b border-white/30 outline-none py-2"
                  />
                </div>
              </div>

              {/* Rate and Caution */}
              <span>Rate</span>
              <div className="flex flex-col gap-6 mb-6">
                <div className="w-[220px] h-[66px] bg-[#d9d9d9]/10 rounded-lg flex items-center justify-between px-4">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-6 h-6 object-contain"
                      src="https://img.icons8.com/material-outlined/FFFFFF/48/rupee.png"
                      alt="rupee"
                    />
                    <p className="text-white text-lg font-medium">000</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <button className="w-7 h-6 bg-[#d9d9d9]/10 text-white rounded-md">
                      +
                    </button>
                    <button className="w-7 h-6 bg-[#d9d9d9]/10 text-white rounded-md">
                      -
                    </button>
                  </div>
                </div>

                <span>Caution Deposit</span>
                <div className="w-[220px] h-[66px] bg-[#d9d9d9]/10 rounded-lg flex items-center justify-between px-4">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-6 h-6 object-contain"
                      src="https://img.icons8.com/material-outlined/FFFFFF/48/rupee.png"
                      alt="rupee"
                    />
                    <p className="text-white text-lg font-medium">000</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <button className="w-7 h-6 bg-[#d9d9d9]/10 text-white rounded-md">
                      +
                    </button>
                    <button className="w-7 h-6 bg-[#d9d9d9]/10 text-white rounded-md">
                      -
                    </button>
                  </div>
                </div>
              </div>

              {/* Tutorial Link */}
              <div className="mb-6">
                <label>Tutorial Link</label>
                <input
                  placeholder="YouTube Video ID"
                  type="text"
                  className="w-full bg-transparent border-b border-white/30 outline-none py-2"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#df1b1b] text-white py-2 rounded-xl"
              >
                Edit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
