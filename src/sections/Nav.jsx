import { useState } from "react";
import headerLogo from "../assets/images/header-logo.svg"; // Import the logo image

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}

        <a href="/">
          <img
            src={headerLogo} // Replace with your actual logo image URL
            alt="Logo"
            className="h-10 w-auto object-cover"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <a href="#home">
            <li className="hover:text-gray-900 cursor-pointer">Home</li>
          </a>
          <a href="#about-us">
            <li className="hover:text-gray-900 cursor-pointer">About Us</li>
          </a>
          <a href="#products">
            <li className="hover:text-gray-900 cursor-pointer">Products</li>
          </a>
          <a href="#contact-us">
            <li className="hover:text-gray-900 cursor-pointer">Contact Us</li>
          </a>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 md:hidden">
            <a href="#home">
              <li
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Home
              </li>
            </a>
            <a href="#about-us">
              <li
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </li>
            </a>
            <a href="#products">
              <li
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Products
              </li>
            </a>
            <a href="#contact-us">
              <li
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </li>
            </a>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
