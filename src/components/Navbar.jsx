import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
function Navbar() {
  return (
    <div className=" dark:bg-gray-800 shadow-md dark:text-white">
      <div className="bg-primary/45 shadow-md sticky top-0 z-50">
        <div className="container flex justify-between items-center py-4">
          <div>
            <a
              href=""
              className="font-bold text-2xl flex items-center sm:text-3xl  gap-2"
            >
              <img src={logo} alt="" className="w-10 uppercase" /> Shopy
            </a>
          </div>
          {/* search bar */}
          <div>
            <div className="group block relative">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[250px] transition-all duration-300 ease-in-out rounded-full border border-gray-300 px-3 py-2 focus:border-2 focus:outline-none focus:border-primary"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 group-hover:text-primary transition-all duration-300" />
            </div>
          </div>
          {/* order button  */}
          <button
            onClick={() => alert("Order Now")}
            className="bg-primary text-white px-4 py-2 rounded-full shadow-md hover:bg-accent-dark transition-all duration-300 ease-in-out"
          >
            <span>Order</span>
          </button>

          {/* drk mode */}
          <button></button>
        </div>
      </div>

      {/* lower navbaar */}

      <div></div>
    </div>
  );
}

export default Navbar;
