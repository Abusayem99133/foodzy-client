import { HiMiniChevronDown } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SubNavbar from "./SubNavbar";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>

      <li>
        <Link>
          Categorys
          <HiMiniChevronDown />
        </Link>
      </li>

      <li>
        <Link>
          Products
          <HiMiniChevronDown />
        </Link>
      </li>

      <li>
        <Link>
          Pages
          <HiMiniChevronDown />
        </Link>
      </li>

      <li>
        <Link>
          Blog
          <HiMiniChevronDown />
        </Link>
      </li>

      <li>
        <Link>
          Elements
          <HiMiniChevronDown />
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="bg-[#FFFFFF] drop-shadow-sm  w-full">
        <div className="navbar max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* LEFT */}
          <div className="navbar-start lg:hidden">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-200 rounded-box mt-3 w-52 p-2 shadow z-[999]"
              >
                {navItems}
              </ul>
            </div>
          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-sm xl:text-base">
              {navItems}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end">
            <a
              className="cursor-pointer text-sm sm:text-base font-medium whitespace-nowrap"
              href="tel:+8801814082602"
            >
              (+88) 01814 - 082602
            </a>
          </div>
        </div>
      </div>

      <SubNavbar />
    </div>
  );
};

export default Navbar;
