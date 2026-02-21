import logo from "../../../assets/banner/logo.png";
import {
  IoSearch,
  IoPersonOutline,
  IoHeartOutline,
  IoCartOutline,
} from "react-icons/io5";

const SubNavbar = () => {
  return (
    <div className="w-full bg-white shadow-sm border-b">
      <div className="max-w-[1350px] mx-auto px-4 py-3 flex justify-between items-center gap-6">
        {/* LEFT (Logo Section) */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <div>
            <h2 className="font-extrabold text-[22px] leading-5">Foodzy</h2>
            <span className="text-sm text-gray-500">A Treasure of Tastes</span>
          </div>
        </div>

        {/* CENTER (Search Section) */}
        <div className="flex items-center flex-1 max-w-2xl bg-white rounded-lg shadow-md overflow-hidden border border-green-300">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search for items..."
            className="flex-1 px-4 py-2 outline-none"
          />

          {/* Divider */}
          <div className="h-10 w-px bg-green-300"></div>

          {/* Category Select */}
          <select className="px-3 py-2 outline-none bg-transparent">
            <option value="">All Category</option>
            <option value="items">Items</option>
          </select>

          {/* Search Button */}
          <button className="bg-black text-white px-4 py-2.5 hover:bg-gray-800 transition duration-200 rounded-r-md">
            <IoSearch size={20} />
          </button>
        </div>

        {/* RIGHT (Icons Section) */}
        <div className="flex items-center gap-6 text-sm font-medium">
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
