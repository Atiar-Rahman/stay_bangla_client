import React, { useEffect } from "react";
import { themeChange } from "theme-change";

const ThemeChange = () => {
  // Initialize theme-change after component mounts
  useEffect(() => {
    themeChange(false); // false = don't persist theme in localStorage
  }, []);

  // DaisyUI themes
  const themes = ["light", "dark"];

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn m-1">
        Theme
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 max-h-64 overflow-y-auto"
      >
        {themes.map((theme) => (
          <li key={theme}>
            <a data-set-theme={theme} data-act-class="active">
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeChange;
