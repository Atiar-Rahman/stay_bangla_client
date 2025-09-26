import React from "react";
import RightNavbar from "./RightNavbar";
import { NavLink } from "react-router-dom";
import hotellogo from '../../assets/hotel.png'
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 border rounded-md transition-all duration-300 ${
                    isActive
                      ? "text-red-600 border-red-600"
                      : "text-gray-700 border-transparent"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-4 py-2 border rounded-md transition-all duration-300 ${
                    isActive
                      ? "text-red-600 border-red-600"
                      : "text-base-700 border-transparent"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/showbooking"
                className={({ isActive }) =>
                  `px-4 py-2 border rounded-md transition-all duration-300 ${
                    isActive
                      ? "text-red-600 border-red-600"
                      : "text-base-700 border-transparent"
                  }`
                }
              >
                Show Your Booking
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/showhotel"
                className={({ isActive }) =>
                  `px-4 py-2 border rounded-md transition-all duration-300 ${
                    isActive
                      ? "text-red-600 border-red-600"
                      : "text-base-700 border-transparent"
                  }`
                }
              >
                Booking now
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink className={'flex justify-center items-center gap-2'} to="/">
          <img className="w-10" src={hotellogo} alt="" />
          <h1 className="text-2xl font-bold">StayBangla</h1>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 border rounded-md transition-all duration-300 ${
                  isActive
                    ? "text-red-600 border-red-600"
                    : "text-base-700 border-transparent"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-4 py-2 border rounded-md transition-all duration-300 ${
                  isActive
                    ? "text-red-600 border-red-600"
                    : "text-base-700 border-transparent"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/showbooking"
              className={({ isActive }) =>
                `px-4 py-2 border rounded-md transition-all duration-300 ${
                  isActive
                    ? "text-red-600 border-red-600"
                    : "text-base-700 border-transparent"
                }`
              }
            >
              Show Your Booking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/showbooking"
              className={({ isActive }) =>
                `px-4 py-2 border rounded-md transition-all duration-300 ${
                  isActive
                    ? "text-red-600 border-red-600"
                    : "text-base-700 border-transparent"
                }`
              }
            >
              Booking Now
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <RightNavbar></RightNavbar>
      </div>
    </div>
  );
};

export default Navbar;