import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`px-6 py-4 rounded-lg bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
       Get Started
    </button>
  )
}

export default Button