import useBookState from '@/hooks/useBookState'
import React from 'react'
import OrderBookComponent from './OrderBook'
import OrderBook from './RealTime'

const StaticChat = () => { 
  const [loading, bookData] = useBookState()
  // console.log(bookData)
  return (
    <div className='h-60 w-full bg-gray-100 rounded-lg border border-gray-200 p-4'>
     {loading && ( <div className="flex text-gray-600 space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fill-rule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" clip-rule="evenodd" />
</svg>
 <p className="">books available shortly</p>
      </div>)}

      {
        !loading && (<OrderBook />)
      }
    </div>
  )
}

export default StaticChat