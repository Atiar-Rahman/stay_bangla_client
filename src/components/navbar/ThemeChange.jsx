import React, { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { CheckCheck } from "lucide-react";

const ThemeChange = () => {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme-change after component mounts
  useEffect(() => {
    themeChange(false); // false = don't persist theme in localStorage
  }, []);

  const handleToggle = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-sm m-1 flex items-center md:gap-2">
        <input
          type="checkbox"
          checked={isDark}
          onChange={handleToggle}
          className="toggle toggle-neutral"
        />
        <CheckCheck
          className={`${isDark ? "text-primary" : "text-gray-400"}`}
        />
        <span>{isDark ? "Dark" : "Light"}</span>
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a data-set-theme="light" onClick={() => setIsDark(false)}>
            Light
          </a>
        </li>
        <li>
          <a data-set-theme="dark" onClick={() => setIsDark(true)}>
            Dark
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ThemeChange;
