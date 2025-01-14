import React from 'react'

const BrandHeader = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div>
            <p className='text-sm text-center'>உ</p>
            <h1 className='tracking-[-2px] sm:tracking-[-4px] text-3xl sm:text-4xl font-bold mt-4'>
                Happy Crackers
            </h1>
        </div>
        <div className='flex flex-col justify-center items-center mt-4'>
            <p className='text-xs sm:text-sm max-w-sm sm:max-w-md text-center'>
            <span className='font-medium underline'>Address: </span>15/1F , P.K.N, Bypass Rd, near Srinivasa Mess, Sivakasi, Tamil Nadu 626189.
            </p>
            <p className='text-xs lg:text-sm max-w-sm sm:max-w-md text-center'>
            <span className='font-medium underline'>Phone: </span>94439 19192, 75980 07270
            </p>
        </div>
    </div>
  )
}

export default BrandHeader