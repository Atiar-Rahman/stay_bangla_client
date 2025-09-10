import { Link, NavLink } from "react-router-dom";
import useAuthContext from "../../hook/useAuthContext";
import ThemeChange from "./ThemeChange";
const RightNavbar = () => {
  const { user, logoutUser } = useAuthContext();

  // user logout function
  const Signout = () => {
    logoutUser();
  };

  return (
    <section className="flex items-center gap-4">
      {/* Theme Dropdown */}
      <ThemeChange/>

      {/* Auth Buttons */}
      {!user ? (
        <div>
          <Link to="/signup">
            <button className="btn btn-outline mr-2">Signup</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-outline mr-2">Login</button>
          </Link>
        </div>
      ) : (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar avatar-online"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/dashboard/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <button onClick={Signout}>Logout</button>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default RightNavbar;
