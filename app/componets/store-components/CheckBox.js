"use client"
import React, { use, useState } from 'react'
import { motion } from 'framer-motion'
const CheckBox = ({className}) => {
    const [Ischecked, setIschecked] = useState(false)
  return (
    <div className='flex flex-row gap-x-2 my-4'>
        <div>
            <h1>
                Offer applied
            </h1>
        </div>
        <div className={`w-[30px] h-[30px] flex justify-center  p-1 border-black border-[1px] relative ${Ischecked ? " bg-[#BBFF27]" : " bg-[#f1f1f1]"} ${className}`} onClick={()=>{
            setIschecked(!Ischecked)
        }}>
                <motion.div initial={{y:"50%" , translateY:"-50%"}} animate={{ right: Ischecked ? '4px' : 'auto', left: Ischecked ? 'auto' : '4px' }}
                transition={{ duration: 0.3 }}  className={`w-[20px] h-[20px] bg-black absolute`} >
                </motion.div>
        </div>
    </div>
  )
}

export default CheckBox