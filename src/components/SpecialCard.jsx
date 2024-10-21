import React from 'react'
import RevenueCard from './RevenueCard'

const SpecialCard = ({className}) => {
  return (
    <div className='bg-midblue flex-grow hover:bg-deepblue rounded-md shadow-md'>
    <RevenueCard title={"Next Payout"} className={className} amount={"3,22,353"} orders={21} colored={true} />
      <div className='text-[#F2F2F2]  flex justify-between bg-deepblue px-5 py-2 rounded-md'>
        <div>Next Payment Date:</div>
        <div>Today, 4:00PM</div>
      </div>
    </div>
  )
}

export default SpecialCard