import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import OrdersLayout from "../pages/Admin/OrdersLayout";

const AdminMenu = () => {
  const { setIsAdminLogged } = useContext(AppContent);
  const navigate = useNavigate();
  const [clickIndex, setClickIndex] = useState(0);

  const boxicon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24"
      height="24"
      viewBox="0 0 128 128"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M63,14.2l-48,17c-1.2,0.4-2,1.6-2,2.8v60c0,1.3,0.8,2.4,2,2.8l48,17c0.3,0.1,0.7,0.2,1,0.2c0.2,0,0.3,0,0.5,0 c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.3-0.1c0,0,0,0,0,0l48-17c1.2-0.4,2-1.6,2-2.8V34c0,0,0-0.1,0-0.1c0-0.1,0-0.3,0-0.4 c0,0,0-0.1,0-0.1c-0.2-1-0.9-1.9-1.9-2.2l-24-8.5c0,0-0.1,0-0.1,0c-0.6-0.2-1.4-0.3-2.1,0L40,39.2c-1.2,0.4-2,1.6-2,2.8v11 c0,1.7,1.3,3,3,3s3-1.3,3-3v-8.9l43.8-15.5L103,34L63,48.2c-1.2,0.4-2,1.5-2,2.8c0,0,0,0,0,0.1v55.8L19,91.9V36.1l46-16.3 c1.6-0.6,2.4-2.3,1.8-3.8C66.3,14.4,64.6,13.6,63,14.2z M67,53.1l42-14.9v53.6l-42,14.9V53.1z"
      ></path>
    </svg>
  );

  const overviewicon = (
    <svg
      className="w-6 h-6"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M7.111 20A3.111 3.111 0 0 1 4 16.889v-12C4 4.398 4.398 4 4.889 4h4.444a.89.89 0 0 1 .89.889v12A3.111 3.111 0 0 1 7.11 20Zm0 0h12a.889.889 0 0 0 .889-.889v-4.444a.889.889 0 0 0-.889-.89h-4.389a.889.889 0 0 0-.62.253l-3.767 3.665a.933.933 0 0 0-.146.185c-.868 1.433-1.581 1.858-3.078 2.12Zm0-3.556h.009m7.933-10.927 3.143 3.143a.889.889 0 0 1 0 1.257l-7.974 7.974v-8.8l3.574-3.574a.889.889 0 0 1 1.257 0Z"
      />
    </svg>
  );

  const plusicon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24"
      height="24"
      viewBox="0 0 50 50"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"
      ></path>
    </svg>
  );

  const sidebarLinks = [
    { name: "Orders", path: "/admin", icon: boxicon },
    { name: "Shoes", path: "/admin/shoes", icon: overviewicon },
    { name: "Add a Shoe", path: "/admin/add-shoe", icon: plusicon },
  ];

  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
        <Link to="/">
          <img className="h-9" src={assets.logo} alt="Logo" />
        </Link>
        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button
            onClick={() => {
              setIsAdminLogged(false);
              navigate("/");
            }}
            className="border rounded-full text-sm px-4 py-1 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="sm:w-[24%] w-[64px] border-r h-[95vh] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
          {sidebarLinks.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              onClick={() => setClickIndex(index)}
              className={`flex items-center py-3 px-4 gap-3
                            ${
                              index === clickIndex
                                ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-[#ff6b00] text-[#ff6b00]"
                                : "hover:bg-gray-100/90 border-white text-gray-700"
                            }`}
            >
              {item.icon}
              <p className="md:block hidden text-center">{item.name}</p>
            </Link>
          ))}
        </div>
        <div className="w-[90%] mt-6 mr-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
