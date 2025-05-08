import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../components/fonts.css";
import { Link } from "react-router-dom";
import sellerpic from "../assets/sellerform.jpg";
import axios from "axios";

const SellerSignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpStep, setOtpStep] = useState(false); // Flag to show OTP input field
  const [emailVerified, setEmailVerified] = useState(false); // To track if email is verified

  // Handle the initial form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(emailVerified);

    if (emailVerified == false) {
      alert("Please verify your email before submitting.");
      return;
    } else {
      console.log("correct");
    }

    // Step 1: Send account creation request to backend
    try {
      
      
      const response = await axios.post(
        "http://localhost:4000/api/seller/create",
        {
          name,
          username,
          email,
          phone,
          password,
          confirmPassword,
        }
      );
      return response.data;
      // if (response.data.msg === "account created succesfuly") {
      //   alert("Account created successfully!");
      //   // Redirect or perform further actions
      // }
    } catch (error) {
      console.log(error);
      alert("Error creating account. Please try again.");
    }
  };

  // Handle OTP submission
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    console.log("C");

    // Make the Axios request to verify the OTP
    try {
      const response = await axios.post(
        "http://localhost:4000/api/seller/verify-otp", // Adjust this to match your server's endpoint
        {
          email: email, // The email you are verifying
          otp: otp, // The OTP entered by the user
        }
      );
      console.log("D");

      if (response.data) {
        // If the OTP is verified successfully, set emailVerified to true
        setEmailVerified(true);
        alert("Email verified successfully!");
      } else {
        // Handle other messages, if any
        alert("the otp verification failed");
      }
    } catch (error) {
      console.log(error);
      alert("Error verifying OTP. Please try again.");
    }
  };
  // Handle email verification button click
  const handleVerifyEmail = async () => {
    try {
      console.log("A");

      // Send OTP to the user's email
      await axios.post("http://localhost:4000/api/seller/sent-otp", {
        name,
        username,
        email,
      });
      console.log("B");

      setOtpStep(true); // Show OTP input field
      alert("OTP sent to your email. Please enter the OTP to verify.");
    } catch (error) {
      console.log(error);
      alert("Error sending OTP. Please try again.");
    }
  };

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
            <div className="w-full md:w-[500px] bg-white/10 px-6 sm:px-10 py-8 rounded-b-[13px] md:rounded-b-none md:rounded-r-[13px] flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-semibold font-[montserrat] mb-6 tracking-wide text-center md:text-left ml-20 text-white">
                SELLER SIGN UP
              </h2>

              <form className="flex flex-col items-center md:items-start w-full">
                {/* Name */}
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

                {/* Username */}
                <div className="w-full mb-4">
                  <label className="text-white text-sm mb-1 tracking-wider font-medium font-[montserrat]">
                    USERNAME
                  </label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
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

                {/* Verify Email Button */}
                <div className="w-full mb-4">
                  <button
                    type="button"
                    onClick={handleVerifyEmail}
                    className="w-full py-2 bg-[#df1b1b] text-white font-medium rounded-md"
                  >
                    Verify Email
                  </button>
                </div>

                {/* OTP Input (Only shown after verifying email */}
                {otpStep && (
                  <div className="w-full mb-4">
                    <label className="text-white text-sm mb-1 tracking-wider font-medium font-[montserrat]">
                      Enter OTP
                    </label>
                    <input
                      onChange={(e) => setOtp(e.target.value)}
                      type="text"
                      placeholder="Enter OTP sent to your email"
                      className="bg-transparent border-b border-white py-2 text-white focus:outline-none w-full font-light"
                    />
                  </div>
                )}

                {/* OTP Submit Button */}
                {otpStep && (
                  <button
                    onClick={handleOtpSubmit} // Trigger OTP verification
                    className="w-full py-2 bg-[#df1b1b] text-white font-medium rounded-md"
                  >
                    Verify OTP
                  </button>
                )}

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
                  className="w-[130px] h-[40px] mt-4 ml-4 bg-[#df1b1b] text-white text-sm font-light font-[montserrat] tracking-wide rounded-[10px] md:ml-35"
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
