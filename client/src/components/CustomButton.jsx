import React from 'react'

function CustomButton({title,containerStyles, iconRight, type, onClick,disabled }) {
  return (
   <button
   onClick={!disabled ? onClick : null}
   type={type || "button"}
   className={`inline-flex items-center ${containerStyles} ${disabled ? disabledStyles : ''}`}
   disabled={disabled}
   >{title}

    {iconRight && <div className='ml-2'>{iconRight}</div>}
   </button>
  )
}

export default CustomButton;
