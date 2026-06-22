function ProductCard({ image, title, price }) {
  return (
    <div className="bg-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4 cursor-pointer">

      <div className="h-40 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="h-full object-contain"
        />
      </div>

      <h3 className="mt-3 font-medium text-sm line-clamp-2">
        {title}
      </h3>

      <p className="text-green-600 font-bold mt-2">
        ₹{price}
      </p>

    </div>
  );
}

export default ProductCard;