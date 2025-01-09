import Image from 'next/image';
import React, { useState } from 'react';
import { IoAddSharp } from "react-icons/io5";
import { TfiMinus } from "react-icons/tfi";
import image from "../../assets/logo/product.jpg";
import { AiOutlineDelete } from "react-icons/ai";
const CartProduct = ({ data }) => {
    const [isDeleteClicked, setIsDeleteClicked] = useState(false)
  const handleIncrease = () => {
    console.log("Increase quantity");
  };

  const handleDecrease = () => {
    console.log("Decrease quantity");
  };

  const handleRemove = () => {
    console.log("Remove item");
    setIsDeleteClicked(!isDeleteClicked);
    setIsDeleteClicked(false);
  };
  const handleisdeleteclicked = () => {
    setIsDeleteClicked(!isDeleteClicked)
  }
  

  return (
    <div className="flex w-full h-[130px] border border-black">
      {isDeleteClicked ? (<>
      <div className='w-full flex flex-col justify-center items-center p-4'>
            <p className='max-w-xs text-sm text-center'>
                Do you want to remove this item from your bag?
            </p>
            <div className='flex justify-center items-center space-x-5 mt-4 text-sm'>
                <button className='bg-black text-white hover:bg-gray-800 w-[80px] py-1' onClick={handleRemove}>
                    yes
                </button>
                <button className='bg-white border border-black text-black hover:bg-gray-50  w-[80px] py-1' onClick={handleisdeleteclicked}>
                    no
                </button>
            </div>
      </div>
      </>) : (<>
      {/* Product Image */}
      <div className="min-w-[130px] h-[130px] bg-black p-1 overflow-hidden">
        <Image 
          src={image}
          alt="Product Image"
          width={130}
          height={130}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-between h-full px-3 py-2 flex-grow">
        {/* Title */}
        <h3 className="text-md ">Deluxe Box</h3>

        {/* Quantity Selector */}
        <div className="mt-2">
          <p className="text-xs text-gray-600">Quantity</p>
          <div className="flex items-center mt-1 space-x-2 ">
            <button 
              onClick={handleDecrease} 
              className="text-sm p-1 border border-black active:scale-90 lg:hover:bg-black lg:hover:text-white hover:bg-[#FFFFFF]"
              aria-label="Decrease Quantity"
            >
              <TfiMinus />
            </button>
            <span className="text-xs px-2">1</span>
            <button 
              onClick={handleDecrease} 
              className="text-sm p-1 border border-black active:scale-90 lg:hover:bg-black lg:hover:text-white hover:bg-[#FFFFFF]"
              aria-label="Decrease Quantity"
            >
             <IoAddSharp  />
            </button>
            
          </div>
        </div>

        {/* Price and Remove */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm ">₹ 1000</p>
          <button 
            onClick={handleisdeleteclicked} 
            className="text-xl hover:"
            aria-label="Remove Item"
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div></>)
      }
    </div>
  );
};

export default CartProduct;
