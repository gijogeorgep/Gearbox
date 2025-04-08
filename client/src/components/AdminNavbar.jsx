import React from "react";
import logout from "../assets/logout_icon.png";
import logo from "../assets/gearboxlogo.png";
import addprofile from "../assets/addprofile_icon.png";
const AdminNavbar = () => {
  return (
    <>
      <div className=" w-full h-[54px] flex items-center justify-between px-6 border-b border-white ">
        {/* Logo or Left Section (optional) */}
        <div className="flex flex-col"> 
         <p>admin portal</p>
         <img src={logo} alt="logo" />
        </div>
       

        {/* Center/Right Menu Items */}
        <div className="flex items-center space-x-8 text-white text-xl font-light font-montserrat tracking-wide">
          <span className="font-[Montserrat]">HOME</span>
          <span className="font-[Montserrat]">DASHBOARD</span>

         

          {/* Icon 2 */}
          <img src={addprofile} alt="profile icon" />
          {/* Icon 3 */}
          <img src={logout} alt="" />
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
