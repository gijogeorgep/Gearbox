import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mt-28 w-full bg-white/10  backdrop-blur-sm px-6 py-10 text-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h2 className="text-xl font-semibold mb-2">About Us</h2>
            <p className="text-sm">
              Gearbox is a platform that connects creators with the best camera
              equipment for rent. Whether you're a filmmaker, photographer, or
              traveler, we provide affordable and high-quality gear to help you
              bring your creative vision to life. Rent, list, and earn with us
              today!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
            <ul className="text-sm space-y-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">How It Works</a>
              </li>
              <li>
                <a href="#">Browse Equipment</a>
              </li>
              <li>
                <a href="#">Become a Seller</a>
              </li>
              <li>
                <a href="#">Community Guidelines</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Services & Social */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Services</h2>
            <ul className="text-sm space-y-1 mb-4">
              <li>
                <a href="#">Rent Equipment</a>
              </li>
              <li>
                <a href="#">List Your Gear</a>
              </li>
              <li>
                <a href="#">Admin Support</a>
              </li>
              <li>
                <a href="#">Safe Transactions</a>
              </li>
              <li>
                <a href="#">Customer Support</a>
              </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
            <ul className="text-sm space-y-1">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">YouTube</a>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p className="text-sm mb-2">
              Have questions or need support? We're here to help!
            </p>
            <p className="text-sm">Email: support@gearbox.com</p>
            <p className="text-sm">Phone: +1 (800) 123-4567</p>
            <p className="text-sm mb-4">
              Address: Gearbox HQ, [Insert Address Here]
            </p>

            <h2 className="text-xl font-semibold mb-2">Legal</h2>
            <ul className="text-sm space-y-1">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-xs border-t border-white/20 pt-4">
          <p>© 2025 Gearbox. All rights reserved.</p>
          <p>
            Gearbox is a registered trademark. All equipment rental transactions
            are subject to the terms and conditions of use.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
