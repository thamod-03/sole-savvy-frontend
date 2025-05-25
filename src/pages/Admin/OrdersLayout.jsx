import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppContent } from "../../context/AppContext";

const OrdersLayout = () => {
  const { capitalize } = useContext(AppContent);
  const [orders, setOrders] = useState([])
  const boxIcon =
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/boxIcon.svg";

  const fetchOrders = useSelector((state) => state.order);

  useEffect(() => {
    setOrders(fetchOrders)
  },[fetchOrders])

  return (
    <div className="scrollbar-hide overflow-y-scroll flex flex-col gap-2 w-full">
      <h2 className="text-lg font-medium">Orders List</h2>
      {orders.map((order, index) => (
        <div
          key={index}
          className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 w-full rounded-md border border-gray-300 text-gray-800"
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
                      className={`text-indigo-500 ${
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
              {capitalize(order.address.province)},{" "}
              {capitalize(order.address.country)},{" "}
              {capitalize(order.address.phoneNumber)}
            </p>
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

export default OrdersLayout;
