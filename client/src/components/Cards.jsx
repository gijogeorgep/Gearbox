import React from "react";
import { useNavigate } from "react-router-dom";
import "./fonts.css";

const Cards = ({ product }) => {
  const navigate = useNavigate();

  const handleRentClick = () => {
    console.log("Navigating with product _id:", product._id);
    if (!product._id) {
      console.error("Product _id is undefined:", product);
      return;
    }
    navigate(`/rentitem/${product._id}`, { state: { product } });
  };

  return (
    <div className="w-full max-w-[278px] h-auto relative rounded-2xl bg-gradient-to-b from-[#1c1c1c] to-[#4f4a4a] p-5 mx-auto shadow-inner shadow-[#00000040] flex flex-col justify-start">
      {/* Product Image First */}
      <div className="relative w-full h-[160px] rounded-xl overflow-hidden">
        <img
          src={
            product.imageUrl ||
            "https://via.placeholder.com/278x160?text=No+Image"
          }
          alt={product.name}
          className="w-full h-full object-cover object-center"
          loading="lazy"
          onError={(e) =>
            (e.target.src =
              "https://via.placeholder.com/278x160?text=Image+Error")
          }
        />
      </div>

      {/* Product Name & Description */}
      <div className="text-white text-center mt-3 text-xs sm:text-sm font-medium font-[montserrat] leading-snug tracking-wide">
        <div>{product.name}</div>
        <div className="text-gray-300 text-xs font-light mt-1">
          {product.description}
        </div>
      </div>

      {/* Location */}
      <div className="flex gap-2 mt-3 items-center">
        <img
          width="14"
          height="14"
          src="https://img.icons8.com/deco-glyph/48/ffffff/marker.png"
          alt="marker"
        />
        <div className="text-white text-xs sm:text-sm font-light font-[montserrat] tracking-wide">
          {product.location || "Unknown Location"}
        </div>
      </div>

      {/* Price and Rent Button */}
      <div className="flex justify-between items-center mt-4 px-2">
        <div className="flex items-start gap-2">
          <img
            width="18"
            height="18"
            src="https://img.icons8.com/material-rounded/24/ffffff/rupee.png"
            alt="rupee"
            className="mt-[2px]"
          />
          <div className="flex flex-col leading-none">
            <div className="text-white text-[18px] sm:text-[20px] font-semibold font-[montserrat] tracking-wider">
              {product.rate}
            </div>
            <div className="text-white text-[9px] sm:text-[10px] font-light font-[montserrat] tracking-wider mt-0.5">
              1 day
            </div>
          </div>
        </div>

        <button
          onClick={handleRentClick}
          className="bg-[#df1b1b] rounded-lg px-4 py-1 shadow-md shadow-[#df1b1b70] hover:bg-[#b91515] transition-colors"
        >
          <span className="text-white text-sm font-medium font-[montserrat] tracking-wide">
            RENT
          </span>
        </button>
      </div>
    </div>
  );
};

export default Cards;
