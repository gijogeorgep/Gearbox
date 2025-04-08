import React, { useContext } from "react";
import AdminNavbar from "../components/AdminNavbar";
import { AdminContext } from "../App";
import { Link } from "react-router-dom";
const AdminHome = () => {
  const { admin } = useContext(AdminContext);
  console.log(admin);

  return (
    <div className="bg-[#0C0A0B] min-h-screen text-white">
      {/* Navbar at the top */}
      <AdminNavbar />

      {/* Main Content Centered */}
      <div className="flex flex-col items-center justify-center text-6xl font-sans min-h-[calc(100vh-72px)]">
        <div className="flex flex-col items-center">
          <div className="flex gap-4 font-bold">
            <Link className="hover:text-[#df1b1b] tracking-wider" to="/">
              Home
            </Link>
            <p className="hover:text-[#df1b1b] tracking-wider">WELCOME</p>
            <p className="hover:text-[#df1b1b] tracking-wider">TO</p>
          </div>
          <div className="flex gap-4 font-bold">
            <p className="hover:text-[#df1b1b] tracking-wider">ADMIN</p>
            <p className="hover:text-[#df1b1b] tracking-wider">HOME</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
