import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContent } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { dummyShoes } from "../assets/assets";
import {
  removeAllFromCart,
  removeFromCart,
  updateCart,
} from "../features/cart/cartSlice";
import AddAddressForm from "../components/AddAddressForm";
import { placeOrder } from "../features/order/orderSlice";

const Cart = () => {
  const {
    shoes,
    isLogged,
    loggedUser,
    setLoggedUser,
    capitalize,
    showAddressForm,
    setShowAddressForm,
  } = useContext(AppContent);
  const navigate = useNavigate();
  const [showAddress, setShowAddress] = useState(false);
  const [addresses, setAddresses] = useState(
    loggedUser ? loggedUser.addresses : null
  );
  const [deliveryAddress, setDeliveryAddress] = useState(
    addresses ? addresses[0] : "No address found"
  );

  const cartItems = loggedUser?.cartItems;

  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order);

  const totalPrice = cartItems?.reduce((acc, product) => {
    const matchedProduct = shoes.find((shoe) => shoe._id === product.itemId);
    if (!matchedProduct) return acc;
    const subtotal =
      Number(matchedProduct.offerPrice) * Number(product.quantity);
    return acc + subtotal;
  }, 0);

  const totalAmount = (totalPrice + totalPrice * 0.02).toFixed(2);

  const handleQuantityChange = (itemId, color, size, newQuantity) => {
    dispatch(updateCart({ itemId, color, size, quantity: newQuantity }));
    setLoggedUser((prev) => ({
      ...prev,
      cartItems: prev.cartItems.map((item) =>
        item.itemId === itemId && item.color === color && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      ),
    }));
  };

  const removeItem = (itemId, color, size) => {
    dispatch(removeFromCart({ itemId, color, size }));
    setLoggedUser((prev) => ({
      ...prev,
      cartItems: prev.cartItems.filter(
        (item) =>
          item.itemId !== itemId || item.color !== color || item.size !== size
      ),
    }));
  };

  const placeOrderHandle = (userId, cartItems, address, totalPrice, date) => {
    dispatch(placeOrder({ userId, cartItems, address, totalPrice, date }));
    toast.success("Your order has placed successfully");
    dispatch(removeAllFromCart());
    setLoggedUser((prev) => ({ ...prev, cartItems: [] }));
    navigate("/my-orders");
  };
  console.log(orders);
  useEffect(() => {
    if (!isLogged) {
      navigate("/");
      toast.error("Login First");
    }
  }, [isLogged]);

  console.log(loggedUser);
  console.log(cartItems);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mb-20 mt-10">
      {showAddressForm && (
        <>
          <div
            className="fixed inset-0 backdrop-blur-sm bg-white/30 z-30"
            onClick={() => setShowAddressForm(false)}
          ></div>
          <div
            className="fixed z-40 inset-0 top-[5%] left-[25%] w-1/2 bg-white shadow-2xl rounded-lg h-[auto] sm:h-[520px] overflow-y-auto scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            <AddAddressForm />
          </div>
        </>
      )}
      {cartItems?.length > 0 ? (
        <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto">
          <div className="flex-1 max-w-4xl">
            <h1 className="text-3xl font-medium mb-6">
              Shopping Cart{" "}
              <span className="text-sm text-[#FF6B00]">
                {cartItems?.length} Items
              </span>
            </h1>

            <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
              <p className="text-left">Product Details</p>
              <p className="text-center">Subtotal</p>
              <p className="text-center">Action</p>
            </div>

            {cartItems?.map((product, index) => (
              <div
                key={index}
                className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3"
              >
                <div className="flex items-center md:gap-6 gap-3">
                  <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded">
                    <img
                      className="max-w-full h-full object-cover"
                      src={`../../src/assets/${
                        shoes.find((shoe, i) => shoe._id === product.itemId)
                          .image[0]
                      }`}
                      alt={
                        shoes.find((shoe, i) => shoe._id === product.itemId)
                          .name
                      }
                    />
                  </div>
                  <div>
                    <p className="hidden md:block font-semibold">
                      {
                        shoes.find((shoe, i) => shoe._id === product.itemId)
                          .name
                      }
                    </p>
                    <div className="font-normal text-gray-500/70">
                      <p>
                        Size: <span>{product.size || "N/A"}</span>
                      </p>
                      <div className="flex items-center">
                        <p>Qty:</p>
                        <select
                          className="outline-none ml-2"
                          value={product.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              product.itemId,
                              product.color,
                              product.size,
                              Number(e.target.value)
                            )
                          }
                        >
                          {Array(4)
                            .fill("")
                            .map((_, index) => (
                              <option key={index} value={index + 1}>
                                {index + 1}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center">
                  ${" "}
                  {Number(
                    shoes.find((shoe, i) => shoe._id === product.itemId)
                      .offerPrice
                  ) * Number(product.quantity)}
                </p>
                <button
                  className="cursor-pointer mx-auto"
                  onClick={() =>
                    removeItem(product.itemId, product.color, product.size)
                  }
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0"
                      stroke="#FF532E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            ))}

            <button
              onClick={() => navigate("/shoes")}
              className="group cursor-pointer flex items-center mt-8 gap-2 text-[#FF6B00] font-medium"
            >
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1"
                  stroke="#615fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Continue Shopping
            </button>
          </div>

          <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
            <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
            <hr className="border-gray-300 my-5" />

            <div className="mb-6">
              <p className="text-sm font-medium uppercase">Delivery Address</p>
              <div className="relative flex justify-between items-start mt-2">
                <p className="text-gray-500">{`${capitalize(
                  deliveryAddress.street
                )}, ${capitalize(deliveryAddress.city)}, ${capitalize(
                  deliveryAddress.district
                )}, ${capitalize(deliveryAddress.province)}, ${capitalize(
                  deliveryAddress.country
                )}`}</p>
                <button
                  onClick={() => setShowAddress(!showAddress)}
                  className="text-[#FF6B00] hover:underline cursor-pointer"
                >
                  Change
                </button>
                {showAddress && (
                  <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                    {addresses &&
                      addresses.map((address, i) => (
                        <p
                          key={i}
                          onClick={() => {
                            setShowAddress(false);
                            setDeliveryAddress(address);
                          }}
                          className="text-gray-500 p-2 hover:bg-gray-100"
                        >
                          {`${capitalize(address.street)}, ${capitalize(
                            address.city
                          )}, ${capitalize(address.district)}, ${capitalize(
                            address.province
                          )}, ${capitalize(address.country)}`}
                        </p>
                      ))}

                    <p
                      onClick={() => {
                        setShowAddress(false);
                        setShowAddressForm(true);
                      }}
                      className="text-[#FF6B00] text-center cursor-pointer p-2 hover:bg-[#FF6B00]/10"
                    >
                      Add address
                    </p>
                  </div>
                )}
              </div>

              <p className="text-sm font-medium uppercase mt-6">
                Payment Method
              </p>

              <select className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
                <option value="COD">Cash On Delivery</option>
              </select>
            </div>

            <hr className="border-gray-300" />

            <div className="text-gray-500 mt-4 space-y-2">
              <p className="flex justify-between">
                <span>Price</span>

                <span>${totalPrice.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span>Shipping Fee</span>
                <span className="text-green-600">Free</span>
              </p>
              <p className="flex justify-between">
                <span>Tax (2%)</span>
                <span>${(totalPrice * 0.02).toFixed(2)}</span>
              </p>
              <p className="flex justify-between text-lg font-medium mt-3">
                <span>Total Amount:</span>
                <span>${totalAmount}</span>
              </p>
            </div>

            <button
              onClick={() =>
                placeOrderHandle(
                  loggedUser._id,
                  cartItems,
                  deliveryAddress,
                  totalAmount,
                  new Date().toLocaleString("en-GB", { timeZone: "UTC" })
                )
              }
              className="w-full py-3 mt-6 cursor-pointer bg-[#FF6B00] text-white font-medium hover:bg-[#E56000] transition"
            >
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <div className="relative left-[50%] tranform- translate-x-[-10%]">
          <div className="text-xl text-gray-600 font-outfit">
            Your cart it empty
          </div>
          <div>
            <button
              onClick={() => navigate("/shoes")}
              className="group flex items-center cursor-pointer mt-8 gap-2 text-[#FF6B00] font-medium"
            >
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1"
                  stroke="#ff6b00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
