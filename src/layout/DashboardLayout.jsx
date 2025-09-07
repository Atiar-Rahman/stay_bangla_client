import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar open={open} handleOpen={handleOpen} />

      {/* Main Content */}
      <div className="flex-1 p-6 lg:ml-64">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <button
            className="btn btn-primary lg:hidden flex items-center gap-2"
            onClick={handleOpen}
          >
            <MdMenu size={22} /> Menu
          </button>
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        {/* Nested Routes will render here */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
