function Footer() {
  return (
    <footer className="bg-[black] text-white mt-8">
      <div className="max-w-7xl mx-auto px-5 py-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div>
               <h3 className="font-bold mb-4">About</h3>
            <p  className="text-sm text-white-300 font-bold-400">  Contact Us</p>
            <p className="text-sm text-white-300 font-bold-400">Careers</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <p className="text-sm text-white-300">Payments</p>
            <p className="text-sm text-white-300">Shipping</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Policy</h3>
            <p className="text-sm text-white-300">Terms Of Use</p>
            <p className="text-sm text-white-300">Privacy</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Social</h3>
            <p className="text-sm text-white-300">Facebook</p>
            <p className="text-sm text-white-300">Instagram</p>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;






/*  function Footer() {
  return (
    <footer className="bg-[#172337] text-black mt-8">

      <div className="max-w-7xl mx-auto px-5 py-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

             <div>     
            <h3 className="font-bold mb-4">About</h3>
                   <p className="text-sm text-blue-300">
            Contact Us
            </p>
            <p className="text-sm text-blue-300">
              Careers
            </p>
    </div>

          <div>
            <h3 className="font-bold mb-4">Help</h3>
           
            <p className="text-sm text-blue-300">
              Shipping
            </p>
    </div>

            <div>
           
            <p className="text-sm text-blue-300">
              Terms Of Use
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Social</h3>
            <p className="text-sm text-blue-300">
              Facebook
            </p>
            <p className="text-sm text-blue-300">
              Instagram
            </p>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;     */