import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <h1 className="font-outfit text-2xl px-6 md:px-16 lg:px-24 xl:px-32 mb-12 font-semibold text-gray-500 lg:text-4xl">
        Categories
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 mt-6 gap-6 px-6 md:px-16 lg:px-24 xl:px-32 mb-16">
        <Link to="/shoes/unisex_shoes">
          <div className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center shadow-[0_4px_8px_0_rgba(0,0,0,0.2),_0_6px_20px_0_rgba(0,0,0,0.19)]">
            <img
              src={assets.unisex_shoe}
              className="group-hover:scale-108 transition"
              alt="Unisex Shoes"
            />
            <p className="text-sm font-medium">Unisex Shoes</p>
          </div>
        </Link>
        <Link to="/shoes/men_sneakers">
          <div className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center shadow-[0_4px_8px_0_rgba(0,0,0,0.2),_0_6px_20px_0_rgba(0,0,0,0.19)]">
            <img
              src={assets.men_sneaker}
              className="group-hover:scale-108 transition"
              alt="Men Sneaker"
            />
            <p className="text-sm font-medium">Men Sneakers</p>
          </div>
        </Link>
        <Link to="/shoes/casual_shoes">
          <div className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center shadow-[0_4px_8px_0_rgba(0,0,0,0.2),_0_6px_20px_0_rgba(0,0,0,0.19)]">
            <img
              src={assets.casual_shoe}
              className="group-hover:scale-108 transition"
              alt="Casual Shoes"
            />
            <p className="text-sm font-medium">Casual Shoes</p>
          </div>
        </Link>
        <Link to="/shoes/women_footwear">
          <div className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center shadow-[0_4px_8px_0_rgba(0,0,0,0.2),_0_6px_20px_0_rgba(0,0,0,0.19)]">
            <img
              src={assets.women_footwear}
              className="group-hover:scale-108 transition"
              alt="Women Footwear"
            />
            <p className="text-sm font-medium">Women Footwear</p>
          </div>
        </Link>
        <Link to="/shoes/sport_shoes">
          <div className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center shadow-[0_4px_8px_0_rgba(0,0,0,0.2),_0_6px_20px_0_rgba(0,0,0,0.19)]">
            <img
              src={assets.sport_shoe}
              className="group-hover:scale-108 transition"
              alt="Sport Shoe"
            />
            <p className="text-sm font-medium">Sport Shoe</p>
          </div>
        </Link>
        <Link to="/shoes/kids_collection">
          <div className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center shadow-[0_4px_8px_0_rgba(0,0,0,0.2),_0_6px_20px_0_rgba(0,0,0,0.19)]">
            <img
              src={assets.kids_collection}
              className="group-hover:scale-108 transition"
            />
            <p className="text-sm font-medium">Kids Collection</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Categories;
