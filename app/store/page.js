"use client"
import React, { useEffect, useState } from "react";
import ProductCard from '../componets/cart-componets/ProductCard'
import AdMarquee from "../componets/advertisment-components/AdMarquee";
import SearchBar from "../componets/store-components/SearchBar";
import { MdFilterList } from "react-icons/md";
import axios from "axios";


const Page = () => {
  const [products , setProducts] = useState([])
    useEffect(() => {
    axios.get("https://happycrackersprod.onrender.com/products")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      });
  }, []);
  return (
    <div className='w-full'>
      <div className='w-full h-[200px] bg-black'>

      </div>
      <AdMarquee/>
        <div className='max-w-5xl mx-auto flex justify-between items-center py-4 px-4 gap-4'>
            <div>
              <PriceDropdownFilter/>
            </div>
            <div>
              <SearchBar className={"hello h-[40px]"}/>
            </div>
        </div>
        <div className='max-w-7xl mx-auto flex flex-wrap justify-center items-center py-5 gap-x-2 gap-y-5 '>
            {
              products.map((data,index) =>(<ProductCard key={index} data={data}/>))
            }
        </div>
    </div>
  )
}

export default Page




const PriceDropdownFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState("");

  const priceRanges = [
    { label: "All range", value: "" },
    { label: "Below ₹5,000", value: "5000>" },
    { label: "₹5,000 - ₹10,000", value: "10000>" },
    { label: "Above ₹10,000", value: "10000<" },
    { label: "More than ₹20,000", value: "20000<" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleRangeSelect = (range) => {
    setSelectedRange(range);
    console.log(range)
    setIsOpen(false); // Close the dropdown after selection
    
  };

  const resetSelection = () => setSelectedRange(null);

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full h-[40px] px-2 py-2 text-sm font-medium text-gray-700 bg-white border-[1px] border-black shadow-sm hover:bg-gray-50 focus:outline-none"
      >
       <MdFilterList className="text-[22px] pr-2"/> Price {selectedRange && `(${priceRanges.find((p) => p.value === selectedRange)?.label})`}
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
        <div className="absolute left-0 z-30 mt-2 bg-white border-[1px] border-black  shadow-lg w-64">
          <div className="px-4 py-2">
            <button
              onClick={resetSelection}
              className="text-sm text-green-600 hover:underline focus:outline-none"
            >
              Reset
            </button>
          </div>
          <ul className="px-4 py-2 space-y-2">
            {priceRanges.map((range) => (
              <li key={range.value} className="flex items-center">
                <label className="flex items-center text-sm text-gray-700">
                  <input
                    type="radio"
                    name="priceRange"
                    className="w-4 h-4 mr-2 text-green-600 border-gray-300 focus:ring-green-500"
                    checked={selectedRange === range.value}
                    onChange={() => handleRangeSelect(range.value)}
                  />
                  {range.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};