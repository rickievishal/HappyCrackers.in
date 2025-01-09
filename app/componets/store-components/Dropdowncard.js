"use client"
import React, { useState } from "react";

const DropdownFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    { label: "A4", count: 46 },
    { label: "A3", count: 43 },
    { label: "12X18", count: 35 },
    { label: "13X19", count: 35 },
    { label: "A5", count: 5 },
    { label: "A6", count: 3 },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionToggle = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((o) => o !== option)
        : [...prevSelected, option]
    );
  };

  const resetSelection = () => setSelectedOptions([]);

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none"
      >
        Filter: Size {selectedOptions.length > 0 && `(${selectedOptions.length} selected)`}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 ml-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.063a.75.75 0 111.08 1.04l-4.25 4.667a.75.75 0 01-1.08 0L5.23 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 z-10 mt-2 bg-white border border-gray-200 shadow-lg w-64">
          <div className="px-4 py-2">
            <button
              onClick={resetSelection}
              className="text-sm text-blue-600 hover:underline focus:outline-none"
            >
              Reset
            </button>
          </div>
          <ul className="px-4 py-2 space-y-2">
            {options.map((option) => (
              <li key={option.label} className="flex items-center">
                <label className="flex items-center text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mr-2 text-blue-600 border-gray-300  focus:ring-blue-500"
                    checked={selectedOptions.includes(option.label)}
                    onChange={() => handleOptionToggle(option.label)}
                  />
                  {option.label} <span className="ml-2 text-gray-400">({option.count})</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownFilter;
