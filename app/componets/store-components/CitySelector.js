"use client";
import React, { useState } from "react";

const TamilNaduCities = [
  "Chennai",
  "Coimbatore",
  "Madurai",
  "Tiruchirappalli",
  "Salem",
  "Tirunelveli",
  "Erode",
  "Vellore",
  "Thoothukudi",
  "Nagercoil",
  "Thanjavur",
  "Dindigul",
  "Sivakasi",
  "Kanchipuram",
  "Karur",
  "Cuddalore",
  "Tiruvannamalai",
  "Tiruppur",
];

const CitySelector = ({ onCitySelect, className }) => {
  const [selectedCity, setSelectedCity] = useState("");

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    if (onCitySelect) onCitySelect(city); // Notify parent component (if provided)
  };

  return (
    <div className={`w-full ${className} flex flex-col tracking-tighter`}>
      <p className="text-xs sm:text-sm my-2">
        Chose your City
      </p>
      <select
        id="city-selector"
        value={selectedCity}
        onChange={handleCityChange}
        className="w-full border-[1px] border-[#111111]   focus:border-black outline-none px-2 py-2"
      >
        <option value="" disabled>
          Choose a city
        </option>
        {TamilNaduCities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      
    </div>
  );
};

export default CitySelector;
