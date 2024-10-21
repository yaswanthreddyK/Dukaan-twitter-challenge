import React from 'react'
import { sidebarNavigation } from '../Constants'
import { cn } from '../utils'
import Wallet from '../assets/icons/Wallet';

const Sidebar = () => {
  return (
<>
<aside id="default-sidebar" className="lg:sticky lg:flex-shrink-0 fixed top-0 left-0  z-40 w-[224px] h-screen transition-transform -translate-x-full lg:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto  bg-[#1E2640] flex flex-col justify-between">
      <div className='flex flex-col justify-between gap-5'>

      <div className='flex items-center justify-between'>
         <div className='flex gap-2 items-center'>    
         <div className='flex items-center'>
            <img className="w-full h-full object-cover " src="../../profile.svg" alt="" />
         </div>
         <div className='self-start'>
            <div className='font-medium text-base text-white'>Nishyan</div>
            <a href="#" className='text-[#D2D4D9] underline text-sm'>Visit Store</a>
         </div>
         </div>
         <div className='text-white'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
         </div>
      </div>
      <ul className=" font-medium">
         {
            sidebarNavigation.map(List => {
               const Icon = List.icon
               return  <li className=''>
               <a href="#" className={cn("text-sm font-medium flex items-center px-[10px] py-2 rounded-lg text-[#D2D4D9]  hover:bg-gray-100 dark:hover:bg-gray-700 group", {"bg-gray-700" : List.name === 'Payouts'})}>
                  <Icon />
                  <span className="ms-3">{List.name}</span>
               </a>
            </li>
            })
         }
        
      </ul>
      </div>

      <div className='text-white rounded-md flex items-center text-sm gap-2 bg-[#353C53] px-2 py-1 mx-1'>
         <div className='p-1 rounded-md bg-[#FFFFFF1A]'>
            <Wallet />
         </div>
         <div>
            <div className='text-[13px]'>Available Credits</div>
            <div className='font-medium text-base'>224.10</div>
         </div>
      </div>
   </div>
</aside>

</>

  )
}

export default Sidebar