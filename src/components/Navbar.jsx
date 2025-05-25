import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownShow, setDropdownShoe] = useState(false);
  const {
    searchQuery,
    setSearchQuery,
    isLogged,
    setIsLogged,
    showForm,
    setShowForm,
    loggedUser,
    setLoggedUser,
  } = useContext(AppContent);

  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const loginHandle = () => {
    setShowForm(true);
  };

  const logoutHandle = () => {
    setLoggedUser(null);
    setIsLogged(false);
    navigate("/");
  };

  const redirectCart = () => {
    isLogged && navigate("/cart");
    !isLogged && toast.error("Login First");
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
        <div>
          <Link to="/">
            <img className="h-9" src={assets.logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          <Link to="/">Home</Link>
          <Link to="/shoes">All Shoes</Link>
          <Link to="/contact">Contact</Link>

          <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search products"
              onChange={(e) => {
                if (e.target.value.length > 0) {
                  setSearchQuery(e.target.value);
                  navigate("/shoes");
                } else {
                  setSearchQuery("");
                  navigate("/");
                }
              }}
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns={assets.cart_icon}
            >
              <path
                d="M10.836 10.615 15 14.695"
                stroke="#7A7B7D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                clipRule="evenodd"
                d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
                stroke="#7A7B7D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="relative cursor-pointer" onClick={redirectCart}>
            <img
              src={assets.cart_icon}
              className="h-6 text-[#FF6B00] "
              alt=""
            />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-[#FF6B00] w-[18px] h-[18px] rounded-full cursor-pointer">
              {isLogged ? cart.length: 0}
            </button>
          </div>
          {!isLogged ? (
            <button
              onClick={loginHandle}
              className="cursor-pointer px-8 py-2 bg-[#FF6B00] hover:bg-[#E56000] transition text-white rounded-full"
            >
              Login
            </button>
          ) : (
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="Profile Icon"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
                <li
                  onClick={() => navigate("/my-orders")}
                  className="cursor-pointer p-1.5 pl-3 hover:bg-[#FF6B00]/10"
                >
                  My Orders
                </li>
                <li
                  onClick={logoutHandle}
                  className="cursor-pointer p-1.5 pl-3 hover:bg-[#FF6B00]/10"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="sm:hidden absolute right-20 top-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns={assets.cart_icon}
          ></svg>

          <div className="relative cursor-pointer" onClick={redirectCart}>
            <img
              src={assets.cart_icon}
              className="h-6 text-[#FF6B00] "
              alt=""
            />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-[#FF6B00] w-[18px] h-[18px] rounded-full cursor-pointer">
              {cart.length}
            </button>
          </div>
        </div>
        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="sm:hidden"
        >
          {/* Menu Icon SVG */}
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect
              x="6"
              y="13"
              width="15"
              height="1.5"
              rx=".75"
              fill="#426287"
            />
          </svg>
        </button>

        {/* Mobile Menu */}

        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <Link
            to="/"
            onClick={() => {
              setOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            to="/shoes"
            onClick={() => {
              setOpen(false);
            }}
          >
            All Shoes
          </Link>
          <Link
            to="/contact"
            onClick={() => {
              setOpen(false);
            }}
          >
            Contact
          </Link>

          {isLogged && (
            <Link
              to="/my-orders"
              onClick={() => {
                setOpen(false);
              }}
            >
              My Orders
            </Link>
          )}

          {!isLogged ? (
            <button
              onClick={() => {
                loginHandle();
                setOpen(false);
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-[#FF6B00] hover:bg-[#E56000] transition text-white rounded-full text-sm"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logoutHandle}
              className="cursor-pointer px-6 py-2 mt-2 bg-[#FF6B00] hover:bg-[#E56000] transition text-white rounded-full text-sm"
            >
              Logout
            </button>
          )}
        </div>
      </nav>

      {showForm && (
        <>
          <div
            className="fixed inset-0 backdrop-blur-sm bg-white/30 z-30"
            onClick={() => setShowForm(false)}
          ></div>
          <div
            className="fixed z-40 inset-0 top-[20%] left-[5%]"
            onClick={(e) => e.stopPropagation()}
          >
            <LoginForm />
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
