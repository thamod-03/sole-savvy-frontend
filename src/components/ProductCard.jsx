import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ image, name, category, offerPrice, price, id }) => {
  const linkCategory = category.toLowerCase().split(" ").join("_")
  const navigate = useNavigate();

  return (
    <div
      className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white md:min-w-48 md:max-w-48 w-full sm:min-w-32 sm:max-w-32"
      key={id}
    >
      <Link to={`/shoes/${linkCategory}/${id}`}>
        <div className="group cursor-pointer flex items-center justify-center px-2">
          <img
            className="group-hover:scale-105 transition max-w-26 md:max-w-36"
            src={`../src/assets/${image}`}
            alt={name}
          />
        </div>
      </Link>
      <div className="text-gray-500/60 text-sm">
        <p>{category}</p>
        <p className="text-gray-700 font-medium text-lg truncate w-full">
          {name}
        </p>
        <div className="flex items-center gap-0.5">
          {Array(5)
            .fill("")
            .map((_, i) =>
              4 > i ? (
                <svg
                  key={i}
                  width="14"
                  height="13"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z"
                    fill="#FF6B00"
                  />
                </svg>
              ) : (
                <svg
                  key={i}
                  width="14"
                  height="13"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z"
                    fill="#FF6B00"
                    fillOpacity="0.35"
                  />
                </svg>
              )
            )}
          <p>(4)</p>
        </div>
        <div className="flex items-end justify-between mt-3">
          <p className="md:text-xl text-base font-medium text-[#FF6B00]">
            ${offerPrice}{" "}
            <span className="text-gray-500/60 md:text-sm text-xs line-through">
              ${price}
            </span>
          </p>
          <div className="text-[#FF6B00]">
            <button onClick={()=> navigate(`/shoes/${category}/${id}`)} className="flex items-center justify-center gap-1 bg-[#ffd2b2] border border-[#ffb57f] md:w-[80px] w-[64px] h-[34px] rounded text-[#FF6B00] font-medium cursor-pointer">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
