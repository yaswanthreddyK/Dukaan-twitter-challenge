import React from 'react'
import { cn } from '../utils'

const Button = ({text, count, primary = false}) => {
  return (
   <button className={cn('bg-[#E6E6E6] text-[#808080] px-4 py-[6px] rounded-full font-inter', {
    "text-white bg-midblue" : primary
   })}>{text} {`(${count})`}</button>
  )
}

export default Button