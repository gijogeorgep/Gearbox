import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const SellerDasboardSidebar = () => {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (p) => path === p;
  const btnStyle = (active) =>
    `w-full h-10 rounded-md px-3 text-sm font-[montserrat] text-white ${
      active ? "bg-white/20" : "bg-white/10"
    }`;
  return (
    <>
      <div className="mt-3 text-white text-base sm:text-lg font-semibold font-[montserrat] text-center">
        PETER PARKOUR
      </div>

      <div className="mt-6 space-y-3 w-full px-4">
        {/* 
       
         */}

        <Link to="/sellerprofile">
          <button className={btnStyle(isActive("/sellerprofile"))}>
            PROFILE
          </button>
        </Link>

        <Link to="/sellitems">
          <button className={btnStyle(isActive("/sellitems"))}>
            SELL ITEMS
          </button>
        </Link>
        <button className="w-full h-9 bg-white/10 text-white rounded-md border border-white/10 text-sm font-light font-[montserrat]">
          MY LIST
        </button>
        <button className="w-full h-9 bg-white/10 text-white rounded-md border border-white/10 text-sm font-light font-[montserrat] flex items-center justify-between px-3">
          <span>RENTAL REQUESTS</span>
          <span className="w-5 h-5 ml-4 bg-[#df1b1b] text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
            1
          </span>
        </button>
      </div>
    </>
  );
};

export default SellerDasboardSidebar;
