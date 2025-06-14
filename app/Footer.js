import Image from 'next/image'
import React from 'react'
import image from "./assets/logo/happycrackersfooter.png"
import hero from "./assets/logo/footerhero.png"
const Footer = () => {
  return (
    <div className='w-full pb-[100px] sm:pb-[150px] bg-[#000000e2] border-t-[1px] border-[#bbff27ac] relative overflow-hidden  '>
        <div className='w-full  bg-black flex justify-center items-center text-[#BBFF27] absolute bottom-0 z-20 border-t-[1px] border-[#BBFF27]'>
            <p className='text-xs p-2 text-center'>
            for queries feel free to reach us out through whatsapp +91 9443919192, +91 7598007270 
            </p>
        </div>
        <div className='w-full h-[128px] absolute bottom-0 right-0 overflow-hidden flex justify-center items-center'>
            {/* <Image src={image} height={"100%"} width={"100%"} className='object-cover' alt='footer-element'/> */}
            <p className='text-[128px] leading-5 font-bold translate-y-[100%] text-[#BBFF27]'>HappyCrackers.com</p>
        </div>
        <div className='max-w-7xl mx-auto flex flex-col sm:flex-row text-white p-10'>
            <div className='w-full flex flex-wrap lg:flex-row justify-between sm:justify-start sm:gap-20'>
                    <div>
                        <h1 className='text-sm'>
                            Social Media
                        </h1>
                        <ul className='flex flex-col space-y-2 mt-2 text-xs'>
                            <li><a href='' className='hover:cursor-pointer hover:underline'>Instagram</a></li>
                            <li><a href='' className='hover:cursor-pointer hover:underline'>Whatsapp</a></li>
                            <li><a href='' className='hover:cursor-pointer hover:underline'>Website</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-sm'>
                            Phone
                        </h1>
                        <ul className='flex flex-col space-y-2 mt-2 text-xs'>
                            <li>+91 9443919192</li>
                            <li>+91 7598007270</li>
                        </ul>
                    </div>
            </div>
            <div className='w-full max-w-[300px]  h-[300px]  mt-16  sm:mt-0 bg-white overflow-hidden border-[1px] border-white object-cover relative px-3 pt-3 rotate-3'>
                <div className='w-full absolute bottom-0 left-0 flex justify-center items-center z-20'>
                    <p className='w-full py-4 bg-white text-black text-xs text-center font-thin'>
                        Let the celebration begin
                    </p>
                </div>
                <Image src={hero} height={"100%"} width={"100%"} className='w-full h-full  scale-105 object-cover z-10'  alt='footer-element'/>
            </div>
        </div>
    </div>
  )
}

export default Footer