import { NavLink } from "react-router-dom";

const Nav = () => {

    const navbarLists = <>
        <NavLink className={({isActive}) => isActive ? 'px-4 py-3 text-xl font-semibold hover:bg-slate-100 rounded-md text-[#23BE0A] border border-[#23BE0A]' : 'px-4 py-3 hover:bg-gray-100 rounded-md text-xl font-normal text-[#131313CC]'  } to='/'>Home</NavLink>
        <NavLink className={({isActive}) => isActive ? 'px-4 py-3 text-xl font-semibold hover:bg-slate-100 rounded-md text-[#23BE0A] border border-[#23BE0A]' : 'px-4 py-3 hover:bg-gray-100 rounded-md text-xl font-normal text-[#131313CC]'  } to='/listedbooks'>Listed Books</NavLink>
        <NavLink className={({isActive}) => isActive ? 'px-4 py-3 text-xl font-semibold hover:bg-slate-100 rounded-md text-[#23BE0A] border border-[#23BE0A]' : 'px-4 py-3 hover:bg-gray-100 rounded-md text-xl font-normal text-[#131313CC]'  } to='/pagesread'>Pages to Read</NavLink>
    </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {
                navbarLists
            }
          </ul>
        </div>
          <p className="btn btn-ghost lg:block hidden text-xl lg:text-3xl font-bold text-black">Read Free Time</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navbarLists
          }
        </ul>
      </div>
      <div className="navbar-end lg:flex hidden mr-3 gap-5">
        <button className="btn text-xl font-semibold bg-[#23BE0A] text-white">Sign In</button>
        <button className="btn text-xl font-semibold bg-[#59C6D2] text-white">Sign Up</button>
      </div>

      <div className=" lg:hidden block navbar-end">
        <h2 className="text-2xl font-medium mr-4 text-[#23BE0A]">Read Free Time</h2>
      </div>
    </div>
  );
};

export default Nav;
