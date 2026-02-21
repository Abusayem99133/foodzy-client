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
      <div className="bg-base-100 shadow-sm w-full">
        <div className="navbar max-w-[1350px] mx-auto px-4">
          {/* LEFT */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content bg-base-200 rounded-box mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>
          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end">
            <a className="cursor-pointer" href="tel:+8801814082602">
              ( +88 ) 01814 - 082602
            </a>
          </div>
        </div>
      </div>

      <SubNavbar />
    </div>
  );
};

export default Navbar;
