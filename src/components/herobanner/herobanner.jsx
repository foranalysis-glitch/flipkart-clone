function HeroBanner() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-4">
      <div className="w-full h-[180px] md:h-[280px] lg:h-[350px] rounded-lg overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1781737873596-5d08a7994fa5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Banner"
          className="w-full h-full object-cover"
        />

      </div>
    </div>
  );
}

export default HeroBanner;