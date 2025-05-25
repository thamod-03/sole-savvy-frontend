import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import NewestArrivals from "../components/NewestArrivals";
import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter";

export const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <NewestArrivals />
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mb-20">
        <img
          src={assets.banner_img_md}
          alt="Banner Image"
          className="rounded-xl w-full hidden md:block"
        />
        <img
          src={assets.banner_img_sm}
          alt="Banner Image"
          className="rounded-xl h-1/2 md:hidden block"
        />
      </div>
      <Newsletter />
    </>
  );
};

export default Home;
