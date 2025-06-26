import React from "react";
import MapComponent from "./MapComponent";

const Coverage = () => {
  return (
    <div className="bg-base-200">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Location Map</h1>
          <p className="py-6">Explore our location with this interactive map</p>
        </div>
        <div className="">
          <MapComponent />
        </div>
    </div>
  );
};

export default Coverage;
