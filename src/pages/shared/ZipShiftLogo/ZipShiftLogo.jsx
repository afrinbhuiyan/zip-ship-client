import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";

const ZipShiftLogo = () => {
  return (
    <div>
      <NavLink
        to="/"
        className="text-xl font-serif urbanist flex items-center pl-4 relative"
      >
        <img
          src={logo}
          alt="zipShip Logo"
          className="h-10 absolute bottom-1 left-0"
        />
        <span className="font-semibold text-2xl ml-2">
          zipShip
        </span>
        <span></span>
      </NavLink>
    </div>
  );
};

export default ZipShiftLogo;
