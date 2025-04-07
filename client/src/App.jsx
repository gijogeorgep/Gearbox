import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminSignUp from "./pages/AdminSignUp";
import AdminHome from "./pages/AdminHome";
// import BuyerLogin from "./pages/BuyerLogin";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="adminsignup" element={<AdminSignUp />} />
          <Route path="adminhome" element={<AdminHome />} />
          {/* <Route path="buyerlogin" element={<BuyerLogin />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
