"use client"
import React, { useEffect, useState } from 'react'
import ProductImageHoverZoom from '../cart-componets/ProuductPageImageZoom'
import Image from 'next/image'
const ProductGallery = () => {
   const [ActiveImage, setActiveImage] = useState(0)

    const images = ["https://www.lakshmicrackers.in/assets/img/slider/2.png","https://dasscrackers.com/wp-content/uploads/2024/03/IMG_20240720_112428-scaled.jpg","https://crackersonline.in/wp-content/uploads/2022/07/crackersonline.in-15.png"]
  return (
    <div className='w-full'>
        <div className='min-w-full lg:max-w-xl h-[calc(60vh)] sm:h-[calc(100vw-250px)] lg:h-[calc(100vh-300px)]  border-[1px] border-black'>
                          {/* <ImageZoom bigImage={image} ><img width="200" height="200"  src={image} className="image w-full h-full" alt="example_image" /></ImageZoom> */}
                          <ProductImageHoverZoom src={images[ActiveImage]} alt='productimage'/>
                          {/* <Image src={image} alt='productimage' width={100} height={100} className='w-full h-full object-cover' /> */}
        </div>
        <div className='flex flex-wrap gap-2 mt-2'>
            {
                images.map((imgurl,index)=>
                    (<div className={`w-[50px] h-[50px] border-[1px] ${ActiveImage === index ? "border-black" :  "border-slate-400"}`} key={index} onMouseEnter={()=>{
                        setActiveImage(index)
                    }} onClick={()=>{
                        setActiveImage(index)
                    }}>
                        <img src={imgurl} alt='productpage' className='w-full h-full'/>
                    </div>  
                    ))
            }
        </div>
    </div>
  )
}

export default ProductGallery