import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import { useState } from "react";
function Navbar() {      /* position rkhege sticky so that nav bar damage n ho      
                           z use krenge so that navbar sbse uper rhe  */

/*        secondly, width kru max so that adjust hojye    ,, mx use kra left right margin set k liye ,, px for padding , h height set krne ko,, flex  ,,   */

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#2874F0] position-sticky top-0 z-50">                     
        <div className="max-w-7xl   mx-auto   px-4    h-16   flex   items-center  justify-between">

        
          <div>
            <h1 className="text-[#FFD700]  text-3xl  font-bold">
              Flipkart
            </h1>
          </div>
{/*  let yha display none k liye hidden,,  border radius ko rounded*/}
          
          <div className="hidden  items-center bg-white rounded-md overflow-hidden w-[45%]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-5 py-3 "
            />
            <FaSearch className="mx-4 text-black-800" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-black-600">

            <button className="bg-white text-black-500 px-5 py-2 font-semibold rounded">
              Login
            </button>

            <button className="bg-green text-black-600 px-4 py-3 font-bold">
  Become sellor
  </button>
            <div className="flex items-center text-600 gap-2">
              <FaShoppingCart />
              <span>Cart</span>
            </div>

          </div>

          {/* Mobile Menu ka button */}
          <div className="md:hidden text-black-400  text-2xl"
            onClick={() => setIsOpen(true)}
            >
            <FaBars />
          </div>

        </div>

        {/* Mobile Search */}
        <div className="md:hidden p-3 bg-[#2874F0]">
          <div className="flex items-center bg-white rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 outline-none"
            />
            <FaSearch className="mx-3 text-gray-500" />
          </div>
        </div>
      </nav>
  


       {/* Overlay feature k liye design */}
       {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Drawer set kra */}
        <div
          className={`fixed top-0 left-0 h-screen w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header bnaya */}
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

          {/* Menu Items */}
          <div className="flex flex-col p-5 gap-5 font-medium">

            <p className="cursor-pointer hover:text-[#2874F0]">
              Home
            </p>

            <p className="cursor-pointer hover:text-[#2874F0]">
              Categories
            </p>

            <p className="cursor-pointer hover:text-[#2874F0]">
              Cart
            </p>

            <p className="cursor-pointer hover:text-[#2874F0]">
              Wishlist
            </p>

            <p className="cursor-pointer hover:text-[#2874F0]">
              Login
            </p>

          </div>
        </div>
      </>
    );
}

 


export default Navbar;