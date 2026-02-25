import logo from "../../../assets/banner/logo.png";
import {
  IoSearch,
  IoPersonOutline,
  IoHeartOutline,
  IoCartOutline,
} from "react-icons/io5";

const SubNavbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 py-3 flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
        {/* TOP ROW (Logo + Icons for Mobile) */}
        <div className="w-full flex justify-between items-center lg:w-auto">
          {/* LEFT (Logo Section) */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
            />
            <div>
              <h2 className="font-extrabold text-[20px] sm:text-[22px] leading-5">
                Foodzy
              </h2>
              <span className="text-xs sm:text-sm text-gray-500">
                A Treasure of Tastes
              </span>
            </div>
          </div>

          {/* RIGHT (Icons Section - mobile compact) */}
          <div className="flex items-center gap-4 text-sm font-medium lg:hidden">
            <IoPersonOutline size={20} />
            <IoHeartOutline size={20} />
            <IoCartOutline size={20} />
          </div>
        </div>

        {/* CENTER (Search Section) */}
        <div className="w-full flex items-center bg-white rounded-lg shadow-md overflow-hidden border border-green-300 lg:flex-1 lg:max-w-2xl">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search for items..."
            className="flex-1 px-3 sm:px-4 py-2 outline-none text-sm sm:text-base"
          />

          {/* Divider */}
          <div className="hidden sm:block h-10 w-px bg-green-300"></div>

          {/* Category Select */}
          <select className="hidden sm:block px-3 py-2 outline-none bg-transparent text-sm">
            <option value="">All Category</option>
            <option value="items">Items</option>
          </select>

          {/* Search Button */}
          <button className="bg-black text-white px-3 sm:px-4 py-2.5 hover:bg-gray-800 transition duration-200 rounded-r-md">
            <IoSearch size={18} />
          </button>
        </div>

        {/* RIGHT (Icons Section - desktop) */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <div className="flex items-center gap-1 cursor-pointer hover:text-green-600 transition">
            <IoPersonOutline size={20} />
            <span>Account</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-green-600 transition">
            <IoHeartOutline size={20} />
            <span>Wishlist</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-green-600 transition">
            <IoCartOutline size={20} />
            <span>Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
