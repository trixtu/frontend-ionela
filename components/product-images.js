import Image from 'next/image'
import React, { useState } from 'react'

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0])

  return (
    <>
      <div className="w-full h-[350px] relative">
        <Image
          src={activeImage}
          alt=""
          fill={true}
          objectFit="contain"
          placeholder="empty"
          priority
          loading="eager"
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
