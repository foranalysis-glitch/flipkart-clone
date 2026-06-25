import { useState, useEffect } from "react";

function HeroBanner() {

  const images = [
  "https://images.unsplash.com/photo-1781737873596-5d08a7994fa5?q=80&w=687&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1170&auto=format&fit=crop",
];

const [current, setCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }, 3000);

  return () => clearInterval(interval);
}, []);
  return (
    <div className="max-w-7xl mx-auto px-4 mt-4">
      <div className="w-full h-[180px] md:h-[280px] lg:h-[350px] rounded-lg overflow-hidden">

       <img
       src={images[current]}
        alt="Banner"
     className="w-full h-full object-cover transition-all duration-500"
/>
      </div>
    </div>
  );
}

export default HeroBanner;