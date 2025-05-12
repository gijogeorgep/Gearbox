import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ReturnPolicy = () => {
  return (
    <div className="bg-[#2d2d2d] min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center px-4 py-10">
        <div className="w-full max-w-4xl bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm p-10 shadow-lg">
          <h1 className="text-4xl font-bold text-[#ffffff] text-center mb-10">
            Return & Caution Deposit Policy
          </h1>

          {/* Caution Deposit Section */}
          <div className="text-white space-y-6 mb-10">
            <h2 className="text-2xl font-semibold text-[#df1b1b]">
              Caution Deposit
            </h2>
            <p>
              To ensure the safety of our equipment, every rental requires a
              refundable caution deposit.
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                The deposit amount varies based on the item category (e.g.,
                camera, gimbal, tripod, etc.).
              </li>
              <li>
                This amount will be refunded in full once the item is returned
                in proper condition.
              </li>
            </ul>
          </div>

          {/* Return Policy Section */}
          <div className="text-white space-y-6">
            <h2 className="text-2xl font-semibold text-[#df1b1b]">
              Return Policy
            </h2>
            <p>
              We understand that timely returns help everyone. Please follow the
              guidelines below to ensure a smooth process:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                All items must be returned by the agreed-upon date and time to
                avoid late fees.
              </li>
              <li>
                Equipment should be returned in the same condition as it was
                rented.
              </li>
              <li>
                In case of damage or missing parts, the cost will be deducted
                from the caution deposit.
              </li>
              <li>
                For any issues during your rental period, contact our support
                team immediately.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ReturnPolicy;
