/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0])

  return (
    <>
      <div className="w-full h-[380px] relative">
        <img
          src={activeImage}
          alt=""
          loading="lazy"
          className="w-full rounded-sm object-contain h-full"
        />
      </div>
      <div className="flex gap-4 flex-grow-0 mt-2">
        {images.map((image, index) => (
          <div
            className={'border h-24 p-1 cursor-pointer rounded-sm shadow-sm'}
            key={index}
            onClick={() => setActiveImage(image)}
            active={image === activeImage}
          >
            <img className="w-full h-full" src={image} alt="" />
          </div>
        ))}
      </div>
    </>
  )
}
