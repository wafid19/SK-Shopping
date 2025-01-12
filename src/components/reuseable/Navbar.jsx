/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#03045e] text-white shadow">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="">
              <h1 className="text-2xl font-bold">
                Organic<span className="text-[#fa8736]">HUT</span>
              </h1>
            </Link>
          </div>
          <div className="md:block hidden">
            <div className="flex justify-between items-center ">
              <input
                type="text"
                className="w-[40rem] text-center h-[40px] mx-2 border border-rose-50 outline-none rounded-2xl"
                placeholder="Scearch.........."
              />
              <button className="w-[40px] h-[40px] flex justify-center items-center border border-rose-500 outline-none rounded-full hover:bg-cyan-500 duration-500  hover:text-white">
                <FaSearch />
              </button>
            </div>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-lg font-semibold">
            <div className="flex ">
              <Link to="/" className="hover:text-gray-700">
                Home
              </Link>
            </div>
            <Link to="/product" className="hover:text-gray-700">
              Products
            </Link>
            <Link to={"/product/card/"}>
               Cart
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#caf0f8]">
          <Link to="/" className="hover:text-gray-700">
            Home
          </Link>
          <Link to="/product" className="hover:text-gray-700">
            Products
          </Link>
          <a href="/contact" className="block px-4 py-2 hover:bg-gray-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
