import logo from "../../../assets/banner/logo.png";
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
        <div>search bar</div>
        {/* div 3 */}
        <div>login</div>
      </div>
    </div>
  );
};

export default SubNavbar;
