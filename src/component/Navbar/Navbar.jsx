import { useState } from "react";

import { Link } from "react-router-dom";

import { FaBars, FaHeart } from "react-icons/fa";

import MobileMenu from "../MobileMenu";

const Navbar = () => {
  const [open , setOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky top-0 z-40 bg-white shadow-sm"
      >
        <div
          className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"
        >
          <h1
            className="text-3xl font-bold text-[#C9A227] "
          >
            JewelLux
          </h1>

          <div
            className="hidden md:flex gap-10 font-medium"
          >
            <Link to="/" className="hover:text-[#C9A227]">
              Home
            </Link>

            <Link to="/shop" className="hover:text-[#C9A227]">
              Shop
            </Link>

            <Link to="/about" className="hover:text-[#C9A227]">
              About
            </Link>

            <Link to="/contact" className="hover:text-[#C9A227]">
              Contact
            </Link>
          </div>

          <div
            className="hidden md:flex"
          >
            <Link to="/wishlist">
              <FaHeart
                className="text-2xl text-[#C9A227]"
              />
            </Link>
          </div>

          <button
            className="md:hidden text-2xl "
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
