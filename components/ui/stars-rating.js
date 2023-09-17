import React, { useState } from 'react'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import StarRateIcon from '@mui/icons-material/StarRate'
export default function StarsRating({
  defaultHowMany = 0,
  disabled,
  size = 'md',
  onChange = () => {},
}) {
  const [howMany, setHowMany] = useState(defaultHowMany)
  const five = [1, 2, 3, 4, 5]

  function handleStarClick(n) {
    if (disabled) {
      return
    }
    setHowMany(n)
    onChange(n)
  }
  return (
    <div>
      {five.map((n, index) => (
        <button onClick={() => handleStarClick(n)} key={index} size={size}>
          {howMany >= n ? (
            <StarRateIcon className="cursor-pointer text-textGold" />
          ) : (
            <StarOutlineIcon className="cursor-pointer text-textGold" />
          )}
        </button>
      ))}
    </div>
  )
}
