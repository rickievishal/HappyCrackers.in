import React from 'react'

const ImageAdd = ({onChange}) => {
  return (
    <div>
      <input
          type="file"
          accept="image/*"
          onChange={onChange}
        />
    </div>
  )
}

export default ImageAdd