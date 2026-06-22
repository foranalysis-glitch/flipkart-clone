import {
  FaMobileAlt,
  FaTshirt,
  FaLaptop,
  FaHome,
 
  FaMotorcycle,
} from "react-icons/fa";

import { MdKitchen } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";

function Categories() {
  const categories = [
    
    { name: "Mobiles", icon: <FaMobileAlt /> },
    { name: "Fashion", icon: <FaTshirt /> },
    { name: "Electronics", icon: <FaLaptop /> },
    
    { name: "Home", icon: <FaHome /> },
    { name: "Appliances", icon: <MdKitchen /> },
   
    { name: "Beauty", icon: <GiShoppingBag /> },
    { name: "Bikes", icon: <FaMotorcycle /> },
  ];

  return (
    <div className="bg-white shadow-sm">
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

              <p className="text-sm font-medium mt-2">
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