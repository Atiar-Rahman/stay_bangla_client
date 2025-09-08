import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuthContext from "../../hook/useAuthContext";

const RightNavbar = () => {
  const { user, logoutUser } = useAuthContext();
  // user logout function
  const Signout = () =>{
    logoutUser()
  }
  return (
    <section>
      {!user ? (
        <div>
          <Link to='/signup'>
            <button className="btn btn-outline mr-2">Signup</button>
          </Link>
          <Link to='/login'>
            <button className="btn btn-outline mr-2">LoginIn</button>
          </Link>
        </div>
      ) : (
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <button onClick={Signout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default RightNavbar;
