import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dummyShoes } from "../assets/assets";
import { AppContent } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MyOrders = () => {
  const boxIcon =
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/boxIcon.svg";

  const { shoes, isLogged, capitalize, loggedUser } = useContext(AppContent);
  const navigate = useNavigate();

  const allOrders = useSelector((state) => state.order);
  const orders = allOrders.filter((order) => order.userId === loggedUser._id);
 

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
      toast.error("Login first");
    }
  });
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mb-20 mt-10">
      <h2 className="text-lg font-medium mb-6">My Orders List</h2>
      {orders.map((order, index) => (
        <div
          key={index}
          className="flex mb-5 flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 w-full rounded-md border border-gray-300 text-gray-800"
        >
          <div className="flex gap-5">
            <img
              className="w-12 h-12 object-cover opacity-60"
              src={boxIcon}
              alt="boxIcon"
            />
            <>
              {order.order.map((item, index) => (
                <div key={index} className="flex flex-col justify-center">
                  <p className="font-medium">
                    {item.name}{" "}
                    <span
                      className={`text-[#ff6b00] ${
                        item.quantity < 2 && "hidden"
                      }`}
                    >
                      x {item.quantity}
                    </span>
                  </p>
                  <p>Color: {item.color}</p>
                  <p>Size: {item.size}</p>
                </div>
              ))}
            </>
          </div>

          <div className="text-sm">
            <p className="font-medium mb-1">
              {capitalize(order.address.firstName)}{" "}
              {capitalize(order.address.lastName)}
            </p>
            <p>
              {capitalize(order.address.street)},{" "}
              {capitalize(order.address.city)},{" "}
              {capitalize(order.address.district)},{" "}
              {capitalize(order.address.province)},{" "}
              {capitalize(order.address.country)}
            </p>
            <p>{order.address.phoneNumber}</p>
          </div>

          <p className="font-medium text-base my-auto text-black/70">
            ${order.totalPrice}
          </p>

          <div className="flex flex-col text-sm">
            <p>Method: COD</p>
            <p>Date: {order.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
