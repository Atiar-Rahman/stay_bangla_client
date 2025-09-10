import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { MdDashboard, MdNoteAdd, MdRateReview } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import useAuthContext from "../../hook/useAuthContext";
import { BiShow } from "react-icons/bi";
import { FaHome } from "react-icons/fa";

const Sidebar = ({ open, handleOpen }) => {
  const { user } = useAuthContext();
  const [menu, setMenu] = useState([]);

  const AdminMenu = [
    { to: "/", icon: FaHome, label: "Home" },
    { to: "/dashboard", icon: MdDashboard, label: "Dashboard" },
    { to: "/dashboard/hotel/add", icon: MdNoteAdd, label: "Add Hotel" },
    { to: "/dashboard/addimages", icon: MdNoteAdd, label: "Add Hotel Image" },
    { to: "/dashboard/showhotel", icon: BiShow, label: "Show Hotel" },
    { to: "/dashboard/reviews", icon: MdRateReview, label: "Show Review" },
    { to: "/dashboard/users", icon: FaUser, label: "User" },
    {
      to: "/dashboard/showbooking",
      icon: TbBrandBooking,
      label: "Show Booking",
    },
  ];

  const userMenu = [
    { to: "/", icon: FaHome, label: "Home" },
    { to: "/dashboard", icon: MdDashboard, label: "Dashboard" },
    { to: "/dashboard/showhotel", icon: BiShow, label: "Show Hotel" },
    {
      to: "/dashboard/showbooking",
      icon: TbBrandBooking,
      label: "Show Booking",
    },
  ];

  const supervisorMenu = [
    { to: "/", icon: FaHome, label: "Home" },
    { to: "/dashboard", icon: MdDashboard, label: "Dashboard" },
    { to: "/dashboard/showhotel", icon: BiShow, label: "Show Hotel" },
    { to: "/dashboard/reviews", icon: MdRateReview, label: "Show Review" },
    { to: "/dashboard/users", icon: FaUser, label: "User" },
    {
      to: "/dashboard/showbooking",
      icon: TbBrandBooking,
      label: "Show Booking",
    },
  ];

  // ✅ Set menu only once when user changes
  useEffect(() => {
    if (!user) return; // avoid error if user is not loaded yet

    if (user.status === "is_staff") {
      setMenu(AdminMenu);
    } else if (user.status === "is_supervisor") {
      setMenu(supervisorMenu);
    } else {
      setMenu(userMenu);
    }
  }, [user]); // re-run when user changes

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
        {menu.map((item, index) => (
          <li key={index}>
            <NavLink to={item.to}>
              <item.icon className="text-3xl" />
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
