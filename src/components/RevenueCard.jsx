import clsx from 'clsx'
import React from 'react'
import { cn } from '../utils'

const RevenueCard = ({title, amount, orders = 0, colored, className}) => {
  return (
    <div className={cn('min-w-[300px] flex-grow shadow-sm bg-[#ffff] rounded-md p-5 flex flex-col gap-3 h-max',className, {"bg-midblue hover:bg-deepblue text-[#ffff]": colored})}>
        <div className={cn('flex items-center gap-3 text-[#4D4D4D]', {"text-inherit": colored})}>
            {title}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline-block size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
        </svg>
        </div>
        <div className='flex justify-between'>
            <div className='text-3xl font-medium'>₹{amount}</div>
            {orders ? <div className={cn('underline font-medium flex items-center  text-midblue', {"text-inherit": colored})}>{orders} Orders 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

            </div> : null}
        </div>
    </div>
  )
}

export default RevenueCard