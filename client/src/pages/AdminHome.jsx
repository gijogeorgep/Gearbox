import React from "react";
import Navbar from "../components/Navbar";
import AdminNavbar from "../components/AdminNavbar";

const AdminHome = () => {
  return (
    <>
      <div className="bg-[#0C0A0B] min-h-screen flex flex-col items-center justify-center text-6xl font-sans text-white">
        <div className="flex flex-col items-center">
          <div className="flex gap-4 font-bold">
            <p className="hover:text-[#df1b1b] tracking-wider">WELCOME</p>
            <p className="hover:text-[#df1b1b] tracking-wider">TO</p>
          </div>
          <div className="flex gap-4 font-bold">
            <p className="hover:text-[#df1b1b] tracking-wider">ADMIN</p>
            <p className="hover:text-[#df1b1b] tracking-wider">HOME</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
