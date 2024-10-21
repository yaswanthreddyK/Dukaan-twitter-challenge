import React from 'react'

const Navbar = () => {
  return (
   <nav className='sticky top-0 w-full px-3 md:px-7 py-3 bg-white flex items-center gap-3 justify-between shadow-sm'>
    <div className='flex items-center gap-2 sm:flex-grow '>
    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className=" lg:hidden inline-flex items-center text-sm text-[black] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 ">
   <span className="sr-only">Open sidebar</span>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</button>
      <h4 className='text-xl font-medium text-midblack'>Payouts</h4>
      <div className='flex items-center gap-2 text-xs text-[#4D4D4D]'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
        </svg>
        <span className='hidden sm:inline'>
        How it works
        </span>
      </div>
    </div>
    <div className='flex items-center flex-1 sm:flex-none  gap-3 text-[#4D4D4D]  bg-[#f2f2f2] p-2 text-base sm:text-lg rounded-md'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <input type='text' className='outline-0 bg-inherit w-full border-0 p-0' placeholder='Search features, tutorials, etc.'/>
    </div>
    <div className='text-[#4D4D4D] flex gap-3 items-center sm:flex-grow  justify-end'>
      <div className='bg-[#E6E6E6] p-2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full'>
        <img src="../../speaker.webp" alt="" />
      </div>
      <div className='bg-[#E6E6E6] p-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center'>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="text-base w-5 h-5 sm:w-6 sm:h-6"  xmlns="http://www.w3.org/2000/svg"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>
      </div>
    </div>
   </nav>

  )
}

export default Navbar