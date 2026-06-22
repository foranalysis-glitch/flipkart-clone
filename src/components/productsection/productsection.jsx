import ProductCard from "../productcard/productcard";

function ProductSection() {

  const products = [
    {
      id: 1,
      title: "iPhone 15",
      price: "69999",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
    },

    {
      id: 2,
      title: "Gaming Laptop",
      price: "59999",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },

    {
      id: 3,
      title: "Smart Watch",
      price: "2999",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },

    {
      id: 4,
      title: "Headphones",
      price: "1999",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },

    {
      id: 5,
      title: "Bluetooth Speaker",
      price: "2499",
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab",
    },

    {
      id: 6,
      title: "Camera",
      price: "45999",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mt-6">

      <div className="flex items-center justify-between mb-4">

        <h2 className="text-2xl font-bold">
          Best Electronics
        </h2>

        <button className="bg-[#2874F0] text-white px-4 py-2 rounded">
          View All
        </button>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}

      </div>

    </section>
  );
}

export default ProductSection;