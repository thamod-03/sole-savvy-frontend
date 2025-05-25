import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { dummyShoes } from "../assets/assets";
import { AppContent } from "../context/AppContext";

const NewestArrivals = () => {
  const { shoes } = useContext(AppContent);
  const products = shoes.slice(0, 5);
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
      <h1 className="font-outfit text-2xl mb-12 font-semibold text-gray-500 lg:text-4xl">
        Newest Arrivals
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6 mb-20">
        {products.map((product) => (
          <ProductCard
            image={product.image[0]}
            name={product.name}
            category={product.category}
            offerPrice={product.offerPrice}
            price={product.price}
            key={product._id}
            id={product._id}
          />
        ))}
      </div>
    </div>
  );
};

export default NewestArrivals;
