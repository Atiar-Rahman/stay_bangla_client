import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { MdDashboard } from "react-icons/md";
const Sidebar = ({ open, handleOpen }) => {
  const AdminMenu = [
    { to: "/dashboard", icon: MdDashboard, label: "Dashboard" },
    { to: "/dashboard/addhotel", icon: MdDashboard, label: "Add Hotel" },
    { to: "/dashboard/addroom", icon: MdDashboard, label: "Add Hotel Room" },
    { to: "/dashboard/addimages", icon: MdDashboard, label: "Add Hotel Image" },
    { to: "/dashboard/showhotel", icon: MdDashboard, label: "Show Hotel" },
    { to: "/dashboard/reviews", icon: MdDashboard, label: "Show Review" },
    { to: "/dashboard/users", icon: MdDashboard, label: "User" },
    { to: "/dashboard/showbooking", icon: MdDashboard, label: "Show Booking" },
  ];

  const MenuItems = AdminMenu
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-base-200 shadow-lg w-64 p-4 transform transition-transform duration-300 z-50 ${
        open ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          <Link to={"/"}>Stay Bangla</Link>
        </h2>
        <button className="lg:hidden" onClick={handleOpen}>
          <ImCross size={20} />
        </button>
      </div>

      <ul className="menu space-y-2">
        {MenuItems.map((menu, index) => (
          <li key={index}>
            <NavLink to={menu.to}>
              <menu.icon className="text-3xl" />
              {menu.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
