import { HiMiniChevronDown } from "react-icons/hi2";
import logo from "../../../assets/banner/logo.png";
import { IoSearch, IoSearchSharp } from "react-icons/io5";
const SubNavbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center ">
        {/* div 1 */}
        <div className="flex items-center">
          <div className="dropdown dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className=" rounded-full">
                <img alt="logo" src={logo} />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-extrabold text-[24px] flex-col">Foodzy</h2>
            <span className="font-semibold text-sm">A Treasure of Tastes</span>
          </div>
        </div>
        {/* div 2 */}
        <div className="flex items-center justify-between bg-white border border-green-300 rounded-xl p-1 md:p-3 shadow-sm w-full max-w-xl mx-auto">
          {/* Search Input */}
          <div className="flex items-center gap-2 flex-grow">
            <input
              type="search"
              placeholder="Search..."
              required
              className="w-full outline-none border-none bg-transparent text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Category Dropdown */}
          <div className="flex items-center border-l border-green-200 pl-3 pr-2 gap-1 cursor-pointer">
            <h3 className="text-sm md:text-base text-gray-700">
              All Categories
            </h3>
            <HiMiniChevronDown className="text-green-500 text-lg" />
          </div>

          {/* Search Icon */}
          <button className="ml-2 bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors">
            <IoSearch className="text-xl" />
          </button>
        </div>

        {/* div 3 */}
        <div>button</div>
      </div>
    </div>
  );
};

export default SubNavbar;
