import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminSignUp from "./pages/AdminSignUp";
import AdminHome from "./pages/AdminHome";
import BuyerLogin from "./pages/BuyerLogin";
import Homepage from "./pages/Homepage";
import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import { sellerProtectRoute } from "./components/ProtectedRoute";

import BuyerSignUp from "./pages/BuyerSignUp";
import SellerLogin from "./pages/SellerLogin";
import SellerSignUp from "./pages/SellerSignUp";
import SellerProfile from "./pages/SellerProfile";
import SellItem from "./pages/SellItem";
import AdminDashboard from "./pages/AdminDashboard";
import AdminSeller from "./pages/AdminSeller";
import RentItem from "./pages/RentItem";
import MyList from "./pages/MyList";
import RentalRequest from "./pages/RentalRequest";

export const AdminContext = createContext();

function App() {
  const [admin, setAdmin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAdmin = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return setIsLoading(false);
      const response = await axios.get("http://localhost:4000/api/admin/home", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdmin(response.data.doc);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchAdmin();
  }, []);

  return (
    <>
      <AdminContext.Provider value={{ admin, setAdmin, isLoading }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="adminsignup" element={<AdminSignUp />} />

            <Route
              path="adminhome"
              element={
                <ProtectedRoute>
                  <AdminHome />
                </ProtectedRoute>
              }
            />
            <Route
              path="admindashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route path="/adminseller" element={<AdminSeller />} />

            <Route path="buyerlogin" element={<BuyerLogin />} />
            <Route path="buyersignup" element={<BuyerSignUp />} />
            <Route path="rentitem/:id" element={<RentItem />} />

            <Route path="sellerlogin" element={<SellerLogin />} />
            <Route path="sellersignup" element={<SellerSignUp />} />

            <Route
              path="sellerprofile"
              element={
                <sellerProtectRoute>
                  <SellerProfile />
                </sellerProtectRoute>
              }
            />

            <Route path="sellitems" element={<SellItem />} />

            <Route path="mylist" element={<MyList />} />
            <Route path="rentalrequest" element={<RentalRequest />} />
          </Routes>
        </BrowserRouter>
      </AdminContext.Provider>
    </>
  );
}

export default App;
