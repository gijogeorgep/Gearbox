import React from "react";
import Navbar from "../components/Navbar";
import signupPic from "../assets/signupPic.png";
import "./buyersignup.css";
const BuyerSignUp = () => {
  return (
    <>
      <div className="bg-[#2d2d2d] min-h-screen text-white overflow-hidden ">
        <Navbar />
        <div className="flex justify-center items-center min-h-screen bg-[#2d2d2d] text-white ">
          {/* Bigger Main container */}
          <div className="flex border border-white/10 rounded-[13px] overflow-hidden backdrop-blur-[0px] h-[560px] w-3xl">
            {/* Left: Image */}
            <img
              src={signupPic}
              alt="Signup Illustration"
              className="w-[280px] h-full object-cover rounded-l-[13px]"
            />

            {/* Right: Bigger Form */}
            <div className="w-[500px] h-full bg-white/10 px-10 py-8 rounded-r-[13px] flex flex-col justify-center">
              <h2 className="text-2xl font-semibold font-[montserrat] mb-6 tracking-wide">
                ADMIN SIGN UP
              </h2>

              <label className="text-white/40 text-sm mb-1 tracking-wide">
                NAME/HUB
              </label>
              <input
                type="text"
                className="bg-transparent border-b border-white w-full mb-5 py-2 text-white focus:outline-none font-thin font-[montserrat] text-xs"
                placeholder="Enter your name or hub"
              />

              <label className="text-white/40 text-sm mb-1 tracking-wide">
                EMAIL
              </label>
              <input
                type="email"
                className="bg-transparent border-b border-white w-full mb-5 py-2 text-white focus:outline-none"
                placeholder="Enter your email"
              />

              <label className="text-white/40 text-sm mb-1 tracking-wide">
                PHONE
              </label>
              <input
                type="tel"
                className="bg-transparent border-b border-white w-full mb-5 py-2 text-white focus:outline-none"
                placeholder="Enter your phone number"
              />

              <label className="text-white/40 text-sm mb-1 tracking-wide">
                PASSWORD
              </label>
              <input
                type="password"
                className="bg-transparent border-b border-white w-full mb-5 py-2 text-white focus:outline-none"
                placeholder="Enter password"
              />

              <label className="text-white/40 text-sm mb-1 tracking-wide">
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                className="bg-transparent border-b border-white w-full mb-6 py-2 text-white focus:outline-none"
                placeholder="Confirm password"
              />

              {/* Submit Button */}

              <button className="w-[130px] h-[40px] ml-20   mt-4 bg-[#df1b1b] text-white text-sm font-light font-[montserrat] tracking-wide rounded-[10px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerSignUp;
