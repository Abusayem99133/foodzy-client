import logo from "../../../assets/banner/logo.png";
const SubNavbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
              <a>Setting</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <div className=" flex-1">
          <div>
            <a className="font-extrabold text-[24px] flex-col">Foodzy</a>
          </div>
          <span className="font-semibold text-sm">A Treasure of Tastes</span>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div>
          <h1>Account</h1>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
