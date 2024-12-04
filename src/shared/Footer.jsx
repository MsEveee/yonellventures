import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";


const Footer = ({  bgcolor }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (

<footer
className={`w-full px-6 py-8 bg-gray-800 text-white backdrop-blur-md`}
style={{ backgroundColor: bgcolor }}
>

<div className="flex flex-col items-center justify-between gap-6 mb-8 md:flex-row">
  
  <div className="text-center md:text-left">
    <h4 className="mb-2 text-xl font-semibold">Contact Us</h4>
    <p>
      Email:
      <a
        href="mailto:info@cropcircle.com"
        className="text-yellow-400 hover:underline"
      >
          info@yonellventure.com
      </a>
    </p>
    <p>
      Phone:
      <a
        href="tel:+1234567890"
        className="text-yellow-400 hover:underline"
      >
          +233 553-396566
      </a>
    </p>
  </div>


  <div className="text-center md:text-left">
    <h4 className="mb-2 text-xl font-semibold">Quick Links</h4>
    <ul className="flex flex-col gap-4 md:flex-row">
      <li>
        <Link
          
          className="text-yellow-400 hover:underline"
        >
          Privacy Policy
        </Link>
      </li>
      <li>
        <Link
          
          className="text-yellow-400 hover:underline"
        >
          Terms and Conditions
        </Link>
      </li>
      <li>
        <Link  className="text-yellow-400 hover:underline">
          Help
        </Link>
      </li>
      
      <li>
        <Link  className="text-yellow-400 hover:underline">
          FAQ
        </Link>
      </li>
    </ul>
  </div>

  {/* Dynamic Links */}
  <div className="text-center md:text-left">
    <h4 className="mb-2 text-xl font-semibold">Explore</h4>
    <ul className="flex flex-col gap-4 md:flex-row">
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link
            to={link.path}
            className="text-yellow-400 hover:underline"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</div>

{/* Bottom Section */}
<div className="pt-4 text-center border-t border-gray-700">
  <p className="text-sm">
    &copy; {currentYear} Yonell-Vnetures. All rights reserved.
  </p>
</div>
</footer>
  );
};
export default Footer;