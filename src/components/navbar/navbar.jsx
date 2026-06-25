import {
  FaSearch,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaBars,
} from "react-icons/fa";

import { IoPersonCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";     /* position rkhege sticky so that nav bar damage n ho      
                           z use krenge so that navbar sbse uper rhe  */

/*        secondly, width kru max so that adjust hojye    ,, mx use kra left right margin set k liye ,, px for padding , h height set krne ko,, flex  ,,   */

function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

  return (
  <>
    <nav className="bg-white sticky top-0 z-50">

      {/* Desktop Navbar */}
      <div className="hidden md:flex max-w-7xl mx-auto px-4 h-16 items-center justify-between">

        <h1 className=" mr-4 bg-yellow-300 px-4 py-2 rounded-lg  text-blue-500  text-2xl  font-serif ">
          Flipkart
        </h1>

        <div className="flex items-center w-[65%]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-5 py-3 rounded-xl border-2 border-black outline-none"
          />
          <FaSearch className="ml-2 text-xl" />
        </div>

        <div className="flex items-center gap-6">

          <button className="bg-white px-5 py-2 font-semibold rounded-md">
            Login
          </button>

          <button className="px-4 py-2 font-bold">
            Become Seller
          </button>

          <div className="flex items-center gap-2">
            <FaShoppingCart />
            <span>Cart</span>
          </div>

        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden px-4 py-3">

        <div className="flex items-center justify-between mb-3">

          <h1 className=" text-blue-500 bg-yellow-300 px-4 py-2 rounded-lg font-serif text-2xl">
            Flipkart
          </h1>

          <FaBars
            className="text-3xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />

        </div>

        <div className="flex items-center border-2 border-black rounded-lg px-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 outline-none"
          />
          <FaSearch className="text-gray-500" />
        </div>

      </div>

    </nav>

    {/* Overlay */}
    {isOpen && (
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={() => setIsOpen(false)}
      />
    )}

    {/* Mobile Drawer */}
    <div
      className={`fixed top-0 left-0 h-screen w-64 bg-white z-50 shadow-lg transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-5 border-b">

        <h2 className="font-bold text-xl">
          Menu
        </h2>

        <button
          className="text-2xl"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

      </div>

      <div className="flex flex-col p-5 gap-5 font-medium">

        <p>Home</p>
        <p>Categories</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Login</p>

      </div>

    </div>
  </>
);
}
export default Navbar;

  
    
     