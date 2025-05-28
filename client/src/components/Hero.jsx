import React, { useEffect } from "react";
import heroimg from "../assets/hero_img.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./animation.css";
const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animate only once
    });
  }, []);

  return (
    <div
      className="relative w-full h-[600px] md:h-[700px] lg:h-[563px]"
      data-aos="fade-down"
      data-aos-delay="100"
    >
      {/* Background Image */}
      <img
        className="absolute inset-0 w-[1800px] h-full object-cover opacity-20"
        src={heroimg}
        alt="Hero background"
      />

      {/* Text Content */}
      <div
        className="absolute top-16 md:top-24 px-6 md:px-12 lg:px-56 text-white space-y-8"
        data-aos="fade-down"
      >
        <div
          className="flex flex-col gap-2 justify-center items-center"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <p className="text-xl md:text-2xl lg:text-[35px] font-light font-[montserrat] tracking-wide max-w-4xl">
            Rent premium camera equipment, accessories, and tools to bring your
            creative vision to life
          </p>

          <button className="bg-[#df1b1b] hover:bg-red-700 text-white text-base font-light font-[montserrat] px-6 py-2 rounded transition duration-300">
            RENT NOW
          </button>
        </div>

        <div
          className="flex flex-col gap-3 justify-center items-center"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <p className="text-xl md:text-2xl lg:text-[35px] font-light font-[montserrat] tracking-wide max-w-4xl">
            Monetize your camera gear by renting it out to filmmakers and
            creators while keeping full control over your equipment
          </p>

          <button className="bg-[#df1b1b] hover:bg-red-700 text-white text-base font-light font-[montserrat] px-6 py-2 rounded transition duration-300">
            List Your Gear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
