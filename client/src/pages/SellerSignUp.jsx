import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../components/fonts.css";
import { Link } from "react-router-dom";
import sellerpic from "../assets/sellerform.jpg";
import axios from "axios";

const SellerSignUp = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/seller/create",
        { name, username, email, phone, password, confirmPassword }
      );
      console.log(response.data);
      alert(response.data.msg);
    } catch (error) {
      console.log(error);
    }
  };
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <div className="bg-[#2d2d2d] min-h-screen text-white overflow-hidden">
        <Navbar />
        <div className="flex justify-center items-center min-h-screen px-4 mt-10">
          {/* Main Container */}
          <div className="flex flex-col md:flex-row border border-white/10 rounded-[13px] overflow-hidden backdrop-blur-[0px] max-w-[900px] h-auto md:h-[650px]">
            {/* Left: Image */}
            <img
              src={sellerpic}
              alt="Signup Illustration"
              className="w-full md:w-[300px] h-[250px] md:h-full object-cover rounded-t-[13px] md:rounded-t-none md:rounded-l-[13px]"
            />

            {/* Right: Form */}
            <div className="w-full md:w-[500px] bg-white/10 px-6 sm:px-10 py-8 rounded-b-[13px] md:rounded-b-none md:rounded-r-[13px] flex flex-col justify-center ">
              <h2 className="text-xl sm:text-2xl font-semibold font-[montserrat] mb-6 tracking-wide text-center md:text-left ml-20 text-white">
                SELLER SIGN UP
              </h2>

              <form className="flex flex-col items-center md:items-start w-full">
                {/* Name/Hub */}
                <div className="w-full mb-4">
                  <label className="text-white text-sm mb-1 tracking-wider font-medium font-[montserrat]">
                    NAME/HUB
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter your name or hub"
                    className="bg-transparent border-b border-white py-2 text-white focus:outline-none w-full font-thin"
                  />
                </div>

                <div className="w-full mb-4">
                  <label className="text-white text-sm mb-1 tracking-wider font-medium font-[montserrat]">
                    USERNAME
                  </label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="name"
                    placeholder="Enter your Username"
                    className="bg-transparent border-b border-white py-2 text-white focus:outline-none w-full font-light"
                  />
                </div>

                {/* Email */}
                <div className="w-full mb-4">
                  <label className="text-white text-sm mb-1 tracking-wider font-medium font-[montserrat]">
                    EMAIL
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent border-b border-white py-2 text-white focus:outline-none w-full font-light"
                  />
                </div>

                {/* Phone */}
                <div className="w-full mb-4">
                  <label className="text-white text-sm mb-1 tracking-wider font-medium font-[montserrat]">
                    PHONE
                  </label>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    placeholder="Enter your phone number"
                    className="bg-transparent border-b border-white py-2 text-white focus:outline-none w-full font-thin"
                  />
                </div>

                {/* Password */}
                <div className="w-full mb-4">
                  <label className="text-white text-sm mb-1 tracking-wider font-medium font-[montserrat]">
                    PASSWORD
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter password"
                    className="bg-transparent border-b border-white py-2 text-white focus:outline-none w-full font-light"
                  />
                </div>

                {/* Confirm Password */}
                <div className="w-full mb-4">
                  <label className="text-white text-sm mb-1 tracking-wider font-medium font-[montserrat]">
                    CONFIRM PASSWORD
                  </label>
                  <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    placeholder="Confirm password"
                    className="bg-transparent border-b border-white py-2 text-white focus:outline-none w-full font-thin"
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-[130px] h-[40px] mt-4 ml-4 bg-[#df1b1b] text-white text-sm font-light font-[montserrat] tracking-wide rounded-[10px] md:ml-35 "
                >
                  Submit
                </button>
              </form>

              {/* Login Link */}
              <div className="mt-6 text-sm font-light font-[montserrat] text-center w-full">
                <p className="text-white mb-1">Already have an account?</p>
                <Link
                  to="/sellerlogin"
                  className="text-[#df1b1b] hover:underline font-medium"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerSignUp;
