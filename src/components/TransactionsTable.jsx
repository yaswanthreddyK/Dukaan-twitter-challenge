import React from 'react'
import TransactionFilters from './TransactionFilters'

const ORDERS = [
    {
      "orderID": "#281209",
      "status": "Successful",
      "transactionID": "TRX123456",
      "refundDate": "Today, 8:45 PM",
      "orderAmount": "₹1125.00"
    },
    {
      "orderID": "#281210",
      "status": "Processing",
      "transactionID": "TRX789012",
      "refundDate": "Tomorrow, 10:00 AM",
      "orderAmount": "₹950.50"
    },
    {
      "orderID": "#281211",
      "status": "Successful",
      "transactionID": "TRX345678",
      "refundDate": "Yesterday, 3:30 PM",
      "orderAmount": "₹750.00"
    },
    {
      "orderID": "#281212",
      "status": "Successful",
      "transactionID": "TRX901234",
      "refundDate": "Today, 11:20 AM",
      "orderAmount": "₹2000.00"
    },
    {
      "orderID": "#281213",
      "status": "Processing",
      "transactionID": "TRX567890",
      "refundDate": "Tomorrow, 9:00 AM",
      "orderAmount": "₹1800.00"
    },
    {
      "orderID": "#281214",
      "status": "Processing",
      "transactionID": "TRX098765",
      "refundDate": "Yesterday, 2:00 PM",
      "orderAmount": "₹500.00"
    },
    {
      "orderID": "#281215",
      "status": "Successful",
      "transactionID": "TRX456789",
      "refundDate": "Today, 10:30 AM",
      "orderAmount": "₹3000.00"
    },
    {
      "orderID": "#281216",
      "status": "Processing",
      "transactionID": "TRX987654",
      "refundDate": "Tomorrow, 11:30 AM",
      "orderAmount": "₹1200.00"
    },
    {
      "orderID": "#281217",
      "status": "Processing",
      "transactionID": "TRX654321",
      "refundDate": "Yesterday, 4:00 PM",
      "orderAmount": "₹900.00"
    },
    {
      "orderID": "#281218",
      "status": "Successful",
      "transactionID": "TRX234567",
      "refundDate": "Today, 9:45 AM",
      "orderAmount": "₹1500.00"
    }
  ]

const TransactionsTable = () => {
  return (
    <div className='bg-white p-3 rounded-md flex flex-col gap-3 '>
       <TransactionFilters />
       <div className='w-full overflow-x-auto'>
       <table className='w-full text-sm font-medium'>
        <thead>
        <tr className='w-full text-left text-[#4D4D4D] text-sm tracking-wider rounded-sm bg-[#f2f2f2]'>
            <th className='font-medium p-3'>Order ID</th>
            <th className='font-medium p-3'>Status</th>
            <th className='font-medium p-3'>Transaction ID</th>
            <th className='font-medium p-3'>Refund Date</th>
            <th className='font-medium text-right p-3'>Order Amount</th>
        </tr>
        </thead>
        <tbody>
          {
            ORDERS.map((order, index) => {
              return  <tr key={index} className='font-normal'>
              <td className='p-3 text-midblue'>{order.orderID}</td>
              <td className='p-3 text-[#1A181E]'>{ order.status === 'Successful' ? <div className='flex items-center gap-2'><div className='w-[10px] h-[10px] rounded-full bg-[#22C55E]'></div> Successful</div> : <div className='flex items-center gap-2'><div className='w-[10px] h-[10px] rounded-full bg-[#999999]'></div> Processing</div>}</td>
              <td className='p-3 text-[#4D4D4D] '>{order.transactionID}</td>
              <td className='p-3 text-[#4D4D4D] whitespace-nowrap'>{order.refundDate}</td>
              <td className='p-3 text-[#1A181E] text-end'>{order.orderAmount}</td>
             </tr>
            })
          }
          
        </tbody>
       </table>
       </div>
    </div>
  )
}

export default TransactionsTable