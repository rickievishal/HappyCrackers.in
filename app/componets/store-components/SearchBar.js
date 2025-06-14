import { Input } from 'postcss'
import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = ({className}) => {
    console.log(className)
  return (
    <div className='flex justify-between items-center  tracking-tighter  relative'>
      <CiSearch className='absolute left-[10px] text-[20px]' />
      <input className={`${className} w-full px-2 pl-[40px] py-2 border-[1px] border-black placeholder:tracking-tighter outline-none focus:border-[1px]`} placeholder='Search'/>
    </div>
  )
}

export default SearchBar