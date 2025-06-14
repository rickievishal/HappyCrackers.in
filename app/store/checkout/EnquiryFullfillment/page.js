import React from 'react'

const page = () => {
  return (
    <div className='w-full h-[calc(80vh)] flex flex-col justify-center items-center tracking-tighter '>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-2xl font-bold'>
                Thankyou
            </p>
            <h1 className='mt-2 text-lg'>
                Your Enquiry has been placed.
            </h1>
            <p className='max-w-lg text-center text-xs mt-1'>
              We will reach you out very shortly.
            </p>
        </div>
    </div>
  )
}

export default page