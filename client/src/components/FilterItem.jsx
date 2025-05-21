import React from "react";
import "./fonts.css";
import { useState } from "react";
import { useEffect } from "react";

const FilterItem = ({ onChange }) => {
  const [name, setname] = useState("");
  const [location, setLocation] = useState("");
  const [itemType, setItemType] = useState("");
  const [brand, setBrand] = useState("");

  useEffect(() => {
    onChange({ name, location, itemType, brand });
  }, [name, location, itemType, brand]);
  
  return (
    <div className="w-full px-4 space-y-12 py-8">
      <div className="max-w-6xl mx-auto">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/ios/50/FFFFFF/filter--v1.png"
          alt="filter--v1"
        />
        <div className="w-full bg-[#4f4a4a] rounded-xl p-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4">
            <div className="bg-white/10 rounded-xl w-full md:w-[230px] h-12">
              <input
                onChange={(e) => setname(e.target.value)}
                value={name}
                className="w-full h-full p-3 outline-none bg-transparent text-white placeholder-white"
                type="text"
                placeholder="Search by name"
              />
            </div>

            <div className="bg-white/10 rounded-xl w-full md:w-[230px] h-12">
              <input
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                className="w-full h-full p-3 outline-none bg-transparent text-white placeholder-white"
                type="text"
                placeholder="Search by location"
              />
            </div>

            <div className="bg-white/10 rounded-xl w-full md:w-[230px] h-12">
              <select
                onChange={(e) => {
                  setItemType(e.target.value);
                  if (e.target.value !== "camera") {
                    setBrand("");
                  }
                }}
                value={itemType}
                className="w-full h-full p-3 outline-none bg-transparent"
                name="item-type"
              >
                <option value="">Select item type</option>
                <option value="camera">Camera</option>
                <option value="lens">Lens</option>
                <option value="gimbal">Gimbal</option>
                <option value="tripod">Tripod</option>
              </select>
            </div>

            {/* Only show this if itemType is "camera" */}
            {itemType === "camera" && (
              <div className="bg-white/10 rounded-xl w-full md:w-[230px] h-12 mt-4">
                <select
                  onChange={(e) => setBrand(e.target.value)}
                  value={brand}
                  className="w-full h-full p-3 outline-none bg-transparent"
                  name="brand"
                >
                  <option value="">Select brand</option>
                  <option value="sony">Sony</option>
                  <option value="canon">Canon</option>
                  <option value="nikon">Nikon</option>
                  <option value="panasonic">Panasonic</option>
                </select>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterItem;
