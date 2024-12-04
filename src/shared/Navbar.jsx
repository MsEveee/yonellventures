import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import menu from "../assets/SVG/menu.svg";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false); // Track scroll position

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/product", label: "Products" },
    { path: "/contact", label: "Contact Us" },
  ];

  // Detect scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // If scrolled down more than 50px
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 shadow-md transition-all duration-300 ${
        scrolling ? "bg-transparent" : "bg-white opacity-80"
      } backdrop-blur-sm`}
    >
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      
        <div className="text-xl font-bold text-yellow-500">
          <NavLink to="/" className="py-2">
            YONELL-VENTURES
          </NavLink>
        </div>

        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <img src={menu} alt="Menu Icon" className="w-6 h-6" />
        </button>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center absolute md:static left-0 top-16 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col items-center gap-6 p-4 md:flex-row md:gap-8 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className="text-lg font-medium text-gray-700 transition duration-200 hover:text-yellow-500"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
