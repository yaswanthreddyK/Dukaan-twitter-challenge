import React from 'react'
import RevenueCard from './components/RevenueCard'
import SpecialCard from './components/SpecialCard'
import './App.css';
import Navbar from './components/Navbar';
import Button from './components/Button';
import TransactionsTable from './components/TransactionsTable';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <>
    <div className='flex'>
    <Sidebar />
    <div className='flex-grow lg:w-full bg-[#fafafa] min-h-screen font-inter min-w-[350px]'>
      <Navbar />
    <main className='p-3 md:p-7 '>
      <section className='flex flex-col gap-6'>
      <div className='flex justify-between items-center'>
        <div className='font-medium text-xl text-black'>Overview</div>
        <button className='flex items-center bg-white border gap-3 px-4 py-2 rounded-sm text-[#4D4D4D]'>
          This Month
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
        </button>
      </div>
    <div className=''>
    <div className='flex gap-3 flex-wrap'>
      <SpecialCard />
      <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orders={13}/>
      <RevenueCard className={"col-span-full lg:col-span-1"} title={"Amount Processed"} amount={"23,92,312.19"}/>
    </div>
    </div>
    </section>

    <section className='py-6'>
      <h4 className='text-xl font-medium text-midblack'>Transactions | This Month</h4>
      <div className='py-4 flex gap-3'>
        <Button text={'Payouts'} count={22}/>
        <Button primary text={'Refunds'} count={6}/>
      </div>

      <TransactionsTable />
    </section>
    </main>
    </div>
    </div>

    </>
  )
}

export default App