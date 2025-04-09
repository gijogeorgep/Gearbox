import React, { useState } from "react";
import profile from "../assets/profile_icon.png";
import notification from "../assets/notification_icon.png";
import logo from "../assets/gearboxlogo.png";
import down from "../assets/down_icon.png";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <div className="w-[1337px] h-[54px] flex items-center justify-between px-6 border-b border-white ml-20 mt-2">
        {/* Logo or Left Section (optional) */}
        <img src={logo} alt="logo" />
        
        {/* Center/Right Menu Items */}
        <div className="flex items-center space-x-8 text-white text-xl font-light font-montserrat tracking-wide">
          <Link className="font-[Montserrat]" to="/">HOME</Link>
          <span className="font-[Montserrat]">SERVICE</span>
          <span className="font-[Montserrat]">LOGIN</span>
          
          {/* dropdown menu */}
          <div className="w-6 h-6 flex items-center justify-center relative">
            <img 
              className="mr-10 cursor-pointer" 
              src={down} 
              alt="" 
              onClick={() => setShowDropdown(!showDropdown)}
            />
            
            {showDropdown && (
              <div className="w-[132px] h-[66px] absolute top-8 right-0 bg-[#2d2d2d] rounded-[10px] border border-white/10 backdrop-blur-[0px]">
                {/* Divider Line */}
                <div className="absolute top-1/2 left-[1px] w-[131px] h-px bg-white/50"></div>
                
                {/* Seller Button */}
                <button className="absolute top-[9px] left-1/2 -translate-x-1/2 text-white text-xl font-light font-['Montserrat'] tracking-wide">
                  <Link to ="/sellerlogin">
                  Seller
                  </Link>
                  
                </button>
                
                {/* Buyer Button */}
                <button className="absolute bottom-[9px] left-1/2 -translate-x-1/2 text-white text-xl font-light font-['Montserrat'] tracking-wide">
                <Link to ="/buyerlogin">
                  Buyer
                  </Link>
                </button>
              </div>
            )}
          </div>
          
          {/* Icon 2 */}
          <img src={profile} alt="profile icon" />
          
          {/* Icon 3 */}
          <img src={notification} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;