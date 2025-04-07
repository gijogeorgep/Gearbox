import React from "react";
import logout from "../assets/logout_icon.png";
import notification from "../assets/notification_icon.png";
import logo from "../assets/gearboxlogo.png";
import down from "../assets/down_icon.png";
import "./navbar.css";

const AdminNavbar = () => {
  return (
    <>
      <div className=" w-full h-[54px] flex items-center justify-between px-6 border-b border-white mt-4">
        {/* Logo or Left Section (optional) */}
        <img src={logo} alt="logo" />

        {/* Center/Right Menu Items */}
        <div className="flex items-center space-x-8 text-white text-xl font-light font-montserrat tracking-wide">
          <span className="font-[Montserrat]">HOME</span>
          <span className="font-[Montserrat]">SERVICE</span>
          <span className="font-[Montserrat]">SIGN IN</span>
          {/* Icon 1 */}
          <div className="w-6 h-6 flex items-center justify-center relative">
            <img className="mr-10" src={down} alt="" />
          </div>

          {/* Icon 2 */}
          <img src={logout} alt="profile icon" />
          {/* Icon 3 */}
          <img src={notification} alt="" />
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
