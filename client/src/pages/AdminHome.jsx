import React, { useContext } from "react";
import AdminNavbar from "../components/AdminNavbar";
import { AdminContext } from "../App";
import gearbox from "../assets/gearbox.png";

const AdminHome = () => {
  const { admin } = useContext(AdminContext);
  console.log(admin);

  return (
    <div className="bg-[#0C0A0B] min-h-screen text-white overflow-hidden">
      {/* Navbar at the top */}
      <AdminNavbar />

      {/* Main Content Centered including Image and Text */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-72px)]">
        <img className="w-70 mb-6" src={gearbox} alt="Gearbox" />

        <div className="flex flex-col items-center text-6xl font-sans font-bold gap-4 text-center">
          <div className="flex gap-4">
            <p className="hover:text-[#df1b1b] tracking-wider">WELCOME</p>
            <p className="hover:text-[#df1b1b] tracking-wider">TO</p>
          </div>
          <div className="flex gap-4">
            <p className="hover:text-[#df1b1b] tracking-wider">ADMIN</p>
            <p className="hover:text-[#df1b1b] tracking-wider">HOME</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
