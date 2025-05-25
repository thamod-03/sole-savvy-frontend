import React, { useContext, useEffect, useState } from "react";
import { AppContent } from "../context/AppContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import toast from "react-hot-toast";

const ProductPage = () => {
  const { shoes, isLogged, setLoggedUser } = useContext(AppContent);
  const { category, id } = useParams();

  const product = shoes.find((shoe) => shoe._id === id);

  const [thumbnail, setThumbnail] = useState(product?.image?.[0]);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedVariation, setSelectedVariation] = useState({});
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);


  const handleAdd = (itemId,name, color, size, quantity) => {
    if (!isLogged) {
      toast.error("Login First");
    } else if (!color) {
      toast.error("Select a color");
    } else if (color && !size) {
      toast.error("Select a size");
    } else if (color && size && isLogged) {
      dispatch(addToCart({ itemId,name, color, size, quantity }));
      setLoggedUser((prevUser) => ({
        ...prevUser,
        cartItems: cart.map((item) => ({ ...item })),
      }));
      toast.success("Item added to the cart");
    }
  };

  useEffect(() => {
    if (isLogged) {
      setLoggedUser((prev) => ({
        ...prev,
        cartItems: cart.map((item) => ({ ...item })),
      }));
    }
  }, [cart]);

  return (
    product && (
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mb-20 mt-10">
        <p>
          <Link to="/">Home</Link> /<Link to={`/shoes`}> Shoes</Link> /
          <Link to={`/shoes/${category}`}> {product.category}</Link> /
          <span className="text-[#FF6B00]"> {product.name}</span>
        </p>

        <div className="flex flex-col md:flex-row gap-16 mt-4">
          <div className="flex gap-3 max-h-[400px]">
            <div className="flex flex-col gap-3 overflow-y-auto pr-1 max-h-[400px] scrollbar-hide">
              {product.image.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setThumbnail(image)}
                  className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer flex-shrink-0"
                >
                  <img
                    src={`../../src/assets/${image}`}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
            <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden max-h-100 md:max-h-75 lg:max-h-400">
              <img
                src={`../../src/assets/${thumbnail}`}
                alt="Selected product"
              />
            </div>
          </div>

          <div className="text-sm w-full md:w-1/2">
            <h1 className="text-3xl font-medium font-roboto">{product.name}</h1>

            <div className="flex items-center gap-0.5 mt-1">
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
              <p className="text-base ml-2">(4)</p>
            </div>

            <div className="mt-6">
              <p className="text-gray-500/70 line-through">
                MRP: ${product.price}
              </p>
              <p className="text-2xl font-medium">MRP: ${product.offerPrice}</p>
              <span className="text-gray-500/70">(inclusive of all taxes)</span>
            </div>

            <p className="text-base font-medium mt-6">About Product</p>
            <ul className="list-disc ml-4 text-gray-500/70">
              {product.description.map((desc, index) => (
                <li key={index} className="font-outfit">
                  {desc}
                </li>
              ))}
            </ul>

            <p className="mt-6 font-semibold">Colors</p>
            <div className="flex gap-3 mt-2">
              {product.variation.map((variation, index) => (
                <div className="flex gap-2" key={index}>
                  <label
                    htmlFor={variation.color}
                    className={`border-2 p-2 cursor-pointer flex gap-2 rounded-md ${
                      selectedColor === variation.color
                        ? "border-orange-500 shadow-md"
                        : "border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      value={variation.color}
                      id={variation.color}
                      name="color"
                      className="cursor-pointer hidden"
                      onChange={() => {
                        setSelectedColor(variation.color);
                        const matchedVariation = product.variation.find(
                          (v) => v.color === variation.color
                        );
                        setSelectedVariation(matchedVariation);
                      }}
                    />
                    {variation.color.toUpperCase()}
                  </label>
                </div>
              ))}
            </div>
            {selectedVariation && selectedVariation.sizes && (
              <>
                <p className="mt-3 font-semibold">Sizes</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  {Object.entries(selectedVariation.sizes)
                    .sort((a, b) => parseFloat(a[0]) - parseFloat(b[0]))
                    .map(([size, available]) => (
                      <label
                        key={size}
                        htmlFor={`size-${size}`}
                        className={`border-2 p-2 flex rounded-md w-10 h-10 items-center justify-center cursor-pointer
            ${
              selectedSize === size
                ? "border-orange-500 shadow-md"
                : "border-gray-300"
            }
            ${!available ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        <input
                          type="radio"
                          name="size"
                          id={`size-${size}`}
                          value={size}
                          className="hidden"
                          disabled={!available}
                          onChange={() => setSelectedSize(size)}
                        />
                        {size}
                      </label>
                    ))}
                </div>
              </>
            )}

            {selectedVariation && selectedSize && (
              <div>
                <p className="mt-3 font-semibold">Quantity</p>
                <select
                  name="quantity"
                  id="quantity"
                  className="p-2 border-2 border-gray-400 rounded-md mt-2"
                  onChange={(e) => setSelectedQuantity(e.target.value)}
                >
                  {[...Array(4)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="flex items-center mt-10 gap-4 text-base">
              <button
                onClick={() =>
                  handleAdd(
                    product._id,
                    product.name,
                    selectedColor,
                    selectedSize,
                    selectedQuantity
                  )
                }
                className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  handleAdd(
                    product._id,
                    product.name,
                    selectedColor,
                    selectedSize,
                    selectedQuantity
                  ); navigate("/cart")
                }
                }
                className="w-full py-3.5 cursor-pointer font-medium bg-[#FF6B00] text-white hover:bg-[#E56000] transition"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
