import React, { useState, useEffect, useRef } from "react"; // Import useRef
import { FaSun, FaMoon } from 'react-icons/fa';
import { gsap } from 'gsap'; // Import gsap

const ThemeSwitcher = () => {
  // Ref for the currently displayed icon
  const iconRef = useRef(null);

  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    // Animate the icon out before the theme changes
    gsap.to(iconRef.current, {
      opacity: 0,
      scale: 0.5,
      rotation: theme === "light" ? 90 : -90, // Rotate differently based on current theme
      duration: 0.2, // Fast fade out
      onComplete: () => {
        // After fade out, change the theme
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      },
    });
  };

  // Use another useEffect to animate the *new* icon in after theme state updates
  useEffect(() => {
    // Only animate if the iconRef is actually pointing to an element (i.e., after initial render)
    if (iconRef.current) {
      gsap.fromTo(
        iconRef.current,
        { opacity: 0, scale: 0.5, rotation: theme === "light" ? -90 : 90 }, // Start opposite rotation
        { opacity: 1, scale: 1, rotation: 0, duration: 0.3, ease: "back.out(1.7)" } // Bounce in
      );
    }
  }, [theme]); // Rerun this effect whenever 'theme' changes


  return (
    <button
      onClick={toggleTheme}
      className="text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors focus:outline-none p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative" // Removed overflow-hidden as it's not strictly needed for this type of animation
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {/* We apply the ref directly to the icon component */}
      {theme === "light" ? (
        <FaMoon ref={iconRef} className="w-5 h-5" />
      ) : (
        <FaSun ref={iconRef} className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeSwitcher;