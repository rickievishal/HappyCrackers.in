"use client"
import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'

const AdMarquee = () => {
    const [isMarqueePlaying, setisMarqueePlaying] = useState(true)
    const HandleMouseEnter = () => {
        setisMarqueePlaying(false)
    }
    const HandleMouseLeave = () =>{
        setisMarqueePlaying(true)
    }
  return (
        <div className='w-full' onMouseEnter={HandleMouseEnter} onMouseLeave={HandleMouseLeave}>
            <Marquee className='text-white bg-[#0c0c0c] py-2 w-full text-sm flex flex-row gap-5' autoFill={true} play={isMarqueePlaying}>
            <span className='ml-5'>
            Enjoy offers upto 70% on your first purchase.
            </span>
            
            <span className='ml-5'>
            Children’s special gift box.
            </span>
            <span className='ml-5'>
            Wedding special bundle.
            </span>
            <span className='ml-5'>
            Karthighai special bundle.
            </span>
            <span className='ml-5'>
            Christmas special bundle.
            </span>
            <span className='ml-5'>
            Birthday special bundle.
            </span>
            <span className='ml-5'>
            Event celebrations bundle.
            </span>
        </Marquee>
        </div>
  )
}

export default AdMarquee