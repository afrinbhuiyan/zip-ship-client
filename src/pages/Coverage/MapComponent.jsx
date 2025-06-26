import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useLoaderData } from "react-router-dom";

const MapComponent = () => {
  const serviceCenters = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCenters, setFilteredCenters] = useState(serviceCenters);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    // Filter centers based on search term (case-insensitive partial match)
    const filtered = serviceCenters.filter(center =>
      center.district.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCenters(filtered);
  }, [searchTerm, serviceCenters]);

  useEffect(() => {
    // if (!mapRef.current) return;

    // Fix for default marker icons
    const DefaultIcon = L.icon({
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    // Coordinates for Bangladesh (centered on Dhaka)
    const bangladeshCoords = [23.8103, 90.4125];

    // Initialize the map focused on Bangladesh
    const map = L.map("map").setView(bangladeshCoords, 7);
    mapRef.current = map;

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Cleanup function
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current || !filteredCenters.length) return;

    // Clear previous markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add new markers
    filteredCenters.forEach((center) => {
      const coords = [center.latitude, center.longitude];
      const marker = L.marker(coords)
        .addTo(mapRef.current)
        .bindPopup(`
          <b>${center.city}, ${center.district}</b><br>
          <small>Region: ${center.region}</small><br>
          Covered areas: ${center.covered_area.join(', ')}
          ${center.flowchart ? `<br><a href="${center.flowchart}" target="_blank">View Flowchart</a>` : ''}
        `);
      
      markersRef.current.push(marker);
    });

    // If only one result, zoom to it
    if (filteredCenters.length === 1) {
      const center = filteredCenters[0];
      mapRef.current.setView([center.latitude, center.longitude], 10);
    }
    // If multiple results, fit bounds to show all
    else if (filteredCenters.length > 1) {
      const bounds = L.latLngBounds(
        filteredCenters.map(center => [center.latitude, center.longitude])
      );
      mapRef.current.fitBounds(bounds);
    }

  }, [filteredCenters]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCenterMap = (center) => {
    if (!mapRef.current) return;
    mapRef.current.setView([center.latitude, center.longitude], 12);
    // Open popup for the selected marker
    const marker = markersRef.current.find(m => 
      m.getLatLng().lat === center.latitude && 
      m.getLatLng().lng === center.longitude
    );
    if (marker) marker.openPopup();
  };

  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Service Centers in Bangladesh</h2>
        <p className="text-sm">Interactive map showing all service centers</p>
        
        {/* Search Box */}
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Search by District</span>
          </label>
          <input
            type="text"
            placeholder="Type district name..."
            className="input input-bordered w-full max-w-xs"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {/* Search Results */}
        {searchTerm && (
          <div className="mb-4">
            <div className="text-sm text-gray-500 mb-2">
              {filteredCenters.length} results found
            </div>
            <div className="max-h-40 overflow-y-auto">
              {filteredCenters.map((center, index) => (
                <div 
                  key={index} 
                  className="p-2 hover:bg-base-100 cursor-pointer"
                  onClick={() => handleCenterMap(center)}
                >
                  {center.district} ({center.region})
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Map Container */}
        <div id="map" className="h-96 w-full rounded-lg"></div>
      </div>
    </div>
  );
};

export default MapComponent;