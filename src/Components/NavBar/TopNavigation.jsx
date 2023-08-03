import { NavLink } from "react-router-dom";

const TopNavigation = () => {
  const activeClass = "px-0 py-1 rounded-none border-b-2  border-blue-400";
  const inactiveClass = "px-0 py-1 rounded-none";
  const navList = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive ? activeClass : isPending ? "pending" : inactiveClass
          }
        >
          Recommended
        </NavLink>
      </li>
      <li tabIndex={0}>
        <NavLink
          to={"/slider"}
          className={({ isActive, isPending }) =>
            isActive ? activeClass : isPending ? "pending" : inactiveClass
          }
        >
          Hot
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/popular"}
          className={({ isActive, isPending }) =>
            isActive ? activeClass : isPending ? "pending" : inactiveClass
          }
        >
          Nobel
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm font-bold text-[12px] dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navList}
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-[12px] font-bold">
            {navList}
          </ul>
        </div>
      </div>

      <div className="navbar-end ">
        <div className="relative">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input text-[12px] input-bordered w-40 rounded-3xl px-12 md:w-auto bg-slate-50"
            />
            <svg
              className="absolute top-[12px] left-[15px] w-6 fill-[#ddd]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
