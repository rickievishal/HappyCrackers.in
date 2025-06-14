import Image from 'next/image';
import React, { useState } from 'react';
import { IoAddSharp } from "react-icons/io5";
import { TfiMinus } from "react-icons/tfi";
import image from "../../assets/logo/product.jpg";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from '@/lib/reduxStore/Reducers';
import products from '@/app/firebase/dataStructure';
import { useCartDetails } from '@/lib/reduxStore/store';

const CartProduct = (props) => {
  const data = props.data;
    const [isDeleteClicked, setIsDeleteClicked] = useState(false)
  console.log(data)
  const dispatch = useDispatch();
  const obj = {productId : data.productId}
  const handleDecrease = () => {
    
    dispatch(decrementQuantity(obj))
    console.log("Decrease quantity");
  };
  const handleIncrease = () => {
    dispatch(incrementQuantity(obj))
  };
  
  const handleRemove = () => {
    console.log("Remove item");
    setIsDeleteClicked(!isDeleteClicked);
    setIsDeleteClicked(false);

    dispatch(removeFromCart(obj))
  };
  const handleisdeleteclicked = () => {
    setIsDeleteClicked(!isDeleteClicked)
    
  }
  

  return (
    <div className="flex w-full h-[130px] border border-black overflow-hidden" key={data.productId} >
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
      <div className="min-w-[130px] max-w-[130px] h-[130px] bg-white p-1 overflow-hidden border-r-[1px] border-gray-200">
        <img
          src={`${data.productImages[0]}`}
          alt="Product Image"

          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-between h-full px-3 py-2 flex-grow">
        {/* Title */}
        <div className='w-full flex justify-between items-center'>
        <h3 className="text-md ">{data.productName}</h3>
        {data.productOffer.isOffer ? (<><div className='text-green-800'>
            <p className='text-sm'> {`Offer ${data.productOffer.offerPercent}%`}</p></div></>) : (<></>)  }
        </div>
         
        {/* Quantity Selector */}
        <div className="mt-2 flex flex-row">
          <div className='flex flex-col'>
          <p className="text-xs text-gray-600">Quantity</p>
          <div className="flex items-center mt-1 space-x-2 ">
            <button 
              onClick={()=>{
                handleDecrease()
              }} 
              className="text-sm p-1 border border-black active:scale-90 lg:hover:bg-black lg:hover:text-white hover:bg-[#FFFFFF]"
              aria-label="Decrease Quantity"
            >
              <TfiMinus />
            </button>
            <span className="text-xs px-2">{data.quantity}</span>
            <button 
              onClick={()=>{
                  handleIncrease()
              }} 
              className="text-sm p-1 border border-black active:scale-90 lg:hover:bg-black lg:hover:text-white hover:bg-[#FFFFFF]"
              aria-label="Decrease Quantity"
            >
             <IoAddSharp  />
            </button>
            
          </div>
          </div>
            
        </div>

        {/* Price and Remove */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm "><span className='line-through'>₹{data.productPrice}</span><span className='text-lg pl-2'>₹{data.productCost}</span></p>
          
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
