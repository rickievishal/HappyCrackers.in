'use client'

import React from 'react'
import OfferTag from '../advertisment-components/OfferTag'
import placeholder from "./product-card-placeholder.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { addToCart } from '@/lib/reduxStore/Reducers'
import { useDispatch } from 'react-redux'

const ProductCard = ({ data }) => {
  if (!data || !data.productId) return null; // Prevent crash
  console.log(data)
  const {
    productId,
    productName,
    productImages,
    productCost,
    productPrice,
    productOffer,
  } = data;
  const dispatch = useDispatch()
  const dispatchAdd = () =>{
    dispatch(addToCart(data));
  }
  return (
      <div className='flex flex-col w-[calc((100vw-50px)/2)] sm:w-[calc((100vw-60px)/3)] lg:w-[250px] cursor-pointer'>
        <Link href={`/store/products/${productId}`}>
        <div className='w-full h-[calc(0.7*(100vw+100px))] sm:h-[calc(0.5*(100vw-40px))] lg:h-[380px] border-[1px] border-black relative'>
          
          {productOffer?.isOffer && (
            <div className='absolute top-0 right-0 translate-x-[20%] -translate-y-[50%] z-20'>
              <OfferTag OfferPercentage={productOffer.offerPercent} color='red' />
            </div>
          )}

          <div className='w-full h-[78%] sm:h-[80%] border-b-[1px] overflow-hidden'>
            <img
              src={productImages?.[0] || placeholder}
              className='h-full w-full object-cover lg:hover:scale-[102%] duration-200 ease-in-out'
              alt='productImage'
            />
          </div>

          <div className='w-full h-[22%] sm:h-[20%] flex flex-col justify-start items-start px-2 py-3'>
            <h1 className='text-black text-md leading-tight'>{productName.substring(0,23)}</h1>
            <OfferPriceComponent
              newPrice={productCost}
              olderPrice={productPrice}
              isoffer={productOffer?.isOffer}
            />
            <p className='text-xs'>by Sonny</p>
          </div>
        </div>

    </Link>
        <div className='w-full mt-1'>
          <button className='w-full text-xs bg-black text-white py-2 lg:py-3 lg:hover:bg-[#232323] lg:hover:scale-[101%] ease-in-out duration-200' onClick={dispatchAdd}>
            Add to Cart
          </button>
        </div>
      </div>
  );
};

const OfferPriceComponent = ({ olderPrice, newPrice, isoffer }) => {
  return (
    <p className='text-sm'>
      {isoffer ? (
        <span className='flex items-center'>
          <span className='text-xs text-slate-900 line-through'>₹ {olderPrice}</span>
          <span className='pl-1'>₹ {newPrice}</span>
        </span>
      ) : (
        <span>₹ {olderPrice}</span>
      )}
    </p>
  );
};

export default ProductCard;
