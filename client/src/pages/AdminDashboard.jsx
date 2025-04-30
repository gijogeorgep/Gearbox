import React, { useEffect, useState } from "react";
import "../components/fonts.css";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const AdminDashboard = () => {
  const [sellercount, setSellercount] = useState(0);
  const [buyercount, setBuyercount] = useState(0);
  const [adminName, setAdminName] = useState("");

  const userData = [
    { name: "Sellers", count: sellercount },
    { name: "Buyers", count: buyercount },
  ];

  const fetchSellercount = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/seller/count");
      setSellercount(res.data.count);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBuyerCount = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/buyer/count");
      setBuyercount(res.data.count);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSellercount();
    fetchBuyerCount();
  }, []);

  useEffect(() => {
    const name = localStorage.getItem("adminName");
    setAdminName(name);
  }, []);

  return (
    <div className="min-h-screen bg-[#2d2d2d] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white/10 backdrop-blur-sm border-r border-white/10 rounded-tr-2xl rounded-br-2xl p-6 font-[montserrat]">
        <span className="text-white font-extrabold uppercase tracking-wider text-3xl">
          {adminName}
        </span>
        <nav className="space-y-6">
          <div className="bg-white text-black rounded-lg py-2 px-4 text-xl font-semibold tracking-widest">
            DASHBOARD
          </div>
          <div className="bg-white/10 border border-white/10 rounded-lg py-2 px-6 text-white text-xl tracking-widest">
            BUYERS
          </div>
          <div className="bg-white/10 border border-white/10 rounded-lg py-2 px-6 text-white text-xl tracking-widest">
            SELLERS
          </div>
          <div className="bg-white/10 border border-white/10 rounded-lg py-2 px-6 text-white text-xl tracking-widest">
            SETTINGS
          </div>
        </nav>
        <div className="flex mt-36">
          <Link to="/adminhome">
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/ios-filled/50/df1b1b/home.png"
              alt="home"
            />
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 text-white">
        <div className="flex gap-4">
          <div className="bg-white/10 border border-white/10 backdrop-blur-sm rounded-xl p-6 w-64">
            <h2 className="text-lg font-semibold tracking-wider mb-2">
              TOTAL USERS
            </h2>
            <p className="text-5xl font-bold tracking-widest">
              {sellercount + buyercount}
            </p>
          </div>
        </div>
      </main>

      <div className="mt-10 bg-white/10 border border-white/10 backdrop-blur-sm rounded-xl p-6 w-90 h-90 max-w-lg mr-72">
        <h2 className="text-lg font-semibold tracking-wider mb-4 text-white">
          User Comparison
        </h2>
        <ResponsiveContainer width="80%" height={200}>
          <BarChart data={userData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;
