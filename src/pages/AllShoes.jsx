import React, { useContext, useEffect, useState } from "react";
import { AppContent } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const AllShoes = () => {
  const { shoes, setShoes, searchQuery } = useContext(AppContent);
  const [shoeList, setShoeList] = useState(shoes)

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        if (searchQuery.length > 0) {
          setShoeList(shoes.filter((shoe)=> shoe.name.toLowerCase().includes(searchQuery.toLowerCase())))
        } else {
          setShoeList(shoes)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchShoes();
  }, [searchQuery])

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
      <h1 className="font-outfit text-2xl my-12 font-semibold text-gray-500 lg:text-4xl">
        ALL SHOES
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mb-20">
        {shoeList.map((shoe) => (
          <ProductCard
            image={shoe.image[0]}
            name={shoe.name}
            category={shoe.category}
            offerPrice={shoe.offerPrice}
            price={shoe.price}
            key={shoe._id}
            id={shoe._id}
          />
        ))}
      </div>
    </div>
  );
};

export default AllShoes;
