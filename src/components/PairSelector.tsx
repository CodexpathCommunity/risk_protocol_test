import Image from 'next/image'
import React from 'react'

const PairSelector = () => {
  return (
    <div className='mr-20 border border-gray-200 rounded-lg py-4 w-96 shadow-lg'>
        <div className="border-b border-b-gray-300 px-4">
            <p className="p-2 border-b-2 border-b-gray-600 font-bold text-lg w-min">Market</p>
        </div>
        <div className="py-2">
            <div className="border-b border-b-gray-300 p-4 space-y-4">
                <p className="font-normal text-lg">You pay</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center border-2 border-gray-20 py-2 px-4 max-w-max space-x-2 rounded-lg">
                        <div className="border border-gray-200 rounded-full py-1 px-2 bg-white max-w-max">

                        <Image src={"/eth.svg"} height={10} width={10} alt='ethlogo' />
                        </div>
                    <p className=" font-bold text-lg">ETH</p>  

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
</svg>
         
                    </div>

                    <div className="bg-gray-200 flex flex-col items-end pl-20 p-2 rounded-lg">
                            <p className="font-bold text-lg">0</p>
                            <p className="">$0.00</p>
                    </div>
                    
                </div>
            </div>
            <div className="p-4 space-y-4">
                <p className="text-normal font-semibold">You Recieve</p>
                <div className="flex items-center space-x-2">
                    <p className="text-2xl font-bold">Choose Token</p>
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
</svg>
         
                </div>
            </div>
        </div>
    </div>
  )
}

export default PairSelector