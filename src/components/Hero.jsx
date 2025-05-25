import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="mx-auto px-6 md:px-16 lg:px-24 xl:px-32 py-4 flex flex-col-reverse md:flex-row items-center md:justify-between pb-16 min-h-[600px] gap-32">
      <div className="w-full md:w-1/2 max-md:mb-8 text-center md:text-left">
        <p className="flex justify-center md:justify-start items-center gap-1 text-gray-500 text-xs mb-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 0a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H4v1a1 1 0 0 1-2 0V4H1a1 1 0 0 1 0-2h1V1a1 1 0 0 1 1-1m0 10a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H4v1a1 1 0 1 1-2 0v-1H1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 1-1m7-10a1 1 0 0 1 .967.744L12.146 5.2 15.5 7.134a1 1 0 0 1 0 1.732l-3.354 1.935-1.18 4.455a1 1 0 0 1-1.933 0L7.854 10.8 4.5 8.866a1 1 0 0 1 0-1.732l3.354-1.935L9.034.744A1 1 0 0 1 10 0"
              fill="#6B7280"
            />
          </svg>
          A PLATFORM FOR MODERN SNEAKER LOVERS
        </p>
        <h1 className="font-extrabold text-4xl md:text-5xl text-gray-900 mb-4 leading-tight">
          Step into style with
          <br /> shoes that speak
          <span className="inline-block bg-[#FF6B00] text-white font-extrabold px-3 -mb-1 border-b-2 border-indigo-700">
            confidence
          </span>
        </h1>
        <p className="text-gray-600 text-sm mb-6">
          Discover curated collections of premium sneakers built for comfort,
          fashion, and individuality.
          <br />
          Walk your way — bold, smooth, and smart.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 justify-center md:justify-start">
          <Link
            to="/shoes"
            className="bg-[#FF6B00] text-white text-sm font-semibold px-5 py-2.5 rounded shadow hover:bg-[#E56000] transition"
          >
            Shop Now
          </Link>
          <Link
            to="/collection"
            className="text-sm font-normal flex items-center justify-center space-x-1 hover:underline"
            href="#"
          >
            <span>Explore Collections</span>
            <svg
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.5h13.09M8.948 1l5.143 4.5L8.948 10"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className="w-full md:w-1/2 md:mt-0 flex justify-center mt-7">
        <img
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          src={assets.main_banner_bg}
          alt="rightSideImage"
        />
      </div>
    </div>
  );
};

export default Hero;
