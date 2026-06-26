import { FaTshirt, FaMobileAlt, FaHome, FaMotorcycle } from "react-icons/fa";
import { MdTv, MdLaptopMac } from "react-icons/md";
import { GiLipstick, GiMeal, GiCricketBat } from "react-icons/gi";
import { FaBookOpen, FaCouch, FaCarSide,  } from "react-icons/fa";


import { MdKitchen } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";

function Categories() {
  const categories = [
     { name: "Bags", icon: < GiShoppingBag /> },
    { name: "Mobiles", icon: <FaMobileAlt /> },
    { name: "Fashion", icon: <FaTshirt /> },
    { name: "Electronics", icon: < MdLaptopMac /> },
     { name: "Foods", icon: < GiMeal /> },
     { name: "Womenish", icon: < GiLipstick /> },
      { name: "Sports", icon: < GiCricketBat /> },
     { name: "Books", icon: <FaBookOpen /> },
     { name: "Electronics", icon: < MdLaptopMac /> },
    { name: "Home", icon: <FaHome /> },
    { name: "Applinces", icon: <MdKitchen /> },
    { name: "Cars", icon: <FaCarSide /> },
    { name: "Beauty", icon: <GiShoppingBag /> },
    { name: "Bikes", icon: <FaMotorcycle /> },
  ];

  return (
    <div className="bg-white shadow-sm flex flex-col items-center cursor-pointer hover:scale-110 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between overflow-x-auto py-4 gap-6">

          {categories.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer min-w-fit"
            >
              <div className="text-3xl text-[#2874F0]">
                {item.icon}
              </div>

              <p className="text-sm font-medium mt-2  hover:text-blue-600 transition-all duration-300">
                {item.name}
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Categories;