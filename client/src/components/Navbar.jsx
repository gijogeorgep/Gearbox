import React from "react";
import profile from "../assets/profile_icon.png";
import notification from "../assets/notification_icon.png";
import logo from "../assets/gearboxlogo.png";
import down from "../assets/down_icon.png";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className=" w-[1337px] h-[54px] flex items-center justify-between px-6 border-b border-white ml-20 mt-2   ">
        {/* Logo or Left Section (optional) */}
        <img src={logo} alt="logo" />

        {/* Center/Right Menu Items */}
        <div className="flex items-center space-x-8 text-white text-xl font-light font-montserrat tracking-wide">
          <Link className="font-[Montserrat]" to ="/">HOME</Link>
          {/* <span className="font-[Montserrat]">HOME</span> */}
          <span className="font-[Montserrat]">SERVICE</span>
          <span className="font-[Montserrat]">SIGN IN</span>
          {/* Icon 1 */}
          <div className="w-6 h-6 flex items-center justify-center relative">
            <img className="mr-10" src={down} alt="" />
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
