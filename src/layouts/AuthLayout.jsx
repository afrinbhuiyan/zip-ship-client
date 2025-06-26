import React from "react";
import authImage from "../assets/authImage.png";
import { Outlet } from "react-router-dom";
import ZipShiftLogo from "../pages/shared/ZipShiftLogo/ZipShiftLogo";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Logo Header */}
      <header className="px-4 py-6 lg:px-8">
        <ZipShiftLogo />
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-6xl">
          <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-8 lg:gap-16">
            {/* Image Section - Hidden on mobile */}
            <div className="hidden lg:block lg:w-1/2">
              <img 
                src={authImage} 
                alt="Authentication" 
                className="w-full max-w-md mx-auto" 
              />
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-1/2 max-w-md">
              <div className="">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;