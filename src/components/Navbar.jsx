import { FaCartShopping } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import Darkmode from "./Darkmode";
const menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/top-rated",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/kids-wear",
  },
  {
    id: 4,
    name: "Men's Wear",
    link: "/mens-wear",
  },
  {
    id: 5,
    name: "electronics",
    link: "/womens-wear",
  },
];

function Navbar() {
  return (
    <div className=" dark:bg-gray-800 shadow-md  dark:text-white">
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
          <div className="flex gap-4 items-center">
            <div className="group  relative">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[250px] transition-all duration-300 ease-in-out rounded-full border border-gray-300 px-3 py-2 focus:border-2 focus:outline-none focus:border-primary"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 group-hover:text-primary transition-all duration-300" />
            </div>
            {/* order button  */}
            <button
              onClick={() => alert("Order Now")}
              className="bg-primary text-white px-4 py-2 rounded-full shadow-md hover:bg-accent-dark transition-all duration-300 ease-in-out group flex gap-2"
            >
              <span className=" group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className=" text-xl text-white drop-shadow-sm " />
            </button>
            <div>
              <Darkmode />
            </div>
          </div>
        </div>
      </div>

      {/* lower navbaar */}

      <div className="container ">
        <ul className=" justify-center gap-4 py-2 sm:flex hidden">
          {menu.map((item) => (
            <li key={item.id} className="hover:bg-primary/20 py-2 px-4 ">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
