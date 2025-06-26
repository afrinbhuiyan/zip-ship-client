import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";
import ZipShiftLogo from "../ZipShiftLogo/ZipShiftLogo";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `block py-2 px-4 rounded-md transition-colors ${isActive ? "bg-[#CAEB66] text-black font-medium" : "hover:bg-gray-100"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/services" 
          className={({ isActive }) => 
            `block py-2 px-4 rounded-md transition-colors ${isActive ? "bg-[#CAEB66] text-black font-medium" : "hover:bg-gray-100"}`
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/coverage" 
          className={({ isActive }) => 
            `block py-2 px-4 rounded-md transition-colors ${isActive ? "bg-[#CAEB66] text-black font-medium" : "hover:bg-gray-100"}`
          }
        >
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `block py-2 px-4 rounded-md transition-colors ${isActive ? "bg-[#CAEB66] text-black font-medium" : "hover:bg-gray-100"}`
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/pricing" 
          className={({ isActive }) => 
            `block py-2 px-4 rounded-md transition-colors ${isActive ? "bg-[#CAEB66] text-black font-medium" : "hover:bg-gray-100"}`
          }
        >
          Pricing
        </NavLink>
      </li>
      <li className="lg:hidden">
        <NavLink 
          to="/rider" 
          className={({ isActive }) => 
            `block py-2 px-4 rounded-md transition-colors ${isActive ? "bg-[#CAEB66] text-black font-medium" : "hover:bg-gray-100"}`
          }
        >
          Be a Rider
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="navbar bg-base-100 shadow-sm sticky top-0 z-50 rounded-2xl px-6 py-3">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost p-2">
            <CiMenuKebab className="text-xl hover:text-[#9eb45a]" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu menu-md bg-base-100 rounded-box mt-3 w-[calc(100vw-2rem)] shadow-lg border border-gray-200"
          >
            {navItems}
            <div className="px-4 py-2 flex flex-col gap-2 border-t border-gray-200 mt-2">
              <NavLink 
                to="/login" 
                className="btn btn-block btn-ghost text-left"
              >
                Sign In
              </NavLink>
              <NavLink 
                to="/rider" 
                className="btn btn-block bg-[#CAEB66] hover:bg-[#b8d45c]"
              >
                Be a rider
              </NavLink>
            </div>
          </ul>
        </div>
       <ZipShiftLogo/>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 px-1">
          {navItems}
        </ul>
      </div>
      
      <div className="navbar-end hidden lg:flex gap-2 mr-4">
        <NavLink 
          to="/login" 
          className="btn btn-ghost min-h-0 h-10 px-4"
        >
          Sign In
        </NavLink>
        <NavLink 
          to="/rider" 
          className="btn bg-[#CAEB66] hover:bg-[#b8d45c] min-h-0 h-10 px-4"
        >
          Be a rider
        </NavLink>
        <button 
          className="btn btn-circle bg-black text-white hover:bg-gray-800 min-h-0 h-10 w-10"
          aria-label="Action button"
        >
          <MdArrowOutward className="text-xl text-[#CAEB66]" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;