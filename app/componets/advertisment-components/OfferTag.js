import React from 'react'

const OfferTag = ({OfferPercentage,color}) => {
  return (
    <div className='text-xs px-3 py-1 text-black bg-[#BBFF27] sm:text-sm rounded-full border-[1px] border-black'>
       Offer {OfferPercentage}%
    </div>
  )
}

export default OfferTag