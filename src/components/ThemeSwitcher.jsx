import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from 'react-icons/fa'; // Import Font Awesome icons

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    // Check local storage for a theme preference
    const storedTheme = localStorage.getItem("theme");
    // Default to 'light' if no preference, or respect system preference
    if (storedTheme) {
      return storedTheme;
    }
    // Check system preference if no stored theme
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light'; // Default to light
  });

  useEffect(() => {
    const root = document.documentElement; // This targets the <html> tag
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors focus:outline-none p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <FaMoon className="w-5 h-5" />
      ) : (
        <FaSun className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeSwitcher;