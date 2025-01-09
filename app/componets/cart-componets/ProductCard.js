import React from 'react'
import OfferTag from '../advertisment-components/OfferTag'
import placeholder from "./product-card-placeholder.jpg"
import Image from 'next/image'
const ProductCard = () => {
  return (
   <div className='flex flex-col w-[calc((100vw-50px)/2)]  sm:w-[calc((100vw-60px)/3)]  lg:w-[250px] '>
     <div className='w-[calc((100vw-50px)/2)] h-[calc(0.7*(100vw+100px))] sm:w-[calc((100vw-60px)/3)] sm:h-[calc(0.5*(100vw-40px))] lg:w-[250px] lg:h-[380px] border-[1px] border-black relative'>
        <div className='absolute top-0 right-0 translate-x-[20%] -translate-y-[50%] z-20'> 
            <OfferTag OfferPercentage={"50"} color={"red"}/>
        </div>
        <div className='w-full h-[78%] sm:h-[80%]  border-b-[1px] overflow-hidden'>
            <Image src={placeholder} className='h-full w-full object-cover lg:hover:scale-[102%] duration-200 ease-in-out' width={"100%"} height={"100%"} alt='productImage'/>
        </div>
        <div className='w-full h-[22%] sm:h-[20%] flex flex-col justify-start items-start px-2 py-3'>
            <div className='flex flex-col justify-start items-start '>
                <h1 className='text-black text-md leading-tight'>
                    Beast Bundle
                </h1>

                <OfferPriceComponet newPrice={"234"} olderPrice={"5678"} isoffer={true}/>
                <p className='text-xs'>by Sonny</p>
            </div>
        </div>
    </div>
    <div className=' w-full mt-1'>
        <button className='w-full h-full text-xs bg-black text-white py-2 lg:py-3 lg:hover:bg-[#232323] lg:hover:scale-[101%] ease-in-out duration-200'>
            Add to Cart
        </button>
    </div>
   </div>
  )
}
const OfferPriceComponet = ({olderPrice,newPrice,isoffer}) =>{
    return (
        <p className='text-sm'>
       {
        isoffer ? (<span className='flex items-center justify-center'>
            <span className='text-xs text-slate-900 line-through'>₹ {olderPrice}</span>
            <span className='pl-1'>₹ {newPrice}</span>
            </span>) :(
                <span className=''>₹ {olderPrice}</span>
            )
       }
        </p>
    )
}

export default ProductCard