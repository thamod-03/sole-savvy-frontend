import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContent } from '../context/AppContext';
import ProductCard from '../components/ProductCard';

const ProductCategory = () => {
    let { category } = useParams()
    const { shoes } = useContext(AppContent);

    category = category.split("_").join(" ")

    const filteredShoes = shoes.filter((shoe)=> shoe.category.toLowerCase() === category)

    return (
      <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        <h1 className="font-outfit text-2xl my-12 font-semibold text-gray-500 lg:text-4xl">
          {category.toUpperCase()}
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mb-20">
          {filteredShoes.map((shoe) => (
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
}

export default ProductCategory