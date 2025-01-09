import Image from 'next/image'
import React from 'react'
import { RiArrowRightLine } from "react-icons/ri";
import  WeddingCategoryHero from "../../assets/Category-assets/images/WeddingCategory.png"
const CategoryCard = (data) => {
    console.log(data.categoryName)
    const Categoryname = data.categoryName;
  return (
    <div className='w-[200px] h-[150px] rounded-3xl bg-black  overflow-hidden flex flex-col relative shadow-lg hover:scale-105 ease-in-out duration-200 hover:shadow-xl hover:cursor-pointer border-[1px] border-black '>
        <div className='w-full h-full'>
        <Image className='w-full h-full object-cover saturate-[.3]' width={"100%"} height={"100%"} src={WeddingCategoryHero} alt={"Wedding Category"} />
        </div>
        <div className='w-full flex justify-center items-center text-sm py-1 bg-[#BBFF27] absolute bottom-0 left-0 '>
            <p className='pr-1'>
                {Categoryname}
            </p>
            <RiArrowRightLine />
        </div>
    </div>
  )
}

export default CategoryCard