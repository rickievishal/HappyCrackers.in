import React from 'react'

const ButtonComp = ({buttonName,className,onClick}) => {
  return (
    <button className={`border-[1px] bg-black text-sm  text-white px-6  py-2 tracking-tighter lg:hover:bg-[#151515] ${className}`} onClick={onClick}>
            {buttonName}
    </button>
  )
}

export default ButtonComp